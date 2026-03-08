import { ColorModeProvider } from "./components/ui/color-mode";
import {
  ChakraProvider,
  defaultSystem,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import NavBar from "./components/app/NavBar";
// import MainPage from "./components/views/main/MainPage";
import MainPage from "./components/views/main/MainPage";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            // lg: `"nav nav" "aside main"`,
          }}
          dir="rtl"
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <GridItem area="main">
            <MainPage />
          </GridItem>
        </Grid>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
