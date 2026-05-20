
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

// //Alterando um dado do objeto
// pessoa.nome = "Jose das Couve";
// console.log(pessoa.nome);
// console.table(pessoa);

// console.log(botaoEntrar.textContent);

// botaoEntrar.style.backgroundColor = "yellow";

    // function soma(){
    //     let result = 2 + 2;
    //     console.log(result);
    //     return result;
    // }

// const usuario = {
//     id:1,
//     email: "email@email.com",
//     senha: "12345",
//     nome: "Antonio Alves"
// }

// const botaoEntrar = document.getElementById("btnEntrar");

// botaoEntrar.addEventListener("click", function(){

//     //Capturar os campos de texto e imprimir seus valores através das propriedades .value
//     const email = document.getElementById("idEmail");
//     const senha = document.getElementById("idSenha");
//     const valorEmail = email.value;
//     const valorSenha = senha.value;
//     console.log(valorEmail, valorSenha);

//     // setTimeout( ()=>{
//     //     document.getElementsByTagName("form")[0].submit();
//     // },5000 );

//     try{
//         if(usuario){
//             if( (usuario.email === email.value) && (usuario.senha === senha.value) ){
//                 alert("Login realizado com sucesso!");
//                 window.location.href = "../index.html";
//             }else{
//                 throw new Error("Senha ou Email inválidos!");
//             }
//         }
//     }catch(error){
//         console.log(error);
//     }

// });

//Funções anonimas tradicionais
// function soma(a=0,b=0){
//     return a+b;
// }

// const pessoa = {
//     nome : "José",
//     idade : 33,
//     trabalhando : true,
//     endereco:{
//         rua:"Rua Dois", n:10, cep:"12345-098",cidade:"São Paulo", uf:"SP"
//     },
//     telefones: ['11-991234567'],
//     email:"email@email.com",
//     dados: function(){
//         console.log(`Eu sou ${this.nome} e tenho ${this.idade} atualmente ${this.trabalho ? "estou trabalhando" : "não estou trabalhando"} eu moro na ${this.endereco.rua} n:${this.endereco.n} em ${this.endereco.cidade} caso queira entrar em contato pode me ligar no tel: ${this.telefones[0]}`)
//     }
// }

// pessoa.dados();

//Listas
let frutas = ["laranja","banana","maçã","uva"];

//Iterando sobre a lista com ForEach
frutas.forEach( (fruta)=>{
    console.log(fruta);
})