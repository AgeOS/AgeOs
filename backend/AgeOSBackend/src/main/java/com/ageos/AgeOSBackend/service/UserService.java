package com.ageos.AgeOSBackend.service;

import com.ageos.AgeOSBackend.model.User;
import com.ageos.AgeOSBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User updateUser(Long id, User updatedUser) {
        Optional<User> existingUserOpt = getUserById(id);

        if (existingUserOpt.isPresent()) {
            User existingUser = existingUserOpt.get();
            existingUser.setName(updatedUser.getName());
            existingUser.setSurname(updatedUser.getSurname());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            return userRepository.save(existingUser);
        }

        return null;
    }

    public String cadastrarUsuario(String nome, String sobrenome, String email, String senha, String repetirSenha) {
        if (!senha.equals(repetirSenha)) {
            return "As senhas não coincidem.";
        }

        Optional<User> usuarioExistente = userRepository.findByEmail(email);
        if (usuarioExistente.isPresent()) {
            return "Este e-mail já está cadastrado.";
        }

        User novoUsuario = new User();
        novoUsuario.setName(nome);
        novoUsuario.setSurname(sobrenome);
        novoUsuario.setEmail(email);
        novoUsuario.setPassword(senha);

        userRepository.save(novoUsuario);
        return "Usuário cadastrado com sucesso!";
    }

    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public String loginUsuario(String email, String senha) {
        Optional<User> usuario = userRepository.findByEmail(email);

        if (usuario.isEmpty()) {
            return "Usuário não encontrado.";
        }

        if (!usuario.get().getPassword().equals(senha)) {
            return "Senha incorreta.";
        }

        return "Login realizado com sucesso!";
    }
}
