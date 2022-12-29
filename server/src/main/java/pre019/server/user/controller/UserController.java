package pre019.server.user.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre019.server.dto.MultiResponseDto;
import pre019.server.user.dto.UserPatchDto;
import pre019.server.user.dto.UserPostDto;
import pre019.server.user.entity.User;
import pre019.server.user.mapper.UserMapper;
import pre019.server.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
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
        User user = userService.createUser(mapper.userPostDtoToUser(userPostDto));
        return new ResponseEntity(mapper.userToUserResponseDto(user), HttpStatus.CREATED);
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
    public ResponseEntity getUsers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size,
                                   @RequestParam(required = false) String tab) {
        //TODO 전체 사용자 조회
        Page<User> pageUsers = userService.findUsers(page-1, size, tab); // 실제 페이지가 0부터 시작
        List<User> users = pageUsers.getContent(); // 페이지 컨텐츠

        return new ResponseEntity(
                new MultiResponseDto<>(mapper.usersToUserResponses(users), pageUsers) // User엔티티 -> UserResponseDto
                ,HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Min(1) long userId,
                                  @RequestParam(required = false) String tab) {
        //TODO 개별 사용자 조회 + tab 쿼리 파라미터에 따른 정보 조회
        User user = userService.findUser(userId);
        return new ResponseEntity(user, HttpStatus.OK);
    }

    @PatchMapping("/edit/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") @Min(1) long userId,
                                    @RequestBody UserPatchDto userPatchDto) {
        //TODO 회원정보 수정
        userPatchDto.setUserId(userId);
        User user = userService.updateUser(mapper.userPatchDtoToUser(userPatchDto));
        return new ResponseEntity(mapper.userToUserResponseDto(user), HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") @Min(1) long userId) {
        //TODO 회원탈퇴
        userService.deleteUser(userId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}