import React from "react";
import { Box, Input, Text, useColorMode } from "@chakra-ui/react";

function ThemedTextInput() {
  const { colorMode } = useColorMode();

  return (
    <Box p={6}>
      <Text fontSize="lg" mb={2} color={colorMode === "light" ? "gray.800" : "gray.200"}>
        다크/라이트 모드 텍스트 상자:
      </Text>
      <Input
        placeholder="여기에 입력하세요"
        size="md"
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
        color={colorMode === "light" ? "black" : "white"}
        borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
        _placeholder={{ color: colorMode === "light" ? "gray.500" : "gray.400" }}
      />
    </Box>
  );
}

export default ThemedTextInput;
