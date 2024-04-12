import { ReactElement } from "react";

import { useMap } from "../utils/use-map";

export const useDialog = () => {
  const [map] = useMap<number, ReactElement>([
    [1, <div>hello</div>],
    [2, <div>hello2</div>],
  ]);

  return {
    content: map.get(1),
  };
};
