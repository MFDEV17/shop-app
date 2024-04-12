import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type Category = {
  _id: string;
  categoryName: string;
  categoryWeight: number;
  singleCategoryName?: string;
  categoryImage: string;
  isMutableWeight: boolean;
};

const CATEGORY_ENDPOINT =
  "https://6bnrzi3k.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27category%27%5D%7B_id%2C+isMutableWeight%2C+categoryWeight%2C+categoryName%2C+singleCategoryName%2C+%27categoryImage%27%3A+categoryImage.asset-%3Eurl%7D";

const getCategories = async () => {
  return await axios
    .get<{ result: Category[] }>(CATEGORY_ENDPOINT)
    .then((d) => d.data.result);
};

export const useCategoriesQuery = () => {
  const {
    data: categoriesData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return {
    categoriesData,
    isPending,
    isError,
  };
};
