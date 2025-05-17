import numpy as np

print("Bem vindo a calculadora de ICMS ST: ")
print("Digite o valor do produto: ")
Produto = input()
print(f"Valor Prod: {Produto}\nDigite o valor da porcentagem do MVA: ")
MVA = input().isdecimal
print(f"Valor Prod: {Produto}\nValor do MVA: {MVA}%\nAgora, o valor de subtração do icms: ")
ICMS = input().isdecimal
print(f"Valores: \nProduto: {Produto}\nMVA: {MVA}%\nICMS: {ICMS}%")
ValorA = Produto + (MVA / 100) - (ICMS.isdecimal / 100)
print(ValorA)