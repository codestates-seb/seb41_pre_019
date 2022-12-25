package pre019.server.user.service;

import org.springframework.stereotype.Service;
import pre019.server.user.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // TODO 비즈니스 로직 구현
}
