# Desafio Técnico Valinor 🌳

## Desafio técnico da Field Control, consumindo a API do GitHub para consulta de repositórios, com paginação 🐱

## Tecnologias utilizadas 🚀
- HTML5
- CSS3
- JavaScript
- GitHub API REST
  
## Screenshot 📸

<img src="screens/screen.png">

## Implementação de segurança na consulta 🔒
Ao realizar consultas com um payload de XSS pude perceber a vulnerabilidade no consumo da API, pois os dados não eram sanitizados adequadamente.<br>
Pude reparar que ao digitar no campo de pesquisa (input) o payload:
<code> <script>alert("XSS")<script></code>
  
