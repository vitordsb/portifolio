import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
  @media (max-width: 760px){
    width: 100%;
    
  }
`;
export const Content = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 760px){
    width: 100%;
    padding: 0 15px;
    gap: 15px;
  }
`;
export const Links = styled.div`
  gap: 35px;
  display: flex;
  margin-right: 6%;
  p {
    color: ${({ theme }) => theme.text};
    display: flex;
    font-weight: bolder;
    font-size: 25px;
    transition: calc(.3s);
  }
  :hover {
    color: #4789FB;
    transform: scale(1.025);
  }
`
export const NavLinks = styled.nav`
  display: flex;
  margin-left: 15%;
  @media (max-width: 560px) {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    flex-direction: column;
    position: fixed;
    height: 100%;
    z-index: 9999;
    top: 0px;
    width: 45%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;
    a {
      margin: auto;
      margin-top: 60%;
    }
  }
`;
export const Icons = styled.div`
  gap: 30px;
  align-items: center;
  display: flex;
  @media (max-width: 560px){
    gap: 10px;
    margin-top: 4px;
  }
`
export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
  }
`;
export const CloseSidebar = styled.div`
  font-size: 40px;
  right: 15px;
  top: 25px;
  position: absolute;
  display: none;
  cursor: pointer;  
  @media (max-width: 560px) {
    display: flex;
  }
`;


