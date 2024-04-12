import { useBackButton, useMainButton } from "@tma.js/sdk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useResultPageState = () => {
  const mainButton = useMainButton();
  const backButton = useBackButton();
  const nav = useNavigate();

  useEffect(() => {
    mainButton.setParams({
      text: "Заказать",
      isEnabled: true,
      isVisible: true,
    });

    mainButton.on("click", () => nav("/order"));
    backButton.on("click", () => nav("/carts"));

    return () => {
      mainButton.off("click", () => nav("/order"));
      backButton.off("click", () => nav("/carts"));
    };
  }, []);



  return {
    name: "maxim"
  }
};
