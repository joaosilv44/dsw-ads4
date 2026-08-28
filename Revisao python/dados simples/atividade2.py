class Pessoa:
    def __init__(self, nome, idade, email):
        self.nome = nome
        self.idade = idade
        self.email = email

    def mostrarPessoa(self):
        return (
            f"nome: {self.nome}, Idade: {self.idade}, E-mail: {self.emial}"
        )

    def validarIdade(self):
        if self.idade < 0:
            print("A idade não pode ser negativa!")

    def aniversario(self):
        self.idade = self.idade +1


class Aluno(Pessoa):
    def __init__(self, nome, idade, email, matricula, curso):
        super().__init__(nome, idade, email)
        self.matricula = matricula
        self.curso = curso

    def exibirDadosAluno(self):
        return (
            f"Nome: {self.nome}\n"
            f"Idade: {self.idade}\n"
            f"E-mail: {self.email}\n"
            f"Matrícula: {self.matricula}\n"
        )


class Curso:
    def __init__(self, nome):
        self.nome = nome 
        self.alunos = []

    def adicionarAluno(self, aluno):
        if isinstance(aluno, Aluno):
            self.alunos.append(aluno)
        else:
            return "Aluno inválido!"

    def listarAlunos(self):
        for aluno in self.alunos:
           print(aluno.exibirDadosAluno())

class SistemaCursos:
    def __init__(self):
        self.cursos = []

    def cadastrarCurso(self):
        nome = input("Digite o nome do curso que será cadastrado: ")
        if nome not in self.cursos:
            nome = Curso(nome)
            print(f"Curso {self.nome} cadastrado com sucesso!")
        if nome in self.cursos:
            print("Já existe um curso com esse nome!")
        else:
            print("Erro ao cadastrar o curso, tente novamente!")

    def pesquisarCurso(self):
        busca = input("Digite o nome do curso que você procura: ")
        for curso in self.cursos:
            if curso.nome == busca:
                print(curso.nome , self.curso.listarAlunos())
            else:
                print("Não existe um curso com esse nome!")

    def listagem(self):
        print(f"CURSOS:\n{self.cursos}")
        for curso in self.cursos:
            print(f"{curso.nome} -- {curso.listarAlunos()}")

def main():

    sistema = SistemaCursos()

    while(True):
        print(" == SISTEMA DE GERENCIAMENTO DE CURSOS E ALUNOS == ")
        print("1 - Cadastrar Curso")
        print("2 - Buscar curso")
        print("3 - Adicionar aluno a um curso")
        print("4 - Listar cursos e alunos")
        print("0 - Sair")
        opcao = int(input("Digite a opção desejada:")) 

        if opcao == 1:
            sistema.cadastrarCurso()

        elif opcao == 2:
           sistema.pesquisarCurso()

        elif opcao == 3:
            print(sistema.cursos)
            cursoAlterado = input("Escolha o curso:")
            if cursoAlterado in sistema.cursos:
                nome = input("Nome do aluno: ")
                idade = input("Idade do aluno: ")
                email = input("Email do aluno: ")
                matricula = input("Matricula: ")
                aluno = Aluno(nome, idade, email, matricula, cursoAlterado)
                cursoAlterado.adicionarAluno(aluno)
                print("Sucesso!")
            else:
                print("Erro, curso inválido")

        elif opcao == 4:
            sistema.listagem()

        elif opcao == 0:
            print("Saindo do Sistema...")
            break