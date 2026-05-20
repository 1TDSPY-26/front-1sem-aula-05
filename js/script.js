
// // Conversões:
// let numero = "123";
// console.log(typeof numero); // 123
// console.log(typeof parseInt(numero)); // 123
// console.log(typeof parseFloat("12.5")); // 12.5
// console.log(typeof numero.toString()); // “123”

// console.log("TIPOS"); 
// console.log(typeof null); 
// console.log(typeof {}); 
// console.log(typeof []); 
// console.log(typeof 'a');
// console.log(typeof true);

// // reatribuição de valores direto:
// numero = false;
// console.log(numero);

// // Métodos de texto:
// let frase = "Estão chegando as provas!";
// console.log(frase.length); // 26 – Retorna a quantidade de caracteres da string
// console.log(frase.indexOf("as")); // 15 – Retorna a posição da string encontrada
// console.log(frase.replace("provas", "férias")); // “Estão chegando as férias!”
// // Formatação de número:
// let valor = 123.456;
// console.log(valor.toFixed(2)); // “123.46”
// console.log(valor.toPrecision(4)); // “123.5”

//Diferença entre var e let
//HOISTING
//Não utilizar var por causa do HOISTING
// var nome1 = "Alê";
// let nome2 = "Jonas";

// if(true){
//     var nome1 = "Carlos";
//     let nome2 = "Matos";
// }

// console.log(nome1);
// console.log(nome2);

// const pessoa = {
//     nome  : "José",
//     idade : 33,
//     casado: true,
//     email : "email@email.com"
// } 

// //Imprimindo os dados do objeto:
// //Concatenação padrão:
// console.log(pessoa.nome + " tem " + pessoa.idade + " anos de idade e " + (pessoa.casado ? "é casado " : "não é casado " ) + " caso queira entrar em contato com ele envie um email para " + pessoa.email);

// //Template literals com interpolação:
// console.log(`${pessoa.nome}  tem  ${pessoa.idade}  anos de idade e  ${(pessoa.casado ? "é casado " : "não é casado " )}, caso queira entrar em contato com ele envie um email para ${pessoa.email}`);

//Listas
// console.log(frutas)
// console.table(frutas)
let frutas = ["laranja", "banana", "maçã","uva","pêra"];

console.table(frutas[0]);
console.table(frutas[1]);
console.table(frutas[2]);
console.table(frutas[3]);
console.table(frutas[4]);

//Explicando funções
//Funções anônimas tradicionais
function soma(a=0,b=0){
    return a+b;
}

function subtracao(a,b){
    console.log(a+b);
}

let pessoa = {
    nome : "José",
    idade: 33,
    trabalhando: true,
    endereco:{
        rua:"Rua Dois", nr:10, cep:"12345-098",cidade:"São Paulo", uf:"SP" 
    },
    telefones: ['11-993344559','11-675344559'],
    email:"email@email.com",
    dados: function(){
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos de idade, atualmente ${this.trabalhando ? "estou trabalhando" : "não estou trabalhando"}, eu moro na ${this.endereco.rua} nr:${this.endereco.nr} em ${this.endereco.cidade} caso queira entrar em contato pode me ligar no tel: ${this.telefones[0]} ou deixar recado no tel: ${this.telefones[1]}`)
    }
}


//Executando a função do objeto
pessoa.dados();


//Executando uma função:
console.log(soma(4,4));

const multiplicacao = (a,b)=> { 
    return a*b;
};

console.log(multiplicacao(2,3));


const pessoa2 = {
    nome : "Antonio",
    idade: 33,
    trabalhando: true,
    endereco:{
        rua:"Rua Trê", nr:77, cep:"12345-098",cidade:"Rio de Janeiro", uf:"RJ" 
    },
    telefones: ['11-993344559','11-675344559'],
    email:"email@email.com",
    dados: ()=>{
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos de idade, atualmente ${this.trabalhando ? "estou trabalhando" : "não estou trabalhando"}, eu moro na ${this.endereco.rua} nr:${this.endereco.nr} em ${this.endereco.cidade} caso queira entrar em contato pode me ligar no tel: ${this.telefones[0]} ou deixar recado no tel: ${this.telefones[1]}`)
    }
}

pessoa2.dados();