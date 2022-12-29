package pre019.server.exception;

import lombok.Getter;

public class BusinessLogicException extends RuntimeException{
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage()); // BusinessLogicException 에러메시지를 설정
        this.exceptionCode = exceptionCode; // ExceptionCode 설정
    }
}
