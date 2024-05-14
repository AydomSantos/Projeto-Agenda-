# Exercicio Lista 10/05/2024

# = = = = = = = = = = = = = = = = = = = 

# Inicio
# = = = = = = = = = = = = = = =

# Meio
# = = = = = = = = = = = = = = =

def atribuirValor():
    numeros = str(input("Digite um valor: ")).split()
    valorUsuarioInt = [int(numero) for numero in numeros]
    contador = 0
    for c in valorUsuarioInt:
        if c % 2 != 0:
            contador += 1

    print(contador)

def inicia():
    atribuirValor()

# = = = = = = = = = = = = = = =

# Fim
# = = = = = = = = = = = = = = =

inicia()


# = = = = = = = = = = = = = = =
