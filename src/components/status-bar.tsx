import { Currency } from "../service/queries/get-store-data";

const StatusBar = ({ currency }: { currency?: Currency }) => {
  const format = () => {
    if (currency) {
      const { currencyCode, euroEqual } = currency;

      const currencyChoiceFormat = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: currencyCode,
      }).format(euroEqual);

      return `Актуальный курс: ${currencyChoiceFormat} за €1`;
    }
  };

  return (
    <div className="w-full bg-text_color px-4 py-3 text-center text-sm font-medium text-bg_color">
      <p>
        <span className="pr-1.5">💶</span>
        {format()}
      </p>
    </div>
  );
};

export default StatusBar;
