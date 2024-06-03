import { useEffect } from "react";
import { useStore } from "./store";
import { getExpressionString } from "./utils";

export const Formula = () => {
  const { expression, setExpression, formulaTokens } = useStore();

  useEffect(() => {
    setExpression(getExpressionString(formulaTokens));
  }, [formulaTokens, setExpression]);

  return (
    <div>
      <p>Formula:</p>
      <p>{expression}</p>
    </div>
  );
};
