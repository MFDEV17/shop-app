import { useResultPageState } from "../service/state/use-result-page-state";

const ResultPage = () => {
  const { name } = useResultPageState();

  return <div>{name} 3</div>;
};

export default ResultPage;
