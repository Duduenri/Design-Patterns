## Explicação das Mudanças doo Padrão Prototype 

### Sem o Padrão Prototype (WithoutDP.ts)
No arquivo `WithoutDP.ts`, criamos uma classe `Aluno` que representa um aluno com nome, idade e curso. Em seguida, criamos uma classe `Escola` que gerencia uma lista de alunos. Para adicionar um aluno à lista, precisamos criar um novo objeto `Aluno` manualmente, copiando os valores do aluno existente.

### Com o Padrão Prototype (Prototype.ts)
No arquivo `Prototype.ts`, implementamos o padrão Prototype para simplificar o processo de clonagem de objetos. Criamos uma interface `Clonavel` com um método `clonar`, e a classe `AlunoDP` implementa essa interface. A classe `EscolaDP` gerencia uma lista de objetos `AlunoDP` e utiliza o método `clonar` para adicionar cópias de alunos à lista.

### Vantagens do Padrão Prototype
O padrão Prototype permite criar cópias de objetos existentes sem depender de suas classes concretas. Isso torna o código mais flexível e fácil de manter, especialmente quando se trabalha com objetos complexos ou quando a criação de novos objetos envolve processos complicados.

### Exemplo de Uso
No exemplo, a classe `AlunoDP` implementa o método `clonar`, que cria uma nova instância de `AlunoDP` com os mesmos valores de nome, idade e curso. A classe `EscolaDP` utiliza esse método para adicionar cópias de alunos à lista de alunos, simplificando o processo de clonagem e evitando a necessidade de criar novos objetos manualmente.



## Explicação das Mudanças do Padrão Factory Method


### Sem o Padrão Factory Method (`WithoutFM.ts`)
No arquivo `WithoutFM.ts`, criamos uma classe `Aluno` que representa um aluno com nome, idade e curso. Em seguida, criamos uma classe `Escola` que gerencia uma lista de alunos. Para adicionar um aluno à lista, precisamos instanciar manualmente um novo objeto `Aluno` em cada situação onde isso é necessário, resultando em um processo de criação repetitivo e menos flexível.

### Com o Padrão Factory Method (`FactoryMethodFM.ts`)
No arquivo `FactoryMethodFM.ts`, implementamos o padrão Factory Method para organizar a criação de objetos `Aluno`. Definimos um método `criarAluno` na classe `Escola`, que encapsula a lógica de criação dos alunos. Este método é utilizado tanto na classe base `Escola` quanto em subclasses como `EscolaTecnica`, que podem sobrescrever esse método para fornecer um comportamento específico, tornando o código mais limpo e flexível.

### Vantagens do Padrão Factory Method
O padrão Factory Method permite encapsular a lógica de criação de objetos em um método dedicado, garantindo flexibilidade e extensibilidade. Esse padrão é especialmente vantajoso quando diferentes subclasses precisam criar variações do mesmo objeto ou adicionar comportamento específico ao processo de criação. Ele também facilita a manutenção do código, já que qualquer alteração no processo de criação pode ser feita em um único lugar, o que reduz o risco de inconsistências.

### Exemplo de Uso
No exemplo, a classe `Escola` contém o método protegido `criarAluno`, que cria instâncias da classe `Aluno`. A classe `EscolaTecnica` é uma subclass que sobrescreve o método `criarAluno` para adicionar comportamento específico — como imprimir uma mensagem ao criar um aluno. Este exemplo demonstra como o Factory Method pode ser utilizado para fornecer variações controladas no processo de criação, garantindo consistência e flexibilidade.



## 🤝 Contribuidores

<a href="https://github.com/Duduenri"><img src="https://github.com/Duduenri.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/Xande025"><img src="https://github.com/Xande025.png" width="45" height="45"></a> &nbsp;