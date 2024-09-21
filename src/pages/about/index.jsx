import { Container, Content, Infos, Name, Intro, Img, Brilho } from './style'
export default function About (){
    return (
        <Container>
            <Content>
                <Img src="/images/foto.jpg" alt="logo" />
                <Infos>
                    <Name>Vitor de Souza Barreto</Name>
                    <Intro>Tenho 18 anos agora em 2024, nascido na Bahia, vim para São Paulo em busca de oportunidades para alavancar meus estudos e profissionalmente. Estou em busca de oportunidades na área de desenvolvimento web e mobile.
                    </Intro>
                    <Intro>Gosto muito de escutar musica, jogar xadrez, cozinhar e principalmente programar. Sou um entusiasta de tecnologia em constante aprendizado. Gosto de aprender sozinho e colocando a mão na massa. 
                    </Intro>
                </Infos>
            </Content>
        </Container>
    )

}