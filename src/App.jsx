import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrySelect } from "./PrySelect";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PrySelect />
    </QueryClientProvider>
  );
}

export default App;
