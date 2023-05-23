# 1. tool-manager
Gerenciador de ferramentas em NodeJS integrado ao Mysql. Usando autentição básica, retornando JWT para autorização.

## 1.1. Executando projeto
Para executá-lo, basta executar o comando: 
````
docker-compose up
````
Ao executar este comando a aplicação provê 3 apps, uma delas o banco de dados em mysql, e a outra, uma aplicação de serviços para gerenciamento de ferramentase também uma instânci do Keycloack.
Após levantar o banco de dados, realiza um db:migrate enquanto a aplicação sobe. 
Para utilizar o keycloack, é necessário configurar suas permissões, e enviar na aplicação as credenciais de usuário na rola /login:
````
{
    "username": "admin",
    "password": "12345"
}
````

## 1.2. Documentação
Para ver a documentação, acesse a rota: /api-docs

## 1.3. Variáveis de Ambiente
Este projeto conta com um template de variáveis de ambiente na raiz do projeto: .env.template

## 1.4. Sobre este projeto
Foram realizadas as seguintes atividades: 
- [x] Criação do docker-compose subindo o banco de dados
- [x] Criação do docker-compose subindo a aplicação
- [x] Criação das rotas 
- [x] Implementação do JWT
- [x] Criação das Entidades com sequelize
- [x] Criação das migrations com sequelize cli
- [x] Criação de .env e .env.template
- [x] Documentação com swagger
- [x] Testes Unitários 
- [x] Criação dos serviços e controladores
- [x] Implementação dos repositories
