# Arena Sol — primeiro incremento de Web 2

Projeto acadêmico com React, Vite e CSS, com apresentação da arena e cadastro de clientes.

## Como abrir

Extraia o ZIP em uma nova pasta. Abra a pasta `arena-sol` (a que contém `package.json`) no VS Code. No terminal, execute:

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal. No Windows, se o PowerShell bloquear o npm, use o terminal Prompt de Comando.

## Verificações

```bash
npm run lint
npm run build
npm run preview
```

`build` gera a pasta `dist`. `preview` permite abrir essa versão de produção.

## O que foi recuperado

- Início e cadastro em telas separadas, com navegação por `#inicio` e `#cadastro`.
- Página inicial com foto ilustrativa da quadra, modalidades, diferenciais e rodapé.
- Logo branca e dourada sobre o cabeçalho verde, sem retângulo atrás.
- Cadastro sem imagem, sem botão “Limpar formulário” e sem a frase que repetia as modalidades.
- Opções esportivas mantidas no seletor; confirmação com “Cadastrar outra pessoa”.
- Validação dos campos, mensagens individuais e contador de cadastros.
- CSS separado por componente, incluindo as regras para celular.
- Componentes como `const` com arrow functions e propriedades acessadas por `props`.

A foto é uma imagem ilustrativa gerada por IA, não um registro de um estabelecimento real.

Os clientes ficam apenas na memória durante a execução. Atualizar a página zera a lista. Não há banco de dados, autenticação ou reservas neste incremento.

## Estrutura

```text
src/
  App.jsx
  main.jsx
  index.css
  Components/
    Cabecalho.jsx / Cabecalho.css
    PaginaInicial.jsx / PaginaInicial.css
    CardModalidade.jsx / CardModalidade.css
    FormularioCadastro.jsx / FormularioCadastro.css
    IlustracaoQuadra.jsx / IlustracaoQuadra.css
    Rodape.jsx / Rodape.css
  assets/
    logo-arena-sol.png
    quadra-realista.png
```

A pasta `Components` tem C maiúsculo e os imports respeitam esse nome. A fonte Inter é instalada pelo npm e servida junto com o projeto.

Leia `GUIA-DAS-ALTERACOES.md` para entender o código e se preparar para a apresentação.

## Validação da versão entregue

Lint e build concluídos sem erros. No navegador, foram verificados campos obrigatórios, e-mail e telefone inválidos, dois cadastros, limpeza, contador, navegação e recarregamento. Também foram conferidas as remoções solicitadas e as páginas em 320, 390, 768, 1024 e 1440 pixels, sem rolagem horizontal.
