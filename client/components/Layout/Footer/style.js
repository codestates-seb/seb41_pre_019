
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #232629;
  color: #a9aeb2;
  height: 332px;
  padding: 32px 12px 12px 12px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1264px;
  margin: 0 auto;
`;


export const LogoContainer = styled.div`
  width: 64px;
  height: 258px;
  margin: -12px 12px 32px -4px;
`;

export const Logo = styled.img`
  width: 52px;
`;

export const Categories = styled.div`
  display: flex;
  padding-right: 12px;
  padding-bottom: 24px;
  height: 254px;
  width: 100%;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const Category = styled.h5`
  display: flex;
  flex-direction: column;
  height: 17px;
  margin-bottom: 12px;
  flex: 1 1 auto;
`;

export const HomeLink = styled.div`
  text-decoration: none;
  color: var(--theme-footer-title-color);
  margin-bottom: 12px;
`;

export const FakeLink = styled.div`
  text-decoration: none;
  color: var(--theme-footer-link-color);
  padding: 4px 0px;
  height: 25px;
  font-weight: 500;
`;

export const Etc = styled.div`
  display: flex;
  flex-direction: column;
  height: 278px;
`;

export const Sns = styled.a`
  text-decoration: none;
  font-size: 11px;
  color: var(--theme-footer-link-color);
  padding: 4px 0px;
  cursor: pointer;
`;

export const SnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const License = styled.p`
  display: flex;
  font-size: 11px;
  justify-content: baseline;
  color: var(--theme-footer-text-color);
  text-align: left;
  width: 100%;
`;

export const Paragraph = styled.div`
  margin-top: auto;
  margin-bottom: 24px;
`;