import React from "react";
import { Box, Input, Text, useColorMode } from "@chakra-ui/react";

function HighlightedTextInput() {
  const { colorMode } = useColorMode();

  return (
    <Box p={6}>
      <Text fontSize="lg" mb={2} color={colorMode === "light" ? "black" : "white"}>
        강조된 텍스트 상자:
      </Text>
      <Input
        placeholder="중요한 입력"
        size="lg"
        bg={colorMode === "light" ? "yellow.100" : "yellow.700"}
        _placeholder={{ color: colorMode === "light" ? "gray.500" : "gray.300" }}
      />
    </Box>
  );
}

export default HighlightedTextInput;
