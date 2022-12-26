package pre019.server.exception;

import lombok.Getter;

public enum ExceptionCode { // 에러 정보를 custom 등록
    MEMBER_NOT_FOUND(404,"Member Not Found"),
    MEMBER_EXISTS(404,"Member Already Exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
