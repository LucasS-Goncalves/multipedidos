function acharUsuario(usuarios, filtro){
    return new Promise((resolve, reject) => {
        if(filtro === "") {
            reject(new Error("Filtro não pode estar vazio."))
            return;
        };
        for(let usuario of usuarios){
            if(Object.values(usuario).includes(filtro)){
                resolve(usuario);
                return;
            } 
        }
        reject(new Error("Nenhum usuário encontrado."));
    })
}

const usuarios = [
    {
        nome: "Lucas Souza",
        email: "lucasemail@gmail.com",
        idade: 21
    },
    {
        nome: "Lucas Gonçalves",
        email: "lucasemail@gmail.com",
        idade: 21
    },
    {
        nome: "Carlos Alberto",
        email: "carlosalberto@gmail.com",
        idade: 57
    },
    {
        nome: "Edson Arantes",
        email: "pelearantes@hotmail.com",
        idade: 90
    },
    {
        nome: "Zico",
        email: "zico09@yahoo.com",
        idade: 76
    },
];

const filtro = 76;

acharUsuario(usuarios, filtro)
.then(usuario => console.log(usuario))
.catch(erro => console.error("Erro: " + erro));
