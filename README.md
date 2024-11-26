## Explicação das Mudanças

### Sem o Padrão Prototype (WithoutDP.ts)
No arquivo `WithoutDP.ts`, criamos uma classe `Aluno` que representa um aluno com nome, idade e curso. Em seguida, criamos uma classe `Escola` que gerencia uma lista de alunos. Para adicionar um aluno à lista, precisamos criar um novo objeto `Aluno` manualmente, copiando os valores do aluno existente.

### Com o Padrão Prototype (PrototypeDP.ts)
No arquivo `PrototypeDP.ts`, implementamos o padrão Prototype para simplificar o processo de clonagem de objetos. Criamos uma interface `Clonavel` com um método `clonar`, e a classe `AlunoDP` implementa essa interface. A classe `EscolaDP` gerencia uma lista de objetos `AlunoDP` e utiliza o método `clonar` para adicionar cópias de alunos à lista.

### Vantagens do Padrão Prototype
O padrão Prototype permite criar cópias de objetos existentes sem depender de suas classes concretas. Isso torna o código mais flexível e fácil de manter, especialmente quando se trabalha com objetos complexos ou quando a criação de novos objetos envolve processos complicados.

### Exemplo de Uso
No exemplo, a classe `AlunoDP` implementa o método `clonar`, que cria uma nova instância de `AlunoDP` com os mesmos valores de nome, idade e curso. A classe `EscolaDP` utiliza esse método para adicionar cópias de alunos à lista de alunos, simplificando o processo de clonagem e evitando a necessidade de criar novos objetos manualmente.

## 🤝 Contribuidores

<a href="https://github.com/Duduenri"><img src="https://github.com/Duduenri.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/Samuelblafer"><img src="https://github.com/Samuelblafer.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/Xande025"><img src="https://github.com/Xande025.png" width="45" height="45"></a> &nbsp;