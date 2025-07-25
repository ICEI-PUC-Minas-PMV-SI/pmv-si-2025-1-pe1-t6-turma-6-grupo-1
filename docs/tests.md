# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

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

**Caso de Teste** | **CT08 - O tempo para gerar os cálculos**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a aba "Calcule" na barra de navegação <br> 2) O usuário irá escolher entre o cálculo do IMC, TMB, calorias ou água <br> 3) Após a escolha, coloque seu respectivo peso e altura <br> 4) Em seguida, basta clicar em "Calcular" para se obter o resultado.
**Requisitos associados** | RNF-007
**Resultado esperado** | O cálculo aparecerá no retângulo abaixo em aproximadamente 1 segundo
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - Envio do feedback**
 :--------------: | ------------
**Procedimento**  | 1) Na página principal do site: https://pd-h.github.io/TreinUPweb/index.html - ao final dela, terá um link para um feedback <br> 2) Clique no botão "Com seu feedback aqui" <br> 3) Escolha entre os tópicos seguintes: "Montagem dos treinos" , "Sugestão de Melhoria" , "Crítica construtiva" , "Outros" <br> 4) Em seguida, escolha o nível de estrelas correspondente, de 1 a 5 <br> 5) Escreva sua avaliação no espaço abaixo <br> 6) Permita a opção ou não de ter seu feedback público <br> 7) Clicar em "Enviar Feedback", e terá seu feedback exposto na aba "Ver Feedbacks" e se puser público, ficará também em "Feedbacks Públicos".
**Requisitos associados** | RF-012
**Resultado esperado** | Usuário poderá escrever e enviar o seu feedback podendo vê-lo depois
**Dados de entrada** | Escolha entre as opções postas, avaliação de 1 a 5 estrelas e a inserção de um texto válido, além da opção de selecionar se o feedback será público ou privado
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - O design do site**
 :--------------: | ------------
**Procedimento**  | 1) Navegar pelo site.
**Requisitos associados** | RNF-002
**Resultado esperado** | A interface do sistema deve ser intuitiva e de fácil navegação para usuários de diferentes níveis de familiaridade com a tecnologia.
**Dados de entrada** | Nenhum
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

|*Caso de Teste*                                 |*CT09 - Envio do feedback*                                        |
|---|---|
|Requisito Associado | RF-012 |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1_ECK0EFkt_-6KeqSFfPElqesLNjgzEvb/view?usp=sharing |


## Avaliação dos Testes de Software

Os testes de software realizados confirmaram que todos os requisitos prioritários foram devidamente implementados e estão funcionando conforme o esperado, garantindo a entrega das principais funcionalidades previstas para o sistema.

No entanto, identificamos oportunidades de aprimoramento para versões futuras, visando tornar a experiência do usuário ainda mais completa e personalizada. Entre as possíveis melhorias, destaca-se a implementação de recursos que permitam ao próprio usuário editar e personalizar seus treinos gerados pelo sistema. Isso incluiria opções como substituir exercícios, ajustar a duração e a intensidade das atividades, além de possibilitar a criação de treinos totalmente personalizados a partir do zero, atendendo de forma mais precisa às necessidades e preferências individuais de cada usuário.

Outra sugestão relevante é a inclusão de funcionalidades de lembretes automáticos para ingestão de água e refeições, baseados nas metas e objetivos definidos pelo usuário. Esse tipo de recurso contribui para o acompanhamento mais efetivo dos hábitos diários, promovendo maior engajamento e auxiliando na conquista dos resultados desejados.

Essas melhorias, alinhadas às tendências dos melhores aplicativos de treino e personal trainer, têm potencial para elevar o nível de personalização, autonomia e motivação dos usuários, tornando o sistema ainda mais competitivo e eficiente no mercado de soluções para saúde e bem-estar.

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Além disso, houve uma verificação, com os respectivos quatro diferentes tipos usuários postos nas histórias, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja encontrar treinos simples, guiados e adaptáveis ao meu nível para criar uma rotina segura e motivadora de exercícios. |
| 2             | Você é uma pessoa que deseja um planejamento alimentar personalizado e alinhado aos meus objetivos para alcançar resultados saudáveis e eficientes. |
| 3             | Você é uma pessoa que deseja acessar treinos eficientes que se adaptam a espaços pequenos, com ou sem equipamentos, facilitando a prática mesmo com pouco espaço. |
| 4             | Você é uma pessoa que deseja receber sugestões de treinos para parques e praças, sem necessidade de equipamentos, para diversificar e aproveitar o ambiente externo. |

## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja encontrar treinos simples, guiados e adaptáveis ao meu nível para criar uma rotina segura e motivadora de exercícios.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 67.80 segundos                  |
| 2       | SIM             | 5                    | 98.92 segundos                  |
| 3       | SIM             | 5                    | 181.07 minutos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 115.93 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 27.46 segundos |


    Comentários dos usuários: A plataforma é bem intuitiva, consegui encontrar treinos adequados para iniciantes rapidamente. 
    Depois de acessar e ver os treinos me senti bem mais motivado.


Cenário 2: Você é uma pessoa que deseja um planejamento alimentar personalizado e alinhado aos meus objetivos para alcançar resultados saudáveis e eficientes.
| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 40.54 segundos                          |
| 2       | SIM             | 5                    | 56.42 segundos                          |
| 3       | SIM             | 4                    | 68.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 55.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 21.57 segundos |


    Comentários dos usuários: O site me proporciona um ótima planejamento, com os cálculos das principais coisas que são necessárias, mas poderia melhorar.

Cenário 3: Você é uma pessoa que deseja acessar treinos eficientes que se adaptam a espaços pequenos, com ou sem equipamentos, facilitando a prática mesmo com pouco espaço.
| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 10.28 segundos                          |
| 2       | SIM             | 5                    | 12.91 segundos                          |
| 3       | SIM             | 5                    | 14.75 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 12.64 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 5.52 segundos |


    Comentários dos usuários: Excelente a parte em que posso escolher e deixar o melhor treino para mim, na minha casa.
    Muito fácil a navegação e interface bonita.

Cenário 4: Você é uma pessoa que deseja receber sugestões de treinos para parques e praças, sem necessidade de equipamentos, para diversificar e aproveitar o ambiente externo.
| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 9.61 segundos                          |
| 2       | SIM             | 5                    | 11.57 segundos                          |
| 3       | SIM             | 5                    | 13.45 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 11.54 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 4.86 segundos |


    Comentários dos usuários: Mesma interface do treino em casa, como gostei da anterior, essa ficou ótima.
    Perfeito para iniciantes e também gostei da variedade de opções que possui essa parte.
    
## Avaliação dos Testes de Usabilidade

Com base nos resultados apresentados, é possível constatar que a plataforma de treinos demonstra excelente desempenho em relação ao sucesso das interações dos usuários, evidenciando que todos os cenários de uso foram completados de forma eficaz.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo). Segundo Dishman e Buckworth (1996), "a motivação intrínseca e a percepção positiva da experiência são fatores determinantes para a continuidade da prática de exercícios físicos", aspecto que parece estar bem contemplado na interface desenvolvida.

Quanto ao tempo necessário para completar cada tarefa, observou-se uma diferença considerável entre a performance dos usuários e a do especialista em todos os cenários testados. Essa disparidade é, em parte, previsível, considerando que o desenvolvedor possui conhecimento aprofundado sobre a estrutura da aplicação, localização dos elementos e organização das funcionalidades.

Entretanto, dado que essa diferença temporal foi significativa, e considerando alguns apontamentos feitos pelos participantes, identificamos oportunidades de aprimoramento na experiência do usuário.



