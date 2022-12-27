package pre019.server.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPatchDto {
    private long userId;
    private String password;
    private String name;
    private int reputation;
}
