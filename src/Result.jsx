import { useEffect } from "react";
import { useStore } from "./store";
import { evaluateExpression } from "./utils";

export const Result = () => {
  const { result, setResult, expression } = useStore();

  useEffect(() => {
    const calculatedValue = evaluateExpression(expression);

    setResult(Number.isNaN(calculatedValue) ? "ERROR" : calculatedValue);
  }, [expression, setResult]);

  return (
    <div>
      <p>Result:</p>
      <p>{result}</p>
    </div>
  );
};
