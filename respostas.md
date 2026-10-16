# Atividade JavaScript 2


## Tipos de saída:
Uma saída é a maneira que o JavaScript usa para exibir uma informação ou dados na tela.

- console.log()
    - É um comando do javascript usado para exibir mensagens no console do navegador (muito usado para debugar o código).
- alert()
    - Função JavaScript que exibe um modal na tela do navegador com um botão "OK" e com uma mensagem de aviso.
- document.write()
    - É um método do JavaScript que escreve diretamente no fluxo de documentos da página web.

## Declarações, Sintaxe e Comentários:

- Declarações
    - São dados, informações ou comandos passados de certa forma que o computador consiga interpretar e pode ser composta por valores, operadores, expressões, funções, comentários, etc. 
- Comentários
    - Os comentários são uma parte muito importante do desenvolvimento, pois são linhas de texto que não influenciam no funcionamento do código, mas que são usadas por exemplo para explicar o que certa função fa ou demarcar partes do código, assim, quando outra pessoa ou o próprio dono do código for mexer nele de novo, fica mais fácil de se localizar no projeto.
- Sintaxe
    ```javascript 
    //Aqui está sendo declarado a variável "idade" e sendo atribuído à ela o valor "25"
    let idade = 25 
    
    //Aqui irá ser exibido o valor da variável "idade"  no cosole do navegador.
    console.log(idade)
    ```

## Corrigir os erros de sintaxe no trecho abaixo:
```javascript
//Sintaxe errada:
    let nome = "Ana console.log(nome
```
```javascript
//Sintaxe corrigida:
    let nome = "Ana";

    console.log(nome);

//Precisava fechar as aspas do nome da variável e fechar o parênteses do console.log()
```
## Variáveis:
Qual a diferença entre let, const e var?

- let
    -  Tem escopo de bloco. Permite reatribuir o valor, mas não permite redeclarar uma variável com o mesmo nome no mesmo espaço.
- const
    - Tem escopo de bloco, igual ao let. Não permite reatribuição nem redeclaração e o valor inicial é fixo.
- var
    - Tem escopo de função (vaza para fora de blocos como if e for). Permite redeclarar e reatribuir o valor livremente. É o modelo antigo e propenso a bugs.

Quando usar cada uma dessas declarações?
- Use `let` apenas quando o valor precisar mudar: Use em contadores de loops (como `for`), variáveis que acumulam valores (como somatórios) ou flags de controle (`let carregando = true`).

- Use `const` sempre por padrão: Use para todas as suas variáveis, funções importadas, objetos e arrays. Se o valor não precisa ser substituído por um novo (`=`), deve ser `const`. Isso previne bugs acidentais e deixa seu código mais seguro.

- Nunca use `var`: O `var` é considerado uma prática obsoleta. O comportamento de escopo dele pode gerar bugs difíceis de encontrar e o `let`/`const` resolvem todos os cenários de forma mais limpa.




## Operadores:

#### O que são operadores aritméticos?

São símbolos matemáticos utilizados para realizar cálculos e operações matemáticas básicas entre valores numéricos.

- Exemplo 1: `+` (Adição) — `5 + 3` resulta em `8`
- Exemplo 2: `-` (Subtração) — `10 - 4` resulta em `6`
- Exemplo 3: `*` (Multiplicação) — `4 * 2` resulta em `8`



#### O que são operadores de comparação?

São operadores utilizados para testar a relação entre dois valores. Eles analisam os dados e sempre retornam um valor booleano: verdadeiro (`true`) ou falso (`false`).
- Exemplo de Igualdade Estrita (`===`): Compara se o valor e o tipo de dado são exatamente iguais.
	- `5 === 5` retorna `true`.
	- `5 === "5"` retorna `false` (porque um é número e o outro é texto).
- Exemplo de Maior Que (`>`): Verifica se o valor da esquerda é maior que o da direita.
	- `10 > 3` retorna `true`.
	- `2 > 8` retorna `false`.