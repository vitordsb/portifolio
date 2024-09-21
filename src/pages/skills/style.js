import styled from 'styled-components';

export const SkillSection = styled.section`
  padding: 80px;
  position: relative;
  @media (max-width: 760px) { 
    padding: 0;
    margin-top: -40px;
  }
`;

export const SkillBox = styled.div`
  @media (max-width: 760px) {
    padding: 50px;
  }
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const SkillTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 55px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const SkillText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px 0 75px 0;

  @media (max-width: 760px) {
    text-align: center;
    width: 300px;
  }
`;

export const SkillSlider = styled.div`
  width: 100%;
  margin: auto;
  position: relative;

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
`;

export const SkillImage = styled.img`
  height: 280px;
  @media (max-width: 760px) { 
    height: 180px;
  }
`;

export const CustomContainer = styled.div`
  max-width: 1640px;
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
    font-size: 20px;
    margin-top: 10px;
  }
`;

export default SkillSection;