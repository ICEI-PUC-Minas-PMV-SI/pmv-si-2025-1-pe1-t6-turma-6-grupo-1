# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir ao usuário cadastrar uma conta. | Pedro Henrique | login.html |
|RF-002| A aplicação deve conter um login para o usuário. | Pedro Henrique | login.html |
|RF-003| A aplicação deve incluir um formulário onde o usuário cadastrará seu peso, altura, idade, etc. | Pedro Henrique | formulario.html |

## Descrição das estruturas:

## Cadastro do Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome             | Texto (String)  | Cadastro do nome do usuário           | Pedro Henrique                                       |
| Email         | Texto (String)            | Cadastro do email do usuário                       | Pedro@gmail.com                                  |
| Nome de usuário       | Texto (String)             | Cadastro do nome para o usuário                       | Pedro10                            |
| Senha  | Texto (String)  | Cadastro de senha do usuário | 123456                                              |

## Login do Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome de usuário       | Texto (String)             | Cadastro do nome para o usuário                       | Pedro10                            |
| Senha  | Texto (String)  | Cadastro de senha do usuário | 123456                                              |

## Formulário de cadastro (atividades físicas) do Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Idade             | Número (Inteiro)  | Idade do usuário           | 18                                      |
| Peso        | Número (Ponto Flutuante)            | Peso do usuário                       | 60.5                                  |
| Altura (cm)       | Número (Inteiro)             | Altura do usuário                       | 171                          |
| Se possui doença ou deficiência  | Booleano  | A opção do usuário escolher "sim" ou "não" para a pergunta | Não                                              |
| Se já faz alguma atividade física  | Booleano  | A opção do usuário escolher "sim" ou "não" para a pergunta | Sim                                              |


