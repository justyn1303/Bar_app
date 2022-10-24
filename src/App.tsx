import "./App.css";
import { RecipesProvider } from "./contexts/Recipes/Recipes.provider";
import RootNavigation from "./navigation/RootNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { AuthProvider } from "./contexts/Authentication/Auth.provider";

const queryClient = new QueryClient();

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <RecipesProvider>
          <AuthProvider>
            <RootNavigation />
          </AuthProvider>
        </RecipesProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </I18nextProvider>
  );
}

export default App;
