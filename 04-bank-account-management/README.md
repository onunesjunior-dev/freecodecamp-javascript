# Bank Account Management

Projeto 4 de 5 da certificação **JavaScript** do freeCodeCamp.

Classe `BankAccount` com depósito, saque, consulta de saldo e listagem de transações
(depósitos/saques separados), guardando cada transação como objeto `{ type, amount }`.

## Testes

22 de 22 asserções automatizadas: `deposit` recusa valor ≤ 0, soma ao saldo e retorna a
mensagem com valor e novo saldo; `withdraw` recusa valor ≤ 0 ou maior que o saldo, subtrai
corretamente; `checkBalance`, `listAllDeposits` e `listAllWithdrawals` no formato exato
esperado; a instância `myAccount` precisa ter no mínimo 5 transações, 2 depósitos, 2 saques
e saldo final maior que $100.

## Como ver funcionando

```bash
node -i -e "$(cat script.js)"
> myAccount.checkBalance()
> myAccount.listAllDeposits()
```

## Desafio original

https://www.freecodecamp.org/learn/javascript-v9/javascript-projects/build-a-bank-account-management-program

---
Parte do [currículo completo de JavaScript](../README.md) no freeCodeCamp.
