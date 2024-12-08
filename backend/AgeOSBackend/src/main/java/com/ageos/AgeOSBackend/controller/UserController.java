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
    public ResponseEntity<String> registerUser(@RequestBody UserDTO userDTO) {
        if (!userDTO.getSenha().equals(userDTO.getRepetirSenha())) {
            return ResponseEntity.badRequest().body("As senhas não coincidem!");
        }
        if (userDTO.getCpf().length() != 11) {
            return ResponseEntity.badRequest().body("O CPF deve ter 11 dígitos!");
        }
        if (userDTO.getNome().isBlank() || userDTO.getSobrenome().isBlank() || userDTO.getEmail().isBlank() || userDTO.getSenha().isBlank()) {
            return ResponseEntity.badRequest().body("Todos os campos são obrigatórios!");
        }

        String response = userService.cadastrarUsuario(
                userDTO.getNome(),
                userDTO.getSobrenome(),
                userDTO.getCpf(),
                userDTO.getEmail(),
                userDTO.getSenha()
        );
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String email, @RequestParam String senha) {
        String response = userService.loginUsuario(email, senha);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return ResponseEntity.ok(createdUser);
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
