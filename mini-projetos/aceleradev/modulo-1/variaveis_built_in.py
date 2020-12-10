# Listas
lista = ['Sergio', 'Veronica', 'Gaia', 'Arya', 'Diana'] 
print(lista)

lista.append('Aue')
print(lista)

lista.remove('Sergio')
print(lista)

lista.pop()
print(lista)

lista.insert(1, 'Sirius')
print(lista)

# Tupla
tupla1 = (1, 2, 3)
tupla2 = (4, 5, 6)

tupla3 = tupla1 + tupla2
print(tupla3)

# Dicionario
dici = {
  'nome': 'Sergio',
  'sobrenome': 'Neto'
}

print(dici['nome'] + ' ' + dici['sobrenome'])
