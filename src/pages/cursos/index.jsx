import Slider from "react-slick";
import {CursosSection, CursosBox, CarouselItem, CursosTitle, CursosText,CursosSlider, CursosImage, CustomContainer} from './style';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cursos = [
  { title: "Especialista Front-End", image: "/imgcourses/Frontend.jpg", link: "https://www.treinaweb.com.br/certificado/NMLWNURYAUJ1" },
  { title: "Web Services, API's e SOAP", image: "imgcourses/API.jpeg", link: "https://www.linkedin.com/learning/certificates/c4c34b153930d341f1aeba83dd4e591221e2f8493d023f3dd410c256cb510815?trk=share_certificate"},
  { title: "UI/UX Design", image: "imgcourses/uiux.jpg", link: "https://www.treinaweb.com.br/certificado/MVXVV3N287LA" },
  { title: "Programador Python", image: "imgcourses/python.jpg", link: "https://www.udemy.com/certificate/UC-1b1b6a02-225d-4cca-a480-618899f94773/" },
  { title: "Curso de Git e Github", image: "imgcourses/GIT.jpeg", link: "https://www.linkedin.com/learning/certificates/5d10641555247b1326529f31edc5a4d87e9533dcb6ceb080d3fd520043de1802?trk=share_certificate" },
  { title: "Desenvolvedor React", image: "imgcourses/react.png", link: "https://www.treinaweb.com.br/certificado/RGCLBHSCWKXF" },
  { title: "Curso de QA Software", image: "imgcourses/QA.jpeg", link: "https://www.linkedin.com/learning/certificates/a0bc64a07fc39146b57beacb4bcadf3be3cbcf499c585f0473bc897c451efe73?trk=share_certificate" },
  { title: "SO Linux", image: "imgcourses/linux.jpg", link: "https://www.treinaweb.com.br/certificado/PH7ULH2ZUDGN" },
  { title: "Desenvolvedor JavaScript", image: "imgcourses/javascript.jpg", link: "https://www.treinaweb.com.br/certificado/MX4DQNNQBEFL" },
  { title: "Desenvolvedor React e Nextjs", image: "imgcourses/nextjs.png", link: "https://www.treinaweb.com.br/certificado/CZFNEUZT2LMC" },
];

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", position: "absolute", top: "50%", left: "-30px", transform: "translateY(-50%)", zIndex: 999, cursor: "pointer" }}
      onClick={onClick}
    >
      <FaArrowLeft size={40} color="${({ theme }) => theme.text}" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", position: "absolute", top: "50%", right: "-30px", transform: "translateY(-50%)", zIndex: 999, cursor: "pointer" }}
      onClick={onClick}
    >
      <FaArrowRight size={40} color="${({ theme }) => theme.text}" />
    </div>
  );
};

const Cursos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <CursosSection>
      <CustomContainer>
        <CursosBox>
          <CursosTitle>Certificados</CursosTitle>
          <CursosText>Certificados de cursos feitos em plataformas de estudo e treinamento.</CursosText>
          <CursosSlider>
            <Slider {...settings}>
              {cursos.map((cursos, index) => (
                <CarouselItem key={index}>
                  <h5>{cursos.title}</h5>
                  <CursosImage src={cursos.image} alt={cursos.title}/>
                  <CursosText>Ver certificado <a target="blank" href={cursos.link}><span>aqui</span></a></CursosText>
                </CarouselItem>
              ))}
            </Slider>
          </CursosSlider>
        </CursosBox>
      </CustomContainer>
    </CursosSection>
  );
};

export default Cursos;
