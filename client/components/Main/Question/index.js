import userimg from "../../../assets/images/loopy.jpeg";
import { toDateFormatOfUS } from "../../../util/toDateFormatOfUS";
import Tag from "../../Tag";
import {
  AnswerCount,
  CountBox,
  InfoBox,
  InfoName,
  LastName,
  LeftSection,
  QuBox,
  QuestionText,
  QuestionTitle,
  QuList,
  RightSection,
  TagBox,
  TagInFooter,
  TextSection,
  UserImg,
  ViewsCount,
  VotesCount,
} from "./style";

const Question = ({ list }) => {
  // console.log(list);
  return (
    <QuBox>
      <QuList>
        <LeftSection>
          <CountBox>
            <VotesCount>
              <span>{list.id} votes &nbsp;</span>
            </VotesCount>
            <AnswerCount>
              <span>3 answers&nbsp;</span>
            </AnswerCount>
            <ViewsCount>
              <span>0 views</span>
            </ViewsCount>
          </CountBox>
        </LeftSection>
        <RightSection>
          <TextSection>
            <QuestionTitle>{list.email}</QuestionTitle>
            <QuestionText>{list.name}</QuestionText>
          </TextSection>
          <TagInFooter>
            <TagBox>
              <Tag></Tag>
            </TagBox>
            <InfoBox>
              <UserImg src={userimg}></UserImg>
              <InfoName>{list.address.city}</InfoName>
              <LastName>
                <span>{`asked ${toDateFormatOfUS(new Date(list.id))}`}</span>
              </LastName>
            </InfoBox>
          </TagInFooter>
        </RightSection>
      </QuList>
    </QuBox>
  );
};

export default Question;
