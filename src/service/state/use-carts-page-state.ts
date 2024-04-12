import { useBackButton, useMainButton } from "@tma.js/sdk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRootStore } from "../store/use-root-store";

export const useCartsPageState = () => {
  const mainButton = useMainButton();
  const backButton = useBackButton();
  const navigate = useNavigate();

  const fetchStoreData = useRootStore((s) => s.fetchStoreData);

  const currencyChoice = useRootStore((s) => s.currencyChoice);
  const countryChoice = useRootStore((s) => s.countryChoice);
  const methodChoice = useRootStore((s) => s.methodChoice);

  const setCurrencyChoice = useRootStore((s) => s.setCurrencyChoice);
  const setCountryChoice = useRootStore((s) => s.setCountryChoice);
  const setMethodChoice = useRootStore((s) => s.setMethodChoice);
  const createCart = useRootStore((s) => s.createCart);

  const countries = useRootStore((s) => s.countries);
  const currencies = useRootStore((s) => s.currencies);
  const carts = useRootStore((s) => s.carts);

  useEffect(() => {
    fetchStoreData();

    mainButton.setParams({
      text: "Рассчитать",
      isVisible: carts.length > 0,
      isEnabled: carts.length > 0,
    });

    backButton.show();

    mainButton.on("click", () => navigate("/result"));
    backButton.on("click", () => navigate("/"));

    return () => {
      mainButton.off("click", () => navigate("/result"));
      backButton.off("click", () => navigate("/"));
    };
  }, [carts]);

  return {
    countries,
    currencies,

    countryChoice,
    methodChoice,
    currencyChoice,

    setCountryChoice,
    setMethodChoice,
    setCurrencyChoice,
    createCart,
  };
};
