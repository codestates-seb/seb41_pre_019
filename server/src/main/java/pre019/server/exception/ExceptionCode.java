package pre019.server.exception;

import lombok.Getter;

public enum ExceptionCode { // 에러 정보를 custom 등록
    USER_NOT_FOUND(404,"User Not Found"),
    USER_EXISTS(404,"User Already Exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
