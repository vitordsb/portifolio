import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;
export const Content = styled.div`
  width: 80%;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;
  line-height: 1.1;
  @media (max-width: 600px) {
    margin: auto;
  }
  @media (max-width: 760px) {
    flex-direction: column-reverse;
  }
`;
export const Brilho = styled.text`
  color: #4789FB;
  text-shadow: 1px #4789FB;
  font-weight: bolder;
`
export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;
  @media (max-width: 760px) {
    width: 100%;
    width: auto;
    height: auto;
    text-align: center;
  }
`;
export const Name = styled.span`
  font-size: 100px;
  font-weight: bolder;
  @media (max-width: 1280px) {
    font-size: 70px;
  }
  @media (max-width: 760px) {
    font-size: 45px;
  }
`;
export const Function = styled.span`
  font-size: 85px;
  margin-bottom: 20px;
  font-weight: bolder;
  @media (max-width: 1280px) {
    font-size: 55px;
  }

  @media (max-width: 600px) {
    font-size: 35px;
    text-align: center;
  }
`;
export const Intro = styled.span`
  font-size: 30px;
  text-align: justify;
  width: 680px;
  @media (max-width: 1280px) {
    font-size: 20px;
    width: 450px;
  }
  @media (max-width: 760px) {
    font-size: 15px;
    width: 330px;
  }
`;
export const About = styled.button`
  width: 14rem;
  font-size: 25px;
  padding: 10px;
  display: flex;
  background-color: #4789FB;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;
  transition: .4s;
  &:hover {
    transform: scale(1.1);
    color: white;
    background-color: Blue;
    svg {
      margin-left: 10px;
    }
  }
  svg {
    font-size: 30px;
  }
  @media (max-width: 1280px) {
    width: 10rem;
    font-size: 14px;
    svg {
      font-size: 18px;
    }
  }
  @media (max-width: 760px) {
    width: 10rem;
    font-size: 16px;
    margin-left: 85px;
    margin-top: 15px;
    svg {
      font-size: 20px;
    }
  }
`;

export const Img = styled.img`
  width: 30rem;
  height: 30rem;
  border-radius: 100%;
  @media (max-width: 1280px) {
    width: 13em;
    height: 13em;
  }
  transform: translatey(0px);
  animation: float4 5s ease-in-out infinite;
  @keyframes float4 {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
`

export const Links = styled.div``
