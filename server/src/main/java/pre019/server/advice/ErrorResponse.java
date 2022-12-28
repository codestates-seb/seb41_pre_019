package pre019.server.advice;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import pre019.server.exception.ExceptionCode;
import pre019.server.exception.ExceptionCode;

import javax.validation.Constraint;
import javax.validation.ConstraintViolation;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
public class ErrorResponse {
    // 에러메시지의 일부만 필터링하여 응답으로 전송하기 위한 클래스

    private List<FieldError> fieldErrors;
    private List<ConstraintViolationError> violationErrors;
    private ExceptionCode exceptionCode;

    private ErrorResponse(List<FieldError> fieldErrors, 
                          List<ConstraintViolationError> violationErrors,
                          ExceptionCode exceptionCode) {
        this.fieldErrors = fieldErrors;
        this.violationErrors = violationErrors;
        this.exceptionCode = exceptionCode;
    } // ErrorResponse의 역할: 에러 정보를 담는 것.

    public static ErrorResponse of(BindingResult bindingResult) {
        return new ErrorResponse(FieldError.of(bindingResult), null, null);
    } // fieldError 정보를 담는 메서드.

    public static ErrorResponse of(Set<ConstraintViolation<?>> violations) {
        return new ErrorResponse(null, ConstraintViolationError.of(violations), null);
    } // violation 정보를 담는 메서드.

    public static ErrorResponse of(ExceptionCode exceptionCode) {
        return new ErrorResponse(null, null, exceptionCode);
    } // ErrorResponse에 BusinessLogic의 exceptionCode 정보를 담는 메서드.
    
    @Getter
    public static class FieldError {
        private String field;
        private Object rejectedValue;
        private String reason;

        private FieldError(String field, Object rejectedValue, String reason) {
            this.field = field;
            this.rejectedValue = rejectedValue;
            this.reason = reason;
        }

        // BindingResult 로 부터 Custom FieldError를 추출하는 메서드
        public static List<FieldError> of(BindingResult bindingResult) {
            final List<org.springframework.validation.FieldError> fieldErrors = bindingResult.getFieldErrors();
            return fieldErrors.stream()
                    .map(error -> new FieldError(
                            error.getField(),
                            error.getRejectedValue() == null ?
                                    "" : error.getRejectedValue().toString(),
                            error.getDefaultMessage()
                    )).collect(Collectors.toList());
        }
    }

    @Getter
    public static class ConstraintViolationError {
        private String propertyPath;
        private Object rejectedValue;
        private String reason;

        private ConstraintViolationError(String propertyPath, Object rejectedValue, String reason) {
            this.propertyPath = propertyPath;
            this.rejectedValue = rejectedValue;
            this.reason = reason;
        }

        // Set<ConstraintViolation> 으로 부터 custom ConstraintViolationError를 추출하는 메서드
        public static List<ConstraintViolationError> of(
                Set<ConstraintViolation<?>> constraintViolations) {
            return constraintViolations.stream()
                    .map(constraintViolation -> new ConstraintViolationError(
                            constraintViolation.getPropertyPath().toString(),
                            constraintViolation.getInvalidValue().toString(),
                            constraintViolation.getMessage()
                    )).collect(Collectors.toList());
        }
    }
}
