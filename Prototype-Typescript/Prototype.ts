interface Clonavel {
    clonar(): Clonavel;
}

class AlunoDP implements Clonavel {
    public nome: string;
    public idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public clonar(): AlunoDP {
        return new AlunoDP(this.nome, this.idade);
    }
}

class EscolaDP {
    public alunos: AlunoDP[] = [];

    constructor() {
        const aluno1 = new AlunoDP("João", 15);
        this.alunos.push(aluno1);

        // Com o padrão Prototype, podemos clonar o objeto facilmente
        const aluno2 = aluno1.clonar();
        this.alunos.push(aluno2);
    }

    public mostrarAlunos() {
        for (const aluno of this.alunos) {
            console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}`);
        }
    }
}

const escolaDP = new EscolaDP();
escolaDP.mostrarAlunos();