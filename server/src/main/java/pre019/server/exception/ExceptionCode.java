package pre019.server.exception;

import lombok.Getter;

public enum ExceptionCode { // 에러 정보를 custom 등록
    USER_NOT_FOUND(404,"User Not Found :: 해당 사용자를 찾을 수 없습니다."),
    USER_EXISTS(404,"User Already Exists :: 이미 등록된 이메일입니다."),
    QUESTION_NOT_FOUND(404,"Question Not Found :: 해당 질문을 찾을 수 없습니다."),
    ANSWER_NOT_FOUND(404,"Answer Not Found :: 해당 답변을 찾을 수 없습니다.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
