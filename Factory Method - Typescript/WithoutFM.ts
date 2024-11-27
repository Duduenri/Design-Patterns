class Aluno {
    public nome: string;
    public idade: number;
    public curso: string;

    constructor(nome: string, idade: number, curso: string) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
}

class Escola {
    public alunos: Aluno[] = [];

    constructor() {
        // Criando alunos diretamente, sem usar Factory Method
        const aluno1 = new Aluno("João", 15, "Matemática");
        const aluno2 = new Aluno("Maria", 17, "Física");
        
        this.alunos.push(aluno1, aluno2);
    }

    public mostrarAlunos() {
        for (const aluno of this.alunos) {
            console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}`);
        }
    }
}

// Instanciando e mostrando os alunos da escola
const escola = new Escola();
escola.mostrarAlunos();
