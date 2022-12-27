package pre019.server.user.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

    public User findUser(long userId) {
        return findVerifiedUser(userId);
    }

    // 전체 사용자 조회(페이지네이션)
    public Page<User> findUsers(int page, int size) {
        return userRepository.findAll(PageRequest.of(page,size));
    }

    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getReputation())
                .ifPresent(reputation -> findUser.setReputation(reputation));
        Optional.ofNullable(user.getPassword())
                .ifPresent(password -> findUser.setPassword(password));
        Optional.ofNullable(user.getName())
                .ifPresent(name -> findUser.setEmail(name));

        return userRepository.save(findUser);
    }

    public void deleteUser(long userId) {
        User findUser = findVerifiedUser(userId);
        userRepository.delete(findUser);
    }

    // 회원가입 시 존재하는 이메일인지 확인
    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

    // 사용자를 userId로 조회
    private User findVerifiedUser(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User user =
                optionalUser.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return user;
    }
}
