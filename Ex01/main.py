"""
valorNum = int(input("Digite Um valor: "))
if valorNum > 1:
    for count in range(2, valorNum):
        if (valorNum % count) == 0:
            print(valorNum, "Não e um valor Primo !!")
            break
        else:
            print(valorNum, "Não e um valor Primo !!")
            break
else:
    print(valorNum, "Não e um valor Primo !!")



"""

"""
def celsiusFahrenheit():
    cel = float(input("Digite a temperatura em °c': "))
    f = float ((9*cel)/5) + 32 
    return print(f'A temperatura em fahrenheit: {f}°f'.format(f))


def Fahrenheitcelsius():
    f = float(input("Digite A temperatura em fahrenheit: "))
    c = (f-32)*5/9
    return print(f'A temperatura em fahrenheit: {c}°f'.format(c))


def inicia():
    celsiusFahrenheit()
    Fahrenheitcelsius()

inicia()

"""

"""
def palindromo(s):
    s = str(input("Digite uma frase para a verificação: "))
    size = len(s)
    if(size == 0):
        return print(False)
    
    for i in range(0, size // 2):
        if(s[i] != s[size - i - 1]):
            return print(False)
    return print(True)


"""
"""
def verificaTriangulo():
    valorA = float(input("Digite o primeiro valor: "))
    valorB = float(input("Digite o segundo valor: "))
    valorC = float(input("Digite o terceiro valor: "))

    if valorA <= 0 or valorB <= 0 or valorC <=0:
        print("Valor invalido")
    elif(valorA + valorB > valorC and valorA + valorC > valorB and valorB + valorC > valorA):
        if(valorA == valorB and valorB == valorC and valorA == valorC):
            print("Triangulo Equilatero")
        elif(valorA != valorB and valorB != valorC and valorA != valorC):
            print("Triangulo Escaleno")
        elif(valorA == valorB or valorA == valorC or valorB == valorC):
            print("Triangulo Isosceles")
        elif( valorA **2 == valorB **2+valorC**2 or valorB**2 == valorA**2 + valorC**2 or valorC**2 == valorA**2 + valorB**2):
            print("Triangulo Retangulo")
    else:
        print("Não forma um Triangulo !!")

    

verificaTriangulo()

"""
"""
def anoBissexto():
    anoAtual = int(input("Ano Atual: "))
    if(anoAtual % 4 == 0 and anoAtual % 100 != 0) or (anoAtual % 400 == 0):
        print(f"o ano {anoAtual} e Bissexto")
    else:
        print(f"o ano {anoAtual} não Bissexto")
    return anoAtual



anoBissexto()
"""

"""
def ContarVogal():
    vogais = 'aeiou'
    text = str(input("Digite Qualquer Palavra: "))
    qtd_vogais = len([c for c in text.lower() if c in vogais])
    print(qtd_vogais) 

ContarVogal()

"""
"""
import string
import random

def gerarSenha(size):
     caracteres = string.ascii_letters + string.digits + string.digits + "!@#?" * 2
     senha = ''.join(random.choice(caracteres) for _ in range(size))
     return senha

tamanhoSenha = int(input("Digite a quantidade de caracteres que deseja: "))
senhaGerada = gerarSenha(tamanhoSenha)
print(f"Semha gerada foi: {senhaGerada}")

"""


def palindromo():
    s = str(input("Digite uma frase para a verificação: ")).lower()
    size = len(s)
    if(size == 0):
        return print(False)
    
    for i in range(0, size // 2):
        if(s[i] != s[size - i - 1]):
            return print(False)
    return print(True)


palindromo()