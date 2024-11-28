import React from "react";
import { Box, Textarea, Text } from "@chakra-ui/react";

function MultiLineInput() {
  return (
    <Box p={6}>
      <Text fontSize="lg" mb={2}>
        다중 줄 텍스트 상자:
      </Text>
      <Textarea placeholder="여기에 여러 줄을 입력하세요" size="md" />
    </Box>
  );
}

export default MultiLineInput;
