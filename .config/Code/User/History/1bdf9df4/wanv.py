import numpy as np

print("Bem vindo a calculadora de ICMS ST: ")
Produto = float(input("Digite o valor do produto: "))
MVA = float(input(f"Valor Prod: {Produto}\nDigite o valor da porcentagem do MVA: "))
ICMS = float(input(f"Valor Prod: {Produto}\nValor do MVA: {MVA}%\nAgora, o valor de subtração do icms: "))
ValorA = Produto + (MVA / 100) - (ICMS / 100)
ValorB = Produto - (ICMS / 100)
ValorFim = ValorA - ValorB
print("Valor final: ",ValorFim)