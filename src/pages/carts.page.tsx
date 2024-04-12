import { ChevronIcon } from "../assets/icons/chevron-icon.tsx";

import { useCartsPageState } from "../service/state/use-carts-page-state.ts";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";

import StatusBar from "../components/status-bar.tsx";
import StoreCart from "../components/store-cart/store-cart.tsx";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../components/dialog/dialog.tsx";

import CloseIcon from "../assets/icons/close-icon.tsx";
import PlusIcon from "../assets/icons/plus-icon.tsx";

import PencilIcon from "../assets/icons/pencil-icon.tsx";
import sneaker from "../assets/sneaker.png";

const CartsPage = () => {
  const {
    countryChoice,
    methodChoice,
    currencyChoice,
    countries,
    currencies,
    setCurrencyChoice,
    setCountryChoice,
    setMethodChoice,
    createCart,
  } = useCartsPageState();

  return (
    <Dialog>
      <div className="relative min-h-dvh bg-secondary_bg_color">
        <StatusBar currency={currencyChoice} />
        <div className="bg-bg_color px-5 py-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-text_color">
              <p>Валюта оплаты</p>
              <Select.Root onValueChange={setCurrencyChoice}>
                <Select.Trigger asChild>
                  <button className="inline-flex w-[9.75rem] items-center justify-between rounded-lg bg-secondary_bg_color p-3 font-medium text-text_color outline-none">
                    <Select.Value placeholder={currencyChoice?.currencyName} />
                    <Select.Icon>
                      <ChevronIcon />
                    </Select.Icon>
                  </button>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    sideOffset={-10}
                    sticky="always"
                    position="popper"
                    className="w-[9.75rem] rounded-b-lg bg-secondary_bg_color px-3 pb-3 pt-4 font-medium text-hint_color"
                  >
                    <Select.Viewport className="space-y-4">
                      {currencies.map((i) => (
                        <Select.Item
                          value={i.currencyName}
                          className="outline-none hover:cursor-pointer"
                        >
                          <Select.ItemText>{i.currencyName}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
            <div className="flex items-center justify-between text-text_color">
              <p>Страна доставки</p>
              <Select.Root onValueChange={setCountryChoice}>
                <Select.Trigger asChild>
                  <button className="inline-flex w-[9.75rem] items-center justify-between rounded-lg bg-secondary_bg_color p-3 font-medium text-text_color outline-none">
                    <Select.Value placeholder="Казахстан" />
                    <Select.Icon>
                      <ChevronIcon />
                    </Select.Icon>
                  </button>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    sideOffset={-10}
                    sticky="always"
                    position="popper"
                    className="w-[9.75rem] rounded-b-lg bg-secondary_bg_color px-3 pb-3 pt-4 font-medium text-hint_color"
                  >
                    <Select.Viewport className="space-y-4">
                      {countries.map((i) => (
                        <Select.Item
                          value={i.countryName}
                          className="outline-none hover:cursor-pointer"
                        >
                          <Select.ItemText>{i.countryName}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>
          <div className="mt-5 space-y-4 text-text_color">
            <p className="font-medium">Способ доставки</p>
            <div className="space-y-3">
              {countryChoice?.methods.map((method) => (
                <div className="flex items-center gap-x-2">
                  <Checkbox.Root
                    onClick={() => setMethodChoice(method)}
                    className="inline-flex size-4 items-center justify-center rounded-full border-2 border-button_color outline-none"
                    id={method._key}
                    checked={methodChoice?._key == method._key}
                  >
                    <Checkbox.Indicator className="size-2 rounded-full bg-button_color" />
                  </Checkbox.Root>
                  <label htmlFor={method._key} className="hover:cursor-pointer">
                    {method.methodName}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-lg">
          <div className="space-y-2 px-3 pb-20 pt-4">
            <StoreCart />
            <StoreCart />
            <StoreCart />
            <StoreCart />
            <StoreCart />
            <StoreCart />
          </div>
        </div>
      </div>

      <DialogTrigger asChild>
        <button className="btn-shadow fixed bottom-3 right-3 z-[40] inline-flex items-center justify-center rounded-full bg-button_color p-3.5">
          <PlusIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-bg_color">
        <DialogHeader className="sticky top-0 z-50 border-b border-b-hint_color bg-bg_color p-4">
          <div className="opacity-0" />
          <p className="font-medium text-hint_color">Редактирование товара</p>
          <CloseIcon />
        </DialogHeader>

        <div className="flex flex-col items-center justify-center px-5 py-6">
          <img src={sneaker} alt="" className="size-[5.75rem]" />
          <div className="flex items-center gap-x-2 pt-5 text-2xl font-semibold text-text_color">
            <p>Кроссовки</p>
            <PencilIcon className="mt-1 hover:cursor-pointer" />
          </div>
          <div className="space-y-1 pt-2 text-center text-sm text-hint_color">
            <p>Расчётный вес — 1 кг</p>
            <p>Комиссия за выкуп — 200 ₽</p>
          </div>
          <p className="pt-5 text-center text-sm text-link_color underline hover:cursor-pointer">
            Список товаров запрещённых к пересылке
          </p>
          <ul className="list-disc pt-5 text-sm text-destructive_text_color">
            <li>Вес должен быть в пределах 0.1-100 кг</li>
            <li>Некорректная ссылка</li>
            <li>Некорректная цена</li>
          </ul>

          <div className="space-y-5 pt-5">
            <div className="flex items-center gap-x-3">
              <div className="flex flex-col gap-y-1 text-sm text-hint_color">
                <label htmlFor="">
                  Цена <span className="text-destructive_text_color">*</span>
                </label>
                <input className="w-full rounded-lg bg-secondary_bg_color px-3 py-3 outline-none" />
              </div>
              <div className="flex flex-col gap-y-1 text-sm text-hint_color">
                <label htmlFor="">
                  Размер <span className="text-destructive_text_color">*</span>
                </label>
                <input className="w-full rounded-lg bg-secondary_bg_color px-3 py-3 outline-none" />
              </div>
              <div className="flex flex-col gap-y-1 text-sm text-hint_color">
                <label htmlFor="">
                  Вес <span className="text-destructive_text_color">*</span>
                </label>
                <input className="w-full rounded-lg bg-secondary_bg_color px-3 py-3 outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 text-sm text-hint_color">
              <label htmlFor="">
                Ссылка на товар{" "}
                <span className="text-destructive_text_color">*</span>
              </label>
              <input className="w-full rounded-lg bg-secondary_bg_color px-3 py-3 outline-none" />
              <div className="space-y-2 pt-3 text-sm">
                <p className="text-link_color">
                  +340 ₽ за доставку с этого магазина на склад
                </p>
                <p>
                  Доставка с некоторых магазинов в Испанию платная. Мы
                  автоматически определяем стоимость доставки, и если она
                  платная — добавляем её к общей стоимости заказа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartsPage;
