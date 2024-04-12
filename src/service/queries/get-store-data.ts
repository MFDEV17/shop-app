import axios from "axios";

export type Currency = {
  _id: string;
  currencyCode: string;
  currencyName: string;
  euroEqual: number;
  currencySymbol: string;
};

export type DeliveryCountry = {
  _id: string;
  countryName: string;
  methods: DeliveryMethod[];
};

type DeliveryPriceRange = {
  _key: string;
  deliveryPrice: number;
  from: number;
  to: number;
};

export type DeliveryMethod = {
  _key: string;
  methodName: string;
  deliveryTime: number;
  deliveryPriceRange: DeliveryPriceRange[];
};

const STORE_DATA_ENDPOINT =
  "https://6bnrzi3k.api.sanity.io/v2022-03-07/data/query/production?query=%7B+%27countries%27%3A+*%5B_type+%3D%3D+%27country%27%5D%7B_id%2C+countryName%2C+methods%5B%5D%7B_key%2C+methodName%2C+deliveryPriceRange%5B%5D%7B_key%2C+deliveryPrice%2C+from%2C+to%7D%7D%7D%2C+%27currencies%27%3A+*%5B_type+%3D%3D+%27currency%27%5D%7B_id%2C+currencyCode%2C+currencyName%7D+%7D";

export const getStoreData = async () => {
  const data = await axios
    .get<{
      result: { countries: DeliveryCountry[]; currencies: Currency[] };
    }>(STORE_DATA_ENDPOINT)
    .then((d) => d.data.result);

  const { countries, currencies } = data;

  const currencyPairs = await axios
    .get<{ [k: string]: number }>("http://localhost:3000/rates")
    .then((d) => d.data);

  const convertedCurrencies = currencies.map((c) => ({
    ...c,
    euroEqual: currencyPairs[c.currencyCode],
  }));

  return { countries, currencies: convertedCurrencies };
};
