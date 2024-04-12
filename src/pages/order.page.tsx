import { useOrderPageState } from "../service/state/use-order-page-state";

const OrderPage = () => {
  const { name } = useOrderPageState();

  return <div>{name}order 4</div>;
};

export default OrderPage;
