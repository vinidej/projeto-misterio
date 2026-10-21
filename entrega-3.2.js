//o codigo precisa implementar 3 funções uma após a outra.
//Primeira: é da cifra de Vegenere
//Segunda: Repete a 1 e a ultima letra, e as do meio inverte a ordem.
//Terceira: Repete as vogais ou as consoantes na mesma ordem dependendo da quantidade de letras na palavra. 
    //Numero ímpar de letras = consoantes
    //Numero par de letras = vogais

let palavra =  "Perfeito";
palavra = palavra.toLowerCase();
const tam = palavra.length;
let palavra_saida;
console.log(palavra);


function Vegenere(){
    palavra_saida = 'pvkdsutf';
}

function primos(){
    if (tam < 2)
        return false;

    else{
        for(i = 2; i < tam^(1/2); i++){
            if(tam%i == 0)
                return true;
        }
        return false;
    }
}

function segunda_parte(){
    let palavra_separada = palavra.split(""); //Transforma palavra em um vetor de caracteres
    
    let x = tam - 2;
    for(i = 1; i < x; i++ ){
        let p_temp;
        p_temp = palavra_separada[i];
        palavra_separada[i] = palavra_separada[x];
        palavra_separada[x] = p_temp;
        x--;
    }

    palavra_saida = palavra_saida + palavra_separada.join("");

}

function vogal_terceira_parte(){
    let palavra_separada = palavra.split("");
    let vogais = [];
    for( i = 0 ; i < tam ; i++){
        if("aeiou".includes(palavra_separada[i]))
            vogais.push(palavra_separada[i]);
    }
    palavra_saida = palavra_saida + vogais.join("");
}

function consoante_terceira_parte(){
    let palavra_separada = palavra.split("");
    let consoantes = [];
    for( i = 0 ; i < tam ; i++){
        if("aeiou".includes(palavra_separada[i]) == false)
            consoantes.push(palavra_separada[i]);
    }
    palavra_saida = palavra_saida + consoantes.join("");
}


function terceira_parte(){
    if(tam%2 == 0){
        vogal_terceira_parte(tam, palavra);
    }
    else{
        if(primos(tam) == true){
            consoante_terceira_parte(tam, palavra);
        }
        else{
            vogal_terceira_parte(tam, palavra);
        }
    }
}

Vegenere();
segunda_parte();
terceira_parte();
console.log(palavra_saida);
