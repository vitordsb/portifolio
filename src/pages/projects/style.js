import styled from "styled-components";

export const Container = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(102vh - 100px);
`;

export const Content = styled.div`
  width: 160dvh;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const P = styled.p`

`
export const ImgProjeto = styled.img`
  
`

export const Ul = styled.ul`
  overflow-x: auto;
  height: inherit;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 13px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
    background-color: whitesmoke; 
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray; 
  }
`;

export const Li = styled.li`
  
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 5px 5px 10px;
  box-shadow: 1px 1px 1px 2px gray;
  gap: 15px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 760px) {
   font-size: 13px;
  }
`;

export const TitleProject = styled.strong`
  font-size: 25px;
`;

export const Url = styled.span`
  font-size: 18px;
`;

export const Created_at = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

export default Container;