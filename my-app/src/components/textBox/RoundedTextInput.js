import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function RoundedTextInput() {
  return (
    <Box p={6}>
      <Text fontSize="lg" mb={2}>
        둥근 모서리 텍스트 상자:
      </Text>
      <Input placeholder="여기에 입력하세요" size="md" borderRadius="full" />
    </Box>
  );
}

export default RoundedTextInput;
