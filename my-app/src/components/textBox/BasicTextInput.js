import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function BasicTextInput() {
  return (
    <Box p={6}>
      <Text fontSize="lg" mb={2}>
        기본 텍스트 상자:
      </Text>
      <Input placeholder="여기에 입력하세요" size="md" />
    </Box>
  );
}

export default BasicTextInput;
