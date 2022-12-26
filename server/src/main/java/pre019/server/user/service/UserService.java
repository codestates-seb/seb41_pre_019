package pre019.server.user.service;

import org.springframework.stereotype.Service;
import pre019.server.exception.BusinessLogicException;
import pre019.server.exception.ExceptionCode;
import pre019.server.user.entity.User;
import pre019.server.user.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // TODO 비즈니스 로직 구현

    // 회원가입, 추후 추가 정보(지역 등) 등록 구현할 것
    public User createUser(User user){
        verifyExistsEmail(user.getEmail());
        userRepository.save(user);
        return user;
    }

    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}
