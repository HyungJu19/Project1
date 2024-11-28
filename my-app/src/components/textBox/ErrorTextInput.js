import React, { useState } from "react";
import { Box, Input, Text, FormControl, FormErrorMessage } from "@chakra-ui/react";

function ErrorTextInput() {
  const [input, setInput] = useState("");
  const isError = input === ""; // 에러 조건

  return (
    <Box p={6}>
      <FormControl isInvalid={isError}>
        <Text fontSize="lg" mb={2}>
          에러 상태 텍스트 상자:
        </Text>
        <Input
          placeholder="이 필드는 필수입니다"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {isError && <FormErrorMessage>입력 값이 비어 있습니다!</FormErrorMessage>}
      </FormControl>
    </Box>
  );
}

export default ErrorTextInput;
