import Link from "next/link";
import Image from "next/image";
import User from "../../../assets/images/loopy.png";
//import userimg from "../../../assets/images/loopy.png";
import { toDateFormatOfUS } from "../../../util/toDateFormatOfUS";
import Tag from "../../Tag";
import {
  AnswerCount,
  CountBox,
  ImgBox,
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
  console.log("Question", list);
  return (
    <QuBox>
      <QuList>
        <LeftSection>
          <CountBox>
            <VotesCount>
              <span>{list.vote} votes &nbsp;</span>
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
            <Link
              href={"/Questions/QuestionContent"}
              style={{ textDecoration: "none" }}
            >
              <QuestionTitle>{list.title}</QuestionTitle>
            </Link>
            <QuestionText>{list.content}</QuestionText>
          </TextSection>
          <TagInFooter>
            <TagBox>
              <Tag></Tag>
            </TagBox>
            <InfoBox>
              <ImgBox>
                {/* {next.js는 부모요소의 크기를 정해 layout="fill"속성을 줘야함} */}
                <Image src={User} priority={true} layout="fill" />
              </ImgBox>
              <InfoName>{list.username}</InfoName>
              <LastName>
                <span>{`asked ${toDateFormatOfUS(
                  new Date(list.createdAt)
                )}`}</span>
              </LastName>
            </InfoBox>
          </TagInFooter>
        </RightSection>
      </QuList>
    </QuBox>
  );
};

export default Question;
