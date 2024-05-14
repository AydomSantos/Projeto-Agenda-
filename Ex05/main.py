
"""
def somaImpares(list):
   impares = [num for num in list if num % 2 != 0]
   return sum(impares)

valorUsuario = input("digite uma lista de numeros separado por espaço: ").split()
valorDigitado = [int(num) for num in valorUsuario]

soma = somaImpares(valorDigitado)

print(f"A soma dos impares da lista e: {soma}")
   
"""

# lista Que retorna o numero mais alto da lista
"""

def listMax(list):
   return max(list)

valordigitadoMax = input("digite uma lista de numeros separado por espaço: ").split()
valordigitadoMax = [int(num) for num in valordigitadoMax]

valorMax = listMax(valordigitadoMax)

print(f"O valor maior e: {valorMax}")

"""

qtdAluno = int(input("Digite a quantidade de Alunos: "))
qtdNota = int(input("Digite a quantidade de Notas por Semestre: "))

alunos = []
for i in range(qtdAluno):
    nomeAluno = input("Digite o Nome do Aluno: ")
    somaNota = 0
    for n in range(qtdNota):
        notaAluno = float(input(f"Digite a nota do aluno {nomeAluno} no semestre {n + 1}:"))
        somaNota += notaAluno

    mediaAluno = somaNota / qtdNota
    alunos.append((nomeAluno, mediaAluno))  

# Ordenar a lista de alunos com base nas médias
alunos.sort(key=lambda x: x[1], reverse=True)

# Imprimir a tabela dos melhores alunos
print("Melhores Alunos:")
print("--------------")
print("Nome do Aluno   |   Média")
print("-----------------------------")
for nome, media in alunos[:3]:  
    print(f"{nome:<15} |   {media:.2f}")        





        

