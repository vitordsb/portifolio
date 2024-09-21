import React, { useEffect, useState } from 'react';
import { Container, Content, Ul, Li, TitleProject, Url, Created_at, ImgProjeto } from './style';
import { Brilho } from '../../../styles/indexStyle';

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);
  const [loading, setLoading] = useState(true);  // Adicionado para monitorar o estado de carregamento
  const [error, setError] = useState(null);      // Adicionado para lidar com erros
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    let abortController = new AbortController();

    async function getGitHubAPI() {
      try {
        setLoading(true); // Inicia o carregamento
        setError(null);   // Reseta o erro ao começar a nova requisição

        const response = await fetch('https://api.github.com/users/vitordsb/repos', {
          signal: abortController.signal,
          headers: {
            Authorization: `token ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status}`);  // Lança um erro se a resposta não for "ok"
        }

        const data = await response.json();

        // Verifica se há repositórios retornados
        if (data.length === 0) {
          throw new Error('Nenhum repositório encontrado');
        }

        // Ordena os repositórios pela data de criação
        const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        // Adiciona a linguagem mais usada a cada repositório
        const reposWithLanguages = await Promise.all(
          sortedRepos.map(async (repo) => {
            const languagesResponse = await fetch(
              `https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`,
              { signal: abortController.signal }
            );
            const languagesData = await languagesResponse.json();

            const mostUsedLanguage = Object.keys(languagesData).length > 0
              ? Object.keys(languagesData).reduce((a, b) => (languagesData[a] > languagesData[b] ? a : b))
              : 'Indisponível';

            return {
              ...repo,
              mostUsedLanguage
            };
          })
        );

        setItemsApi(reposWithLanguages);  // Atualiza o estado com os repositórios e linguagens
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);  // Registra o erro
        }
      } finally {
        setLoading(false);  // Conclui o carregamento
      }
    }

    getGitHubAPI();

    return () => abortController.abort(); // Cancela a requisição quando o componente desmonta
  }, [token]);

  if (loading) {
    return <p>Carregando repositórios...</p>; // Exibe enquanto os dados estão sendo carregados
  }

  if (error) {
    return <p>Erro: {error}</p>; // Exibe se houver erro
  }

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.length === 0 ? (
            <p>Nenhum repositório encontrado.</p>
          ) : (
            itemsApi.map((item) => (
              <Li key={item.id}>
                <TitleProject>{item.name}</TitleProject>
                <ImgProjeto />
                <Url>
                  Link do repositório: <a target="_blank" rel="noopener noreferrer" href={item.html_url}>{item.html_url}</a>
                </Url>
                <Created_at>
                  Data Criação: {Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}
                </Created_at>
                <div>
                  Linguagem mais usada: <Brilho>{item.mostUsedLanguage}</Brilho>
                </div>
              </Li>
            ))
          )}
        </Ul>
      </Content>
    </Container>
  );
}
