import { Category } from "../queries/get-categories";
import {
  Currency,
  DeliveryCountry,
  DeliveryMethod,
} from "../queries/get-store-data";

export type StoreCart = {
  cartId: string;
  cartCount: number;
  cartParams: StoreCartParams;
  cartCategory: Category;
};

export type StoreCartParams = {
  price: number;
  size?: string;
  weight: number;
  link: string;
};

export type StoreState = {
  fetchStoreData: () => void;

  carts: StoreCart[];
  createCart: (cart: StoreCart) => void;
  updateCart: (
    cartId: string,
    paramsToUpdate: Partial<StoreCartParams>,
  ) => void;
  deleteCart: (cartId: string) => void;

  currencies: Currency[];
  currencyChoice?: Currency;
  setCurrencyChoice: (currencyName: string) => void;

  countries: DeliveryCountry[];
  countryChoice?: DeliveryCountry;
  setCountryChoice: (countryName: string) => void;

  methodChoice?: DeliveryMethod;
  setMethodChoice: (method: DeliveryMethod) => void;

  dialogStep: number;
  setDialogStep: (step: number) => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;

  categoryRef?: Category;
  setCategoryRef: (category: Category) => void;
};
