package pre019.server.answer.mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Component;
import pre019.server.answer.dto.AnswerPatchDto;
import pre019.server.answer.dto.AnswerPostDto;
import pre019.server.answer.dto.AnswerResponseDto;
import pre019.server.answer.entity.Answer;

@Component
public class AnswerMapper {
    public AnswerMapper() {
    }

    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if (answerPostDto == null) {
            return null;
        } else {
            Answer answer = new Answer();
            answer.setContent(answerPostDto.getContent());
            return answer;
        }
    }

    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if (answerPatchDto == null) {
            return null;
        } else {
            Answer answer = new Answer();
            answer.setAnswerId(answerPatchDto.getAnswerId());
            answer.setContent(answerPatchDto.getContent());
            answer.setVote(answerPatchDto.getVote());
            return answer;
        }
    }

    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if (answer == null) {
            return null;
        } else {
            String content = null;
            long answerId = answer.getAnswerId();
            int vote = 0;
            content = answer.getContent();
            vote = answer.getVote();
            long questionId = answer.getQuestion().getQuestionId();
            long userId = answer.getUser().getUserId();
            LocalDateTime createdAt = answer.getCreateAt();
            AnswerResponseDto answerResponseDto = new AnswerResponseDto(answerId, questionId, userId, content, vote, (LocalDateTime)createdAt);
            return answerResponseDto;
        }
    }

    public List<AnswerResponseDto> answersToAnswerResponses(List<Answer> answers) {
        if(answers == null) {
            return null;
        } else {
            List<AnswerResponseDto> list = new ArrayList(answers.size());
            Iterator var3 = answers.iterator();

            while(var3.hasNext()) {
                Answer answer = (Answer)var3.next();
                list.add(this.answerToAnswerResponseDto(answer));
            }
            return list;
        }
    }
}