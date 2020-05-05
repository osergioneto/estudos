# Currency Conversion

Para rodar essa aplicação localmente siga os seguintes passos:

1) Instale o pacote `ts-node` globalmente, ele vai permitir que você rode sua aplicação typescript sem uma etapa explicita de transpilação (não é recomendado para produção):

```sh
npm i -g ts-node
```

2) Instale as dependências do projeto:
```sh
npm i
```

3) Rode a aplicação:
```sh
npm run dev:start
```

4) A aplicação estará disponivel em **http://localhost:4000**

## Exemplo de query

```graphql
{                                                  
  exchange(url: "https://www.smartmei.com.br") {
    real
    dolar
    euro
    tariffDescription
    date
  }
}
```
