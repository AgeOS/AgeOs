package com.ageos.AgeOSBackend.service;

import com.ageos.AgeOSBackend.model.User;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private List<User> users = new ArrayList<>();
    private Long nextId = 1L;

    public User createUser(User user) {
        user.setPk_id_user(nextId++); // Gera um ID único para o usuário
        users.add(user);
        return user;
    }

    public List<User> getAllUsers() {
        return users;
    }

    public Optional<User> getUserById(Long id) {
        return users.stream().filter(user -> user.getPk_id_user().equals(id)).findFirst();
    }

    public User updateUser(Long id, User updatedUser) {
        Optional<User> existingUserOpt = getUserById(id);

        if (existingUserOpt.isPresent()) {
            User existingUser = existingUserOpt.get();
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            return existingUser;
        } else {
            return null; // Caso o usuário não seja encontrado
        }
    }

    public boolean deleteUser(Long id) {
        return users.removeIf(user -> user.getPk_id_user().equals(id));
    }
}