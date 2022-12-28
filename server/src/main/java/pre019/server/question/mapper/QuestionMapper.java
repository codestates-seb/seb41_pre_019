package pre019.server.question.mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Component;
import pre019.server.question.dto.QuestionPatchDto;
import pre019.server.question.dto.QuestionPostDto;
import pre019.server.question.dto.QuestionResponseDto;
import pre019.server.question.entity.Question;

@Component
public class QuestionMapper {

    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if (questionPostDto == null) {
            return null;
        } else {
            Question question = new Question();
            question.setTitle(questionPostDto.getTitle());
            question.setContent(questionPostDto.getContent());
            return question;
        }
    }

    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if (questionPatchDto == null) {
            return null;
        } else {
            Question question = new Question();
            question.setQuestionId(questionPatchDto.getQuestionId());
            question.setTitle(questionPatchDto.getTitle());
            question.setContent(questionPatchDto.getContent());
            question.setVote(questionPatchDto.getVote());
            return question;
        }
    }

    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if (question == null) {
            return null;
        } else {
            long questionId = 0L;
            String title = null;
            String content = null;
            int vote = 0;
            if (question.getQuestionId() != null) {
                questionId = question.getQuestionId();
            }

            title = question.getTitle();
            content = question.getContent();
            vote = question.getVote();
            String username = question.getUser().getName();
            LocalDateTime createdAt = question.getCreateAt();
            QuestionResponseDto questionResponseDto = new QuestionResponseDto(questionId, title, content, username, vote, (LocalDateTime)createdAt);
            return questionResponseDto;
        }
    }

    public List<QuestionResponseDto> questionsToQuestionResponses(List<Question> questions) {
        if (questions == null) {
            return null;
        } else {
            List<QuestionResponseDto> list = new ArrayList(questions.size());
            Iterator var3 = questions.iterator();

            while(var3.hasNext()) {
                Question question = (Question)var3.next();
                list.add(this.questionToQuestionResponseDto(question));
            }

            return list;
        }
    }
}