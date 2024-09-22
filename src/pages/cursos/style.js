import styled from 'styled-components';

export const CursosSection = styled.section`
  padding: 30px 0;
  width: 1920px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: relative;
  @media (max-width: 760px) { 
    width: 315px;
  }
  @media (min-width: 1280px) { 
    width: 1150px;
  }
`;

export const CursosBox = styled.div`
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h5 {
   margin-bottom: 20px;
    font-size: 25px;
  }
`;

export const CursosTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 55px;
  font-weight: bolder;
  @media (max-width: 760px) { 
    font-size: 40px;
  }
`;

export const CursosText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 20px 0 75px 0;
  @media (max-width: 760px) { 
    font-size: 18px;
  }
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: bolder;
    span {
      color: #4789FB;
      &:hover{
      text-decoration: underline;
    }
  } 
}

  @media (max-width: 760px) {
    text-align: center;
    width: 300px;
    margin-top: 20px;
  }
`;

export const CursosSlider = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  margin-top: -10px;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
  }
  @media (max-width: 760px) { 
    padding: 0;
    margin-top: -60px;
  }
  @media (max-width: 1280px) { 
    padding: 0;
    margin-top: -20px;
  }
`;

export const CursosImage = styled.img`
  height: 350px;
  transition: calc(.3s);
  &:hover{
    transform: scale(1.025);
  }
  @media (max-width: 760px) {
    height: 150px;
  }
  @media (max-width: 1280px) { 
    height: 180px;
  }
`;

export const CustomContainer = styled.div`
  max-width: 1720px;
  .react-slick-list {
    padding-bottom: 20px;
  }

  .react-slick-item {
    display: flex;
    justify-content: center;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h5 {
    margin-top: 10px;
  }
`;

export default CursosSection;