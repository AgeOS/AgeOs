package com.ageos.AgeOSBackend.controller;

import com.ageos.AgeOSBackend.dto.UserDTO;
import com.ageos.AgeOSBackend.model.User;
import com.ageos.AgeOSBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity registerUser(@RequestBody UserDTO userDTO) {
        if (!userDTO.getSenha().equals(userDTO.getRepetirSenha())) {
            return ResponseEntity.badRequest().body("As senhas não coincidem!");
        }
        if (userDTO.getNome().isBlank() || userDTO.getSobrenome().isBlank() || userDTO.getEmail().isBlank() || userDTO.getSenha().isBlank()) {
            return ResponseEntity.badRequest().body("Todos os campos são obrigatórios!");
        }

        String response = userService.cadastrarUsuario(
                userDTO.getNome(),
                userDTO.getSobrenome(),
                userDTO.getEmail(),
                userDTO.getSenha()
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDTO userDTO) {
        String response = userService.loginUsuario(userDTO.getEmail(), userDTO.getSenha());

        if ("Login realizado com sucesso!".equals(response)) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        User user = userService.updateUser(id, updatedUser);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(404).body("Usuário não encontrado para atualização!");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        boolean isDeleted = userService.deleteUser(id);
        if (isDeleted) {
            return ResponseEntity.ok("Usuário excluído com sucesso!");
        } else {
            return ResponseEntity.status(404).body("Usuário não encontrado para exclusão!");
        }
    }
}
