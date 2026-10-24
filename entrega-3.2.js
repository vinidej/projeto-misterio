// Feito por Vinícius de Jesus
//o codigo precisa implementar 3 funções uma após a outra.
//Primeira: é da cifra de Vegenere
//Segunda: Repete a 1 e a ultima letra, e as do meio inverte a ordem.
//Terceira: Repete as vogais ou as consoantes na mesma ordem dependendo da quantidade de letras na palavra. 
    //se for par é vogal
    //se for impar e primo é consoante
    //se for impar e ñ primo é vogal

function vegenere(tam, palavra, key){
    let resto = tam%6;
    let divisao = Math.trunc(tam/6);

    if(divisao != 0)
        key = Array(divisao).fill(key).flat();   //problema ta aqui

    if(resto != 0){
        
        let x = tam - resto;

        for(let i = 0; i < resto; i++){
            key[x] = key[i];
            x++;
        }
    }

    let code = 0;
    let p_temp = [];
    for (let i = 0; i < tam; i++){
        code = palavra.charCodeAt(i) - 97;
        code = ((code + key[i])%26) + 97;
        p_temp.push(String.fromCharCode(code));
    }
    return p_temp.join(""); 
}
   

function segunda_parte(tam, palavra, palavra_saida){
    let palavra_separada = palavra.split(""); //Transforma palavra em um vetor de caracteres
    
    let x = tam - 2;
    for(let i = 1; i < x; i++ ){
        let p_temp;
        p_temp = palavra_separada[i];
        palavra_separada[i] = palavra_separada[x];
        palavra_separada[x] = p_temp;
        x--;
    }
    
    return palavra_saida + palavra_separada.join("");
    
}

function vogal_terceira_parte(tam, palavra, palavra_saida){
    let palavra_separada = palavra.split("");
    let vogais = [];
    for(let i = 0 ; i < tam ; i++){
        if("aeiou".includes(palavra_separada[i]))
            vogais.push(palavra_separada[i]);
    }
    return palavra_saida + vogais.join("");
}

function consoante_terceira_parte(tam, palavra, palavra_saida){
    let palavra_separada = palavra.split("");
    let consoantes = [];
    for(let  i = 0 ; i < tam ; i++){
        if("aeiou".includes(palavra_separada[i]) == false)
            consoantes.push(palavra_separada[i]);
    }
    return palavra_saida + consoantes.join("");
}

function primos(tam){
    if (tam < 2)
        return false;

    else{
        for(let i = 2; i < tam^(1/2); i++){
            if(tam%i == 0)
                return false;
        }
        return true;
    }
}

function terceira_parte(palavra, tam, palavra_saida){
    if(tam%2 == 0){
        return vogal_terceira_parte(tam, palavra, palavra_saida);
    }
    else{
        if(primos(tam) == true){
            return consoante_terceira_parte(tam, palavra, palavra_saida);
        }
        else{
            return vogal_terceira_parte(tam, palavra, palavra_saida);
        }
    }
}

function main(palavra){

    palavra = palavra.toLowerCase();
    let palavra_saida;
    const tam = palavra.length;
    const key = [0 , 17 , 19 , 24 , 14 , 12];

    
    palavra_saida = vegenere(tam, palavra, key);
    palavra_saida = segunda_parte(tam, palavra, palavra_saida);
    palavra_saida = terceira_parte(palavra, tam, palavra_saida);
    console.log(palavra);
    console.log(palavra_saida);
    entrada.close();
}

const readline = require("node:readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite uma palavra: ", main);