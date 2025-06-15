# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

**Caso de Teste** | **CT01 - Cadastrar uma conta**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Cadastrar" <br> 3) Caso o usuário já tenha cadastro, basta clicar em "Já tenho conta".
**Requisitos associados** | RF-001
**Resultado esperado** | Usuário cadastrado e tela de login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Login do usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pd-h.github.io/TreinUPweb/login.html <br> 2) Preencha os campos "Usuário" e "Senha" no formulário <br> 3) Clique no botão "Entrar" <br> 4) Caso o usuário não tenha conta, clicar em "Novo Usuário".
**Requisitos associados** | RF-002
**Resultado esperado** | Acessar o site
**Dados de entrada** | Inserção de nome de usuário e senha válidos no login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Envio do formulário de avaliação física**
 :--------------: | ------------
**Procedimento**  | 1) Após se logar no site <br> 2) Acesse o endereço https://pd-h.github.io/TreinUPweb/montetreino.html - clicando em "Monte seu Treino" <br> 3) Clique em "Link do formulário" para acessar o formulário de avaliação física. <br> 4) Preencha os campos válidos no formulário, tais como, peso, altura, idade... <br> 3) Clique no botão "Enviar Formulário".
**Requisitos associados** | RF-003
**Resultado esperado** | Ter o formulário registrado e enviado
**Dados de entrada** | Inserção de idade, peso, altura válidos, tal como, se o usuário possui alguma deficiência ou se já praticara alguma atividade física (no formulário)
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Visualização do treino gerado**
 :--------------: | ------------
**Procedimento**  | 1) Após a feitura e envio do formulário, o usuário deverá clicar em "Link para o treino customizado" <br> 2) O usuário poderá verificar seus dados anteriormente digitados, além de seu IMC, com a classificação dentre seu devido peso <br> 3) Ademais, a visualização do cronograma semanal, com exercícios a cada dia.
**Requisitos associados** | RF-004 e RF-005
**Resultado esperado** | Treino gerado, permitindo sua visualização
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Adaptação de um treino em casa**
 :--------------: | ------------
**Procedimento**  | 1) Clique em "Treino personalizado em casa", encontrado na página principal - https://pd-h.github.io/TreinUPweb/index.html <br> 2) Selecione as opções que melhor se adequam <br> 3) Clicar em "Gerar Treino Personalizado" e em seguida gerará um treino baseado nas suas escolhas anteriores.
**Requisitos associados** | RF-006
**Resultado esperado** | Usuário possa ter gerado seu treino em casa
**Dados de entrada** | Escolha de opções entre faixa etária, espaço do local, tempo disponível e a ausência ou não de alguma deficiência física
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Adaptação de um treino ao ar livre**
 :--------------: | ------------
**Procedimento**  | 1) Clique em "Treino personalizado ao ar livre", encontrado na página principal - https://pd-h.github.io/TreinUPweb/index.html <br> 2) Selecione as opções que melhor se adequam <br> 3) Clicar em "Gerar Treino ao Ar Livre" e em seguida gerará um treino baseado nas suas escolhas anteriores.
**Requisitos associados** | RF-006
**Resultado esperado** | Usuário possa ter gerado seu treino ao ar livre
**Dados de entrada** | Escolha de opções entre faixa etária, melhor ambiente disponível, tempo disponível, nível de condicionamento físico e seu objetivo primário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Calculo do IMC, TMB, Calorias e ingestão de Água**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a aba "Calcule" na barra de navegação <br> 2) O usuário irá escolher entre o cálculo do IMC, TMB, calorias ou água <br> 3) Após a escolha, coloque seu respectivo peso e altura <br> 4) Em seguida, basta clicar em "Calcular" para se obter o resultado.
**Requisitos associados** | RF-008 e RF-009
**Resultado esperado** | O cálculo aparecerá no retângulo abaixo
**Dados de entrada** | Escolha e inserção de peso e altura do usuário no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Envio do feedback**
 :--------------: | ------------
**Procedimento**  | 1) Na página principal do site: https://pd-h.github.io/TreinUPweb/index.html - ao final dela, terá um link para um feedback <br> 2) Clique no botão "Com seu feedback aqui" <br> 3) Escolha entre os tópicos seguintes: "Montagem dos treinos" , "Sugestão de Melhoria" , "Crítica construtiva" , "Outros" <br> 4) Em seguida, escolha o nível de estrelas correspondente, de 1 a 5 <br> 5) Escreva sua avaliação no espaço abaixo <br> 6) Permita a opção ou não de ter seu feedback público <br> 7) Clicar em "Enviar Feedback", e terá seu feedback exposto na aba "Ver Feedbacks" e se puser público, ficará também em "Feedbacks Públicos".
**Requisitos associados** | RF-012
**Resultado esperado** | Usuário poderá escrever e enviar o seu feedback podendo vê-lo depois
**Dados de entrada** | Escolha entre as opções postas, avaliação de 1 a 5 estrelas e a inserção de um texto válido, além da opção de selecionar se o feedback será público ou privado
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Cadastrar uma conta*                                         |
|---|---|
|Requisito Associado | RF-001 |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1CoC8FaOCe3IBPwpfqvjS6sUqpmuTLc7L/view?usp=sharing| 

|*Caso de Teste*                                 |*CT02 - Login do usuário*                                        |
|---|---|
|Requisito Associado | RF-002 |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1lMHEgxfWAVBD44mJA-n51zdYVmxmhxGp/view?usp=sharing | 

|*Caso de Teste*                                 |*CT03 - Envio do formulário de avaliação física*                                        |
|---|---|
|Requisito Associado | RF-003 |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1BtMC-tP1f4KO_bGuZDrsVzyRKNduVA4v/view?usp=sharing |

|*Caso de Teste*                                 |*CT04 - Visualização do treino gerado*                                        |
|---|---|
|Requisito Associado | RF-004 e RF-005 |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/13Z5_WGBMEww82pRZHm_37LJc4O4ZSezO/view?usp=sharing |

|*Caso de Teste*                                 |*CT05 - Adaptação de um treino em casa*                                        |
|---|---|
|Requisito Associado | RF-006 |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1uCLFp7sYB6fGUsty7MPJIWTRCtEFFFQb/view?usp=sharing |

|*Caso de Teste*                                 |*CT06 - Adaptação de um treino ao ar livre*                                        |
|---|---|
|Requisito Associado | RF-006 |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1-8B_TsLbnrXMhh3kDxpanY0V4YK5_jz0/view?usp=sharing |

|*Caso de Teste*                                 |*CT07 - Calculo do IMC, TMB, Calorias e ingestão de Água*                                        |
|---|---|
|Requisito Associado | RF-008 e RF-009 |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/18-ncvMqPViMTRAqyO9adHr4RSyjUrSoQ/view?usp=sharing |

|*Caso de Teste*                                 |*CT08 - Envio do feedback*                                        |
|---|---|
|Requisito Associado | RF-012 |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1_ECK0EFkt_-6KeqSFfPElqesLNjgzEvb/view?usp=sharing |


## Avaliação dos Testes de Software

Os testes de software confirmaram que os requisitos prioritários foram implementados e operam conforme o esperado.

Pontos que poderião ter uma melhoria seria permitir que o próprio usuário edite e personalize seu treino gerado. Isso poderia incluir a opção de trocar exercícios, ajustar a duração ou intensidade, ou até mesmo criar treinos do zero. Testes para essa funcionalidade garantiriam que as alterações do usuário sejam salvas corretamente e reflitam no plano de treino. E tambem a adição de uma funcionalidade de lembretes para ingestão de água e refeições, com base nas metas do usuário.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



