import React from "react";
import { Box, InputGroup, Input, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import { EmailIcon, CheckIcon } from "@chakra-ui/icons";

function IconTextInput() {
  return (
    <Box p={6}>
      <Text fontSize="lg" mb={2}>
        아이콘과 함께하는 텍스트 상자:
      </Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input placeholder="이메일 입력" />
        <InputRightElement>
          <CheckIcon color="green.500" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default IconTextInput;
