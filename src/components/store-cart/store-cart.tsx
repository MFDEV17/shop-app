import CloseIcon from "../../assets/icons/close-icon";
import LinkIcon from "../../assets/icons/link-icon";
import PencilIcon from "../../assets/icons/pencil-icon";
import TrashIcon from "../../assets/icons/trash-icon";

import sneaker from "../../assets/sneaker.png";
import { useRootStore } from "../../service/store/use-root-store";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../dialog/dialog";

const StoreCart = () => {
  const c = useRootStore((s) => s.currencyChoice);

  return (
    <Dialog>
      <div className="mx-auto max-w-[396px]">
        <div className="rounded-xl bg-bg_color">
          <div className="relative flex items-center">
            <div className="px-4 py-3">
              <img src={sneaker} alt="" className="" />
            </div>
            <DialogTrigger asChild>
              <div className="border-l border-l-secondary_bg_color px-4 py-3 hover:cursor-pointer">
                <div className="text-text_color">
                  <p className="font-semibold">Кроссовки</p>
                  <p className="pt-2 text-2xl font-semibold">
                    <span className="[word-spacing:-0.15rem]">€ 39</span>{" "}
                    <span className=" text-hint_color">
                      ≈{" "}
                      <span className="[word-spacing:-0.15rem]">
                        {39 * c!.euroEqual} {c?.currencyCode}
                      </span>
                    </span>
                  </p>
                  <p className="text-sm font-medium text-hint_color">
                    +340 ₽ доставка на склад
                  </p>
                  <p className="pt-2 font-medium">0.2 кг</p>
                  <div className="flex items-center gap-x-1">
                    <LinkIcon />
                    <a
                      target="_blank"
                      href="https://google.com"
                      className="pt-2 italic text-link_color"
                    >
                      farfetch.com ...
                    </a>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <button className="absolute bottom-2 right-2 inline-flex items-center justify-center rounded-lg bg-destructive_text_color p-2">
              <TrashIcon />
            </button>
            <button className="absolute right-2 top-2 inline-flex items-center justify-center rounded-lg bg-secondary_bg_color px-3.5 py-1.5 font-medium text-hint_color">
              1
            </button>
          </div>
        </div>
      </div>

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

export default StoreCart;
