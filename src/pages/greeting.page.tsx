import { useGreetingPageState } from "../service/state/use-greeting-page-state.ts";
import shakingHand from "../assets/shaking-hand.png";

const GreetingPage = () => {
  const { firstName } = useGreetingPageState();

  return (
    <div className="grid min-h-dvh place-items-center">
      <div className="space-y-9">
        <img src={shakingHand} alt="" />

        <div className="flex flex-col items-center space-y-8 px-6 py-2">
          <p className="break-words break-all text-center text-4xl font-semibold text-text_color">
            Привет, <span className="text-link_color">{firstName}</span>!
          </p>
          <div className="space-y-6 text-hint_color">
            <p>
              Это приложение поможет тебе рассчитать стоимость доставки из
              Европы.
            </p>
            <p>
              Добавь нужные товары и укажи их стоимость, а остальное за нами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingPage;
