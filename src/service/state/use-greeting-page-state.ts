import {
  useBackButton,
  useInitData,
  useMainButton,
  usePostEvent,
} from "@tma.js/sdk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useGreetingPageState = () => {
  const mainButton = useMainButton();
  const backButton = useBackButton();
  const initData = useInitData();
  const navigate = useNavigate();
  const postEvent = usePostEvent();

  useEffect(() => {
    mainButton.setParams({
      text: "Начать",
      isEnabled: true,
      isVisible: true,
    });

    backButton.hide();

    postEvent("web_app_expand");

    mainButton.on("click", () => navigate("/carts"));

    return () => mainButton.off("click", () => navigate("/carts"));
  }, []);

  return {
    firstName: initData?.user?.firstName,
  };
};
