import React from "react";
import { ChakraProvider, extendTheme, Box, Flex } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import BannerPage from "./pages/BannerPage";
import ButtonPage from "./pages/ButtonPage";
import ToglePage from "./pages/ToglePage";
import TextBox from "./pages/TextBox";
import Ba from "./pages/Ba";
import LoadButton from "./pages/LoadButton";
import SelectBoxPage from "./pages/SelectBoxPage";

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
        <Flex 
          pt={4}
          minHeight="100vh" 
          justifyContent="center" 
          alignItems="center"
          flexDirection="column"
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/banner" element={<BannerPage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/togle" element={<ToglePage />} />
            <Route path="/textbox" element={<TextBox />} />
            <Route path="/ba" element={<Ba />} />
            <Route path="/loadButton" element={<LoadButton />} />
            <Route path="/selectBoxPage" element={<SelectBoxPage />} />
          </Routes>
        </Flex>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
