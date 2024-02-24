    function buscarRepositorios(event) {
event.preventDefault(); // Evita o envio padrão do formulário

const termoPesquisa = document.getElementById('search_repo').value;
const apiUrl = `https://api.github.com/search/repositories?q=${termoPesquisa}&sort=stars&order=desc`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const reposList = document.getElementById('repos-list');
        reposList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
        data.items.forEach(repo => {
            const repoItem = document.createElement('div');
                
            repoItem.innerHTML = `
             
                <a href=${repo.html_url} style="color:rgb(0, 132, 255)" target="_blank"><strong>${repo.full_name}</strong></a><br>
                <span style="color:white">🌟Stars: ${repo.stargazers_count} | 👀Watchers: ${repo.watchers_count}</span><br>
                <span style="color:white">📋Forks: ${repo.forks_count} | 🚨Issues: ${repo.open_issues_count}</span><br>
                <span style="color:white">💾Descrição: ${repo.description} <br>
                <hr>
            `;
            
            reposList.appendChild(repoItem);
        });

       
    })
    .catch(error => console.error('Erro ao obter dados da API:', error));
}
