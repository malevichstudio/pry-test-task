export const ALLOWED_OPERATORS = ["*", "+", "-", "/", "(", ")", "^"];

export const ALLOWED_OPERATORS_OPTIONS = ALLOWED_OPERATORS.map((el) => ({
  label: el,
  value: el,
  id: el,
}));

export const QUERY_KEY = "repoData";
