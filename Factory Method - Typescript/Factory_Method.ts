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
        // Usando o Factory Method para criar diferentes alunos
        const aluno1 = this.criarAluno("João", 15, "Matemática");
        const aluno2 = this.criarAluno("Maria", 17, "Física");
        
        this.alunos.push(aluno1, aluno2);
    }

    // Método de fábrica para criar instâncias de Aluno
    protected criarAluno(nome: string, idade: number, curso: string): Aluno {
        return new Aluno(nome, idade, curso);
    }

    public mostrarAlunos() {
        for (const aluno of this.alunos) {
            console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}`);
        }
    }
}

// Exemplo de especialização usando herança e Factory Method
class EscolaTecnica extends Escola {
    protected criarAluno(nome: string, idade: number, curso: string): Aluno {
        console.log("Criando aluno em uma escola técnica");
        return new Aluno(nome, idade, curso);
    }
}

// Instanciando e mostrando os alunos da escola técnica
const escolaTecnica = new EscolaTecnica();
escolaTecnica.mostrarAlunos();
