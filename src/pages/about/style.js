import styled from "styled-components";

export const Container = styled.div`
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
  line-height: 1;
  @media (max-width: 600px) {
    margin: auto;
  }
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
export const Brilho = styled.text`
  color: #4789FB;
  text-shadow: 1px 1px 1px #4789FB;
`
export const Infos = styled.div`
  text-align: start;
  width: 50%;
  gap: 15px;
  display: grid;
  @media (max-width: 760px) {
    width: 100%;
    width: auto;
    height: auto;
    text-align: center;
  }
`;
export const Name = styled.span`
  font-size: 60px;
  margin-bottom: 5%;
  font-weight: bolder;
  @media (max-width: 760px) {
    font-size: 45px;
  }
`;
export const Intro = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 25px;
  text-align: justify;
  @media (max-width: 760px) {
    font-size: 20px;
    width: 330px;
  }
`;
export const Img = styled.img`
  width: 25rem;
  border-radius: 10%;
  @media (max-width: 1024px) {
    width: 12em;
  }
  transform: translatey(0px);
  animation: float4 5s ease-in-out infinite;
  @keyframes float4 {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
  }

`
export default Intro


