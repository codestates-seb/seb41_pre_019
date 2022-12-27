package pre019.server.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto {
    private long userId;
    private String email;
    private String password;
    private String name;
    private int reputation;
}
