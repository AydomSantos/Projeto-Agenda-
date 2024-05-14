# criando a lista Produtos

listaProdutos = []
listaProdutos = [1 , 2, 3]


# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

# adiciona coisas na Lista na ultima Posição da lista

listaProdutos.append(4)
print(f"Usando o metodo append : {listaProdutos}")

# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

# adciona coisas na lista com o indice que vc colocar

listaProdutos.insert(1 , "laranja")
print(f"usando o insert: {listaProdutos}")

# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

# usando o metodo remove

listaProdutos.remove(2)
print(f"Usando o remove: {listaProdutos}")

# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

# mostra o ultimo item removido

ultimalistaProduto = listaProdutos.pop()
print(f"O ultimo Item : {ultimalistaProduto}")

# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

# comandos em python

print(len(listaProdutos))
# sum()

# Exercicio Com lista

valoresLista = [1, 2, 3, 5]
entradaValor = int(input("Digite um valor: "))
valoresLista.insert(6, entradaValor)
print(valoresLista)

entradaString = str(input("Digite uma palavra: "))
valoresLista.insert(0, entradaString)

print(valoresLista)