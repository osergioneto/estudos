import * as faker from "faker";
import gql from "graphql-tag";
import { exchangeTariff, sanitizeTariff } from "../helpers/utils";
import { constructTestClient } from "./utils";

const EXCHANGE_MONEY = gql`
    query exchange($url: String!) {
        exchange(url: $url) {
            date
            tariffDescription
            real
            dolar
            euro
        }
    }
`;

it("should remove all characters than numbers", () => {
    const dirty1 = faker.random.alphaNumeric(10);
    const dirty2 = faker.random.alphaNumeric(15);

    expect(typeof dirty1).toBe("string");
    expect(typeof dirty1).toBe("string");

    const sanitized1 = sanitizeTariff(dirty1);
    const sanitized2 = sanitizeTariff(dirty2);

    expect(typeof sanitized1).toBe("number");
    expect(typeof sanitized2).toBe("number");
});

it("should convert a currency to another currency", () => {
    const exchangedTariff = exchangeTariff("600", 1.25);

    expect(exchangedTariff).toBe("7.50");
});

it.skip("should exchange money", async () => {
    const { query } = constructTestClient();
    const res = await query({
        query: EXCHANGE_MONEY,
        variables: {
            url: "https://www.smartmei.com.br/",
        },
    });
});


