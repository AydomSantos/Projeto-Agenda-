
# Aula sobre bibliotecas 
# = = = = = = = = = = = = = = = = = = = = = = =
"""
valorNum = 16
raizQuadrada = math.sqrt(valorNum)
print(f"A raiz Quadrada e : {int(raizQuadrada)}")

"""

"""
import math
import random

numAleatorio = random.randint(1,100)
print(f"O numero aleatorio e: {numAleatorio}")

lista = [1 , 2 , 54 , 87 , 5 , 4 , 2]
random.shuffle(lista)
print(f"a Lista Embaralhada e: {lista}")

"""

import random
import math


"""
def jogonumAleatorio():
    numeroUsuario = int(input("Digite um valor: "))
    numeroSorteado = random.randint(1, 100)
    quardaNum = numeroSorteado
    if(numeroUsuario == quardaNum):
       print(f"vc acertou !! o numero foi {quardaNum}")
       return
    elif(numeroUsuario < quardaNum):
       print(f"numero frio")
       jogonumAleatorio()
       print(quardaNum)
    elif(numeroUsuario > quardaNum):
       print(f"numero quente")
       jogonumAleatorio()
       print(quardaNum)
    else:
      print(f"voçê não acertou o numero gerado foi {quardaNum}")
      jogonumAleatorio()
# ===========================

 quardaNum = numeroSorteado
     print()
     contador = 1
     while(numeroUsuario != quardaNum):
          if(numeroUsuario == quardaNum):
               print(f"Acertei !!")
               return
          elif(numeroUsuario < quardaNum):
               print("Numero esta frio !!")
               jogonumAleatorio()
               contador += 1
          elif(numeroUsuario > quardaNum):
               print("Numero esta quente !!")
               jogonumAleatorio()
               contador += 1
          
          else:
               print("errou")
               jogonumAleatorio()
               contador += 1

"""

def numRandomico():
   return random.randint(0 , 100)
  
def verificaNum():
    numAleatorio = numRandomico()
    tentaivas = 0

    while True:
     numeroUsuario = int(input("Digite um valor: "))
     tentaivas += 1
     if(numeroUsuario < numAleatorio):
        print("Numero Multo Baixo !!")
     elif(numeroUsuario > numAleatorio ):
        print("Numero Multo Alto !!")
     else:
        print(f"Acertou !! {numAleatorio} em {tentaivas} Tentativas")
        break
 
def inicia():
   verificaNum()
          
inicia()


