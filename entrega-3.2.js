//o codigo precisa implementar 3 funções uma após a outra.
//Primeira: é da cifra de Vegenere
//Segunda: Repete a 1 e a ultima letra, e as do meio inverte a ordem.
//Terceira: Repete as vogais na mesma ordem

//const prompt = require("prompt-sync")();
let palavra =  "Perfeito";

console.log(palavra);


function Vegenere(){
    
}

function segunda_parte(palavra){
    const tam = palavra.length();
    let palavra_separada = palavra.split(""); //Transforma palavra em um vetor de caracteres
    
    let x = tam - 1;
    for(i = 1; i < tam; i++ ){
        let p_temp;
        p_temp = palavra_separada[i];
        palavra_separada[i] = palavra_separada[x];
        palavra_separada[x] = p_temp;
        x--;
    }

    palavra = palavra_separada.join("");
    console.log(palavra);

}

function terceira_parte(){

}

//Vegenere();
segunda_parte(palavra);
//terceira_parte();
