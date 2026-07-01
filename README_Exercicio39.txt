Exercício 39 – Do Desenvolvimento à Produção (React + Vite)

Descrição

Este exercício aborda o processo de publicação (deploy) de uma aplicação
React desenvolvida com Vite em um servidor compartilhado.

O objetivo é compreender a causa do erro HTTP 404 durante a implantação,
aplicar a configuração correta do Vite para gerar caminhos relativos e
seguir um pipeline de deploy seguro.

------------------------------------------------------------------------

Resolução

Parte 1 – Diagnóstico

Resposta correta: C

O erro ocorre porque o Vite gera caminhos absolutos para os arquivos
JavaScript e CSS. Quando a aplicação é hospedada em uma subpasta
(public_html/todo-app), o navegador procura os arquivos na raiz do
domínio, resultando em erros HTTP 404.

------------------------------------------------------------------------

Parte 2 – Correção

No arquivo package.json, o script de build deve ser alterado para:

    "build": "vite build --base=./"

Essa configuração faz com que o Vite gere caminhos relativos, permitindo
que a aplicação funcione corretamente em subpastas.

------------------------------------------------------------------------

Parte 3 – Ordem correta do deploy

1.  Executar npm run build.
2.  Remover os arquivos antigos da pasta public_html/todo-app.
3.  Fazer upload do conteúdo da pasta dist.
4.  Acessar a aplicação e validar que todos os arquivos retornam HTTP
    200 (OK).

------------------------------------------------------------------------

Tecnologias

-   React
-   Vite
-   JavaScript
-   HTML
-   CSS

------------------------------------------------------------------------

Conhecimentos Aplicados

-   Build de aplicações React
-   Deploy em hospedagem compartilhada
-   Configuração do Vite
-   Resolução de erros HTTP 404
-   Pipeline de implantação
-   Boas práticas de publicação

------------------------------------------------------------------------

Conclusão

Este exercício demonstra a importância da configuração correta do
processo de build e da sequência adequada de implantação. A utilização
da opção --base=./ garante que os ativos sejam carregados corretamente
em aplicações hospedadas em subdiretórios, reduzindo falhas e
assegurando uma publicação confiável.
