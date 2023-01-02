import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ pageName }) => {

  const [userData, setUserData] = useState({});


  return (
    <SideBarDiv>
          <SideBarA
          className={pageName === 'Home' ? 'isActive' : 'notActive'}
          paddingTop='1rem'
          paddingLeft='2.1rem'
 
        >
          Companies
        </SideBarA>
      
        <SideBarA
          className={pageName === 'Questions' ? 'isActive' : 'notActive'}
          paddingTop='1rem'
          paddingLeft='2.1rem'

        >
        
         Users
        </SideBarA>
        <SideBarA
          className={pageName === 'Tags' ? 'isActive' : 'notActive'}
          paddingTop='1rem'
          paddingLeft='2.1rem'

        >
          Tags
        </SideBarA>
        <SideBarA
          href="/AskQuestion"
          className={pageName === 'Users' ? 'isActive' : 'notActive'}
          paddingTop='1rem'
          paddingLeft='2.1rem'

        >
         Questions
        </SideBarA>
        <SideBarA
          href="/AllQuestions"
          paddingTop='1rem'
          paddingLeft='2.1rem'

        >
          Home
        </SideBarA>
   
    </SideBarDiv>
  );
};

/**
 *  SideBar 컴포넌트는 해당 서비스의 로그인과 회원가입 화면을 제외한 모든 화면의 좌측상단에 고정되어 있는 LNB(Local Navigation Bar)이다.
 */

const SideBarDiv = styled.div`
  width: 16.4rem;
  flex-shrink: 0;
`;

const SideBarNav = styled.nav`
  position: sticky;
  width: auto;
  margin-bottom: 0.8rem;
  top: 5rem;
  padding-top: 2.4rem;
  padding-left: 1rem;
  font-size: 1.3rem;
  color: #6a737c;
  display: flex;
  flex-direction: column;
  div {
    color: ${(props) =>
      props.themeState === 'light' ? ' #6a737c;' : 'hsl(210,8%,70%)'};
    padding: 1rem 0 1rem 1rem;
  }
`;

const SideBarA = styled.a`
  padding: 0;
  height: 3.4rem;
  /* margin: 0 0 1.2rem; */
  list-style: none;
  font-size: 1.6rem;
  color: ${(props) =>
    props.themeState === 'light' ? ' #6a737c;' : 'hsl(210,8%,70%)'};
  text-decoration: none;
  padding-left: ${(props) => props.paddingLeft || '0'};
  padding-top: ${(props) => props.paddingTop || '0'};
  cursor: pointer;
  :hover {
    color: ${(props) =>
      props.themeState === 'light' ? ' #6a737c;' : '#f2f3f3'};
  }
  #faGlobe {
    padding-right: 0.4rem;
  }
  &.isActive {
    color: ${(props) =>
      props.themeState === 'light' ? '#0C0D0E' : '#F2F2F3 '};
    background-color: ${(props) =>
      props.themeState === 'light' ? '#F1F2F3' : '#3D3D3D '};
    border-right: 2px solid var(--color-orange);
  }
`;

export default SideBar;