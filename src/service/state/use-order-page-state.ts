import { useBackButton, useMainButton } from "@tma.js/sdk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useOrderPageState = () => {
  const backButton = useBackButton();
  const mainButton = useMainButton();
  const nav = useNavigate();

  useEffect(() => {
    mainButton.setParams({
      text: "Перейти к диалогу",
      isEnabled: true,
      isVisible: true,
    });

    backButton.on("click", () => nav("/result"));

    return () => backButton.off("click", () => nav("/result"));
  }, []);

  return {
    name: "maxim",
  };
};
