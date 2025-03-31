# Especificações do Projeto

## Personas

### Perfil:

Thiago Oliveira tem 25 anos e trabalha como desenvolvedor Python pleno em Campinas. É solteiro e mora sozinho em um pequeno apartamento no centro da cidade, ele tem uma intensa rotina de trabalho, passando a maior parte do dia sentado. Apesar de seu interesse por um estilo de vida mais saudável, ele tem dificuldade em manter hábitos consistentes de exercício e alimentação.  

### Estilo de vida:

Com uma renda mensal de R$7.500 e formação superior completa, Thiago valoriza tecnologia e praticidade, buscando soluções digitais que facilitem sua rotina. Ele prefere treinos rápidos e eficientes que possam ser realizados em casa ou ao ar livre, sem depender de academias ou equipamentos complexos. Nos finais de semana, Thiago pratica atividades ao ar livre, como corridas leves em parques.
  
### Objetivos:

Thiago quer melhorar seu condicionamento físico e evitar problemas de saúde no futuro, mas enfrenta desafios como a falta de tempo e motivação para treinar regularmente. Além disso, tem dificuldade em estruturar um plano de treinos e alimentação adequado aos seus objetivos e frequentemente esquece de se hidratar ao longo do dia.
  
### Preferências e comportamento:

Seus principais objetivos incluem criar o hábito de treinar pelo menos três vezes por semana no curto prazo, melhorar sua resistência física e desenvolver mais força muscular no médio prazo e, no longo prazo, manter um equilíbrio entre exercícios, alimentação saudável e hidratação.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário             | encontrar treinos simples e fáceis, guiados e que sejam adaptáveis ao meu nível,           | eu possa começar a me exercitar de forma segura e motivadora, criando uma rotina consistente para melhorar minha saúde.              |
|Usuário             | um planejamento alimentar personalizado e alinhado aos meus objetivos (ganho de massa, emagrecimento, performance etc.), | eu possa alcançar melhores resultados de maneira saudável e eficiente. |
|Usuário             | acessar treinos que se adaptam a espaços pequenos, com ou sem equipamentos,                 | eu possa me exercitar de forma eficiente e prática mesmo com pouco espaço, sem comprometer minha rotina. |
|Usuário             | encontrar sugestões de treinos para serem feitos em parques e praças, mesmo sem haver equipamentos nesses locais,               | eu possa diversificar minha rotina e consiga obter bons rendimentos, aproveitando o ambiente externo. |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir ao usuário cadastrar uma conta. | ALTA |  
|RF-002| A aplicação deve conter um login para o usuário.  | ALTA | 
|RF-003| A aplicação deve incluir um formulário onde o usuário colocará seu peso, altura, idade, etc  | ALTA | 
|RF-004| Com o formulário o gerenciamento do melhor treino para o usuário.  | ALTA | 
|RF-005| O usuário deve conseguir visualizar um cronograma de treinos diários ou semanais.  | ALTA | 
|RF-006| A aplicação deve permitir que o usuário escolha entre treinos para casa, academia ou ao ar livre. | ALTA | 
|RF-007| A aplicação deve incluir a opção do usuário mudar algum exercício que lhe pareça desconfortável.  | ALTA | 



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
