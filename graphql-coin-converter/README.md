# Currency Conversion

Para rodar essa aplicação localmente siga os seguintes passos:

1) Tenha uma instância do Postgres rodando;
```sh
# Se você puder usar Docker, rode o seguinte comando:
sudo docker run -p <HOST_PORT>:5432 -e POSTGRES_PASSWORD=<PASSWORD> -d postgres
```
2) Instale o pacote `ts-node` globalmente, ele vai permitir que você rode sua aplicação typescript sem uma etapa explicita de transpilação (não é recomendado para produção):
```sh
npm i -g ts-node
```
3) Instale as dependências do projeto:
```sh
npm i
```
4) Configure seu arquivo `.env` seguindo o que está descrito em `.env.example`:
```sh
DATABASE_URL=postgres://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>
```
5) Execute os seguintes comandos para criar o database e para executar as migrações:
```sh
npx sequelize db:create
npx sequelize db:migrate
```
6) Finalmente, rode a aplicação:
```sh
npm run dev:start
```