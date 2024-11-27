import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function LimitedTextInput() {
  const [input, setInput] = useState("");
  const maxLength = 20;

  return (
    <Box p={6}>
      <Text fontSize="lg" mb={2}>
        입력 제한 텍스트 상자:
      </Text>
      <Input
        placeholder={`최대 ${maxLength}자 입력 가능`}
        value={input}
        onChange={(e) => setInput(e.target.value.slice(0, maxLength))}
      />
      <Text fontSize="sm" color="gray.500" mt={1}>
        {input.length}/{maxLength}
      </Text>
    </Box>
  );
}

export default LimitedTextInput;
