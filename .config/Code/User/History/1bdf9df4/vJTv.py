import numpy as np

print("Bem vindo a calculadora de ICMS ST: ")
Produto = float(input("Digite o valor do produto: "))
print(f"Valor Prod: {Produto}\nDigite o valor da porcentagem do MVA: ")
MVA = float(input())
print(f"Valor Prod: {Produto}\nValor do MVA: {MVA}%\nAgora, o valor de subtração do icms: ")
ICMS = input()
print(f"Valores: \nProduto: {Produto}\nMVA: {MVA}%\nICMS: {ICMS}%")
ValorA = Produto + (MVA / 100) - (ICMS.isdecimal / 100)
print(ValorA)