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
        const aluno1 = new Aluno("João", 15, "Matemática");
        this.alunos.push(aluno1);

        // Sem o padrão Prototype, precisamos criar um novo objeto manualmente
        const aluno2 = new Aluno(aluno1.nome, aluno1.idade, aluno1.curso);
        this.alunos.push(aluno2);
    }

    public mostrarAlunos() {
        for (const aluno of this.alunos) {
            console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}`);
        }
    }
}

const escola = new Escola();
escola.mostrarAlunos();