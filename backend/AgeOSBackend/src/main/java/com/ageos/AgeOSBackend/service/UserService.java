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

    public String cadastrarUsuario(String nome, String sobrenome, String cpf, String email, String senha) {
        // Verifica se o e-mail já está cadastrado
        if (userRepository.existsByEmail(email)) {
            return "E-mail já cadastrado!";
        }

        // Verifica se o CPF já está cadastrado
        if (userRepository.existsByCpf(cpf)) {
            return "CPF já cadastrado!";
        }

        // Cria o novo usuário
        User user = new User();
        user.setName(nome);
        user.setSurname(sobrenome);
        user.setCpf(cpf);
        user.setEmail(email);
        user.setPassword(senha);

        userRepository.save(user);
        return "Usuário cadastrado com sucesso!";
    }
}

