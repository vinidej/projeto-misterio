# Criptografia em 3 Estágios — Nivelamento LAWD

## Sobre o projeto

Este repositório contém a implementação da atividade da **Semana 3.2 do Nivelamento LAWD**, desenvolvida em JavaScript.

O código foi desenvolvido para ser **executado e testado diretamente pelo terminal**, utilizando Node.js.

A IA foi utilizada para tirar dúvidas de sintaxe de JS e funcionamento de algumas funções.

Confesso que a segunda etapa eu destrinchei todos os dados mas não encontrava um padrão neles. Eu sabia que a criptografia dependia da quantidade de letras da palavra e que alternava entre repetir vogais e consoantes a depender do tamanho dela. E que as de tamanho par eram vogais e as ímpares eram consoantes. Mas alguns casos falhava e eu não encontrava o padrão nessas falhas. Ao perguntar se existia alguma cifra que explicasse isso a IA me mostrou que o padrão estava em todos os ímpares não primos falharem com a alternância e exibirem as vogais invés de consoantes. 

## Funcionamento do algoritmo

O processo de criptografia é dividido em três estágios.

### Estágio 1 — Cifra de Vigenère

O primeiro estágio aplica a **Cifra de Vigenère**, um método clássico de criptografia por substituição polialfabética.

Cada letra da mensagem é deslocada de acordo com uma chave, utilizando a posição das letras no alfabeto.

A operação matemática utilizada é:


C = (M + K)mod 26


Onde:

- `C`: posição da letra criptografada.
- `M`: posição da letra original.
- `K`: posição da letra correspondente da chave.
- `mod 26`: garante que o resultado permaneça no intervalo de 0 a 25.

### Estágio 2 — Inversão dos caracteres intermediários

Neste estágio, a palavra é reorganizada segundo as seguintes regras:

1. A primeira letra permanece na posição inicial.
2. A última letra permanece na posição final.
3. As letras intermediárias têm sua ordem invertida.

**Exemplo:**

```text
Entrada:   ABCDEF
Resultado: AEDCBF
```

### Estágio 3 — Repetição de vogais ou consoantes

O terceiro estágio considera a quantidade total de letras da palavra para determinar quais caracteres serão repetidos.

As regras são:

| Quantidade de letras | Caracteres repetidos |
|---|---|
| Número par | Vogais |
| Número ímpar e primo | Consoantes |
| Número ímpar e não primo | Vogais |

As letras selecionadas são repetidas no final mantendo sua ordem original.

**Exemplos ilustrativos apenas da terceira parte:**

```text
Entrada: ALEXANDRE (9 letras — Ñ primo)
Saída:   AEAE
```

```text
Entrada: GATOX (5 letras — primo)
Saída:   GTX
```

```text
Entrada: COMPUTAR (8 letras — par)
Saída:   OUA
```

## Como executar o projeto

### Pré-requisitos

É necessário ter o **Node.js** instalado na máquina.

### Executando o código

No terminal, execute:

```bash
node entrega-3.2.js
```

O programa será iniciado e poderá receber as entradas necessárias diretamente pelo terminal.

**Projeto:** Nivelamento LAWD — Semana 3.2  
**Linguagem:** JavaScript  
**Execução:** Node.js / Terminal  
**Finalidade:** Educacional
