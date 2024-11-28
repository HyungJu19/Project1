import React from "react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import BannerPage from "./pages/BannerPage";
import ButtonPage from "./pages/ButtonPage";
import ToglePage from "./pages/ToglePage";
import TextBox from "./pages/TextBox";
import Ba from "./pages/Ba";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <HashRouter>
        <Header />
        <Box pt={4}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/banner" element={<BannerPage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/togle" element={<ToglePage />} />
            <Route path="/textbox" element={<TextBox />} />
            <Route path="/ba" element={<Ba />} />
          </Routes>
        </Box>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
