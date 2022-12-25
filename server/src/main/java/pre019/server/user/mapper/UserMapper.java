package pre019.server.user.mapper;

import org.mapstruct.Mapper;
import pre019.server.user.dto.UserPatchDto;
import pre019.server.user.dto.UserPostDto;
import pre019.server.user.dto.UserResponseDto;
import pre019.server.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    User userPatchDtoToUser(UserPatchDto userPatchDto);
    UserResponseDto userToUserResponseDto(User user);

}
