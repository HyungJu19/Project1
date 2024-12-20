import React from "react";
import { ChakraProvider, extendTheme, Box, Flex } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import BannerPage from "./pages/BannerPage";
import ButtonPage from "./pages/ButtonPage";
import ToglePage from "./pages/ToglePage";
import TextBox from "./pages/TextBox";
import Ba from "./pages/Ba";
import LoadButton from "./pages/LoadButton";
import SelectBoxPage from "./pages/SelectBoxPage";
import InputViewPage from "./pages/InputViewPage";
import InputViewPage1 from "./pages/InputViewPage1";
import InputViewPage100 from "./pages/InputViewPage100";
import ViewAndInput1 from "./components/view/ViewAndInput1";


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
  
        <Flex 
          pt={4}
          paddingTop="0px"
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
            <Route path="/inputViewPage" element={<InputViewPage />} />
            <Route path="/inputViewPage1" element={<InputViewPage1 />} />
            <Route path="/input" element={<ViewAndInput1 />} />
            <Route path="/inputViewPage100/:id" element={<InputViewPage100 />} />
          </Routes>
        </Flex>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
