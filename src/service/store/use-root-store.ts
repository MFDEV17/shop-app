import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

import { StoreState } from "./store-state";
import { getStoreData } from "../queries/get-store-data";

export const useRootStore = create<StoreState>()(
  devtools(
    immer((set) => ({
      fetchStoreData: async () => {
        const { countries, currencies } = await getStoreData();
        set({
          currencies,
          countries,
          currencyChoice: currencies[0],
          countryChoice: countries[0],
          methodChoice: countries[0].methods[0],
        });
      },
      countries: [],
      currencies: [],
      carts: [],
      dialogStep: 1,
      setDialogStep: (dialogStep) => {
        set({ dialogStep });
      },
      goToNextStep: () =>
        set((state) => {
          state.dialogStep += 1;
        }),
      goToPrevStep: () =>
        set((state) => {
          state.dialogStep -= 1;
        }),
      reset: () =>
        set((state) => {
          state.dialogStep = 1;
        }),
      setCategoryRef: (categoryRef) => {
        set({ categoryRef });
      },
      createCart: (cart) =>
        set((state) => {
          state.carts.push(cart);
        }),
      updateCart: (cartId, paramsToUpdate) =>
        set((state) => {
          const cartIndex = state.carts.findIndex((c) => c.cartId == cartId);
          if (cartIndex != -1) {
            const cartsCopy = [...state.carts];
            cartsCopy[cartIndex] = {
              ...cartsCopy[cartIndex],
              ...paramsToUpdate,
            };

            return { cartsCopy };
          }
        }),
      deleteCart: (cartId) =>
        set((state) => {
          const cartIndex = state.carts.findIndex((c) => c.cartId == cartId);
          state.carts.splice(cartIndex, 1);
        }),
      setCurrencyChoice: (currencyName) =>
        set((state) => {
          const currency = state.currencies.find(
            (c) => c.currencyName == currencyName,
          );

          if (currency) {
            state.currencyChoice = currency;
          }
        }),
      setCountryChoice: (countryName) =>
        set((state) => {
          const country = state.countries.find(
            (c) => c.countryName == countryName,
          );

          if (country) {
            state.countryChoice = country;

            state.methodChoice =
              country.methods.find(
                (m) => m.methodName == state.methodChoice?.methodName,
              ) ?? country.methods[0];
          }
        }),
      setMethodChoice: (method) => set({ methodChoice: method }),
    })),
  ),
);
