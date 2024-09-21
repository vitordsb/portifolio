/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Container, NavLinks, Content, Menu, CloseSidebar, Icons, Links} from './style.js';
import { FaBars, FaTimes, FaLinkedin, FaWhatsapp, FaInstagram, FaGithub} from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from'styled-components';
import ThemeToggle from '../ThemeToggle.js';

const Whatsapp = styled(FaWhatsapp)`
  color: #51A985;
  height: 40px;
  width: 40px;
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }
    @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.text};
    transform: translatey(0px);
    animation: float1 3s ease-in-out infinite;
    @keyframes float1 {
    0% {
    }
    50% {
      color: #51A985;
    }
    100% {
    }
  }
}
`
const Linkedin = styled(FaLinkedin)`
  color: #4789FB;
  height: 40px;
  width: 40px;
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }
    @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.text};
    transform: translatey(0px);
    animation: float2 3s ease-in-out infinite;
    @keyframes float2 {
    0% {
    }
    50% {
      color: #4789FB;
    }
    100% {
    }
  }
}
`
const Instagram = styled(FaInstagram)`
  color: #e12d80;
  height: 40px;
  width: 40px;
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }
    @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.text};
    transform: translatey(0px);
    animation: float3 3s ease-in-out infinite;
    @keyframes float3 {
    0% {
    }
    50% {
      color: #e12d80;
    }
    100% {
    }
  }
}
`
const Github = styled(FaGithub)`
  color: ${({ theme }) => theme.text};
  height: 80px;
  width: 80px;
  transition: .4s;
  &:hover {
    color: blue;
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    :hover {
      color: none;
    }
    height: 50px;
    width: 50px;
    transform: translatey(0px);
    animation: float 3s ease-in-out infinite;
}
`

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { asPath } = useRouter();
  const showSiderbar = () => setSidebar(!sidebar);
  useEffect(() => {
    console.log('Client-side render - asPath:', asPath);
  }, [asPath]);
  console.log('Initial render - asPath:', asPath);

  return (
    <Container>
      <Content>

          <a href="https://github.com/vitordsb" target='blank'>
            <Github/>
          </a>
          
        <NavLinks sidebar={sidebar} style={{gap: "15px"}}>
          <CloseSidebar onClick={showSiderbar}>
            <FaTimes />
          </CloseSidebar>

            <Links>
              <Link href="/">
                  <p>Home</p>
              </Link>
            </Links>

            <Links>
              <Link href="/projects">
                  <p>Projects</p>
              </Link>
            </Links>

            <Links>
              <Link href="/skills">
                  <p>Skills</p>
              </Link>
            </Links>

            <Links>
              <Link href="/cursos">
                  <p>Certificates</p>
              </Link>
            </Links>

        </NavLinks>
          <Curriculum>
          <p>Curriculo virtual:<a target='_blank' href="https://www.canva.com/design/DAGPt_jPNqY/FtdBQM0Xy3lVRb7SAhmuJA/view">CV</a></p>
          </Curriculum>
        <Icons>

          <a target="_blank" href="https://www.linkedin.com/in/vitordsb/">
            <Linkedin/>
          </a>

          <a target="_blank" href="https://www.instagram.com/vitordsb/">
            <Instagram/>
          </a>

          <a target="_blank" href="https://wa.me/11957519999">
            <Whatsapp/>
          </a>
          <ThemeToggle/>
        </Icons>

        <Menu>  
          <FaBars onClick={showSiderbar} />
        </Menu>

        

      </Content>
    </Container>
  );
}

const Curriculum = styled.div`
  margin-left: 5%;
  background-color: white;
  width: 250px;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: calc(.4s);
  a {
    color: #3989FC;
    transition: calc(.1s);
    font-size: 22px;
    font-weight: bolder;
  }
  p {
    font-size: 22px;
    font-weight: bolder;
    color: #3989FC;
    transition: calc(.1s);
  }
  &:hover {
    cursor: pointer;
    background-color: #3989FC;
    transform: scale(1.05);
    p {
      color: ${({ theme }) => theme.text};
    }
    a {
      color: ${({ theme }) => theme.text};
    }
  }
  @media (max-width: 560px) {
    padding: 5px;
    height: auto;
    width: 80px;
    p {
      font-size: 10px;
    }
    a {
      font-size: 10px;
    }
  }
`
