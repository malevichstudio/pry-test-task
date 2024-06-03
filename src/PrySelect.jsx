import { useQuery } from "@tanstack/react-query";
import Creatable from "react-select/creatable";
import { formatOptions, getGroupOptions } from "./utils";
import { useStore } from "./store";

import { QUERY_KEY } from "./constants";
import {
  formatCreateLabel,
  formatOptionLabel,
  getOptionValue,
  isOptionSelected,
  isValidNewOption,
} from "./select";
import { Formula } from "./Formula";
import { Result } from "./Result";

export const PrySelect = () => {
  const { formulaTokens, setFormulaTokens } = useStore();

  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      fetch(import.meta.env.VITE_OPERANDS_URL).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const options = formatOptions(data);
  const groupedOptions = getGroupOptions(options);

  return (
    <div>
      <Creatable
        createOptionPosition="first"
        formatCreateLabel={formatCreateLabel}
        isValidNewOption={isValidNewOption}
        options={groupedOptions}
        onChange={setFormulaTokens}
        value={formulaTokens}
        isOptionSelected={isOptionSelected}
        getOptionValue={getOptionValue}
        formatOptionLabel={formatOptionLabel}
        isMulti
      />
      <Formula />
      <Result />
    </div>
  );
};
