import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, Img, Brilho, Links, About } from '../../styles/indexStyle'
import Link from 'next/link'
import { useState, useEffect } from "react";

export default function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toRotate = [ "Web Developer", "UI/UX Designer", "Mobile Developer" ];
  const period = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200 - Math.random() * 100);
      }
    };

    const ticker = setInterval(handleTyping, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate]);
  return (
    <Container>
      <Content>
          <Infos>
            <Name>Dev Vitor</Name>
            <Function>{<Brilho>{text}</Brilho>}</Function>
            <Intro>Cursando <Brilho>Sistemas de Informação</Brilho> na faculdade Rio Branco de Cotia/SP, tenho experiência em <Brilho>Desenvolvimento Web Full Stack</Brilho> com o ecossistema <Brilho>Java Script</Brilho>. E esse é meu portifólio feito em <Brilho>Next.js</Brilho> e utilizando as bibliotecas <Brilho>React e Styled Components</Brilho>
            </Intro>
            <Links>
            <Link href="about">
              <About>Sobre mim<FaArrowRight/></About>
            </Link>
            </Links>
          </Infos>
            <Img src="/images/logo.jpg" alt="logo" />
        </Content>
      </Container>
  )
}
