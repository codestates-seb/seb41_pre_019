package pre019.server.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pre019.server.user.dto.UserPostDto;
import pre019.server.user.entity.User;
import pre019.server.user.mapper.UserMapper;
import pre019.server.user.service.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    @PostMapping("/join")
    public ResponseEntity joinUser(@Valid @RequestBody UserPostDto userPostDto){
        //TODO 회원가입
        User user = mapper.userPostDtoToUser(userPostDto);
        userService.createUser(user);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(){
        //TODO 로그인
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/logout")
    public ResponseEntity logoutUser() {
        //TODO 로그아웃
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers() {
        //TODO 전체 사용자 조회
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser() {
        //TODO 개별 사용자 조회 + tab 쿼리 파라미터에 따른 정보 조회
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser() {
        //TODO 회원탈퇴
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/edit/{user-id}")
    public ResponseEntity patchUser() {
        //TODO 회원정보 수정
        return new ResponseEntity(HttpStatus.OK);
    }
}
