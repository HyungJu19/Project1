import { Box, Button, Input, HStack } from "@chakra-ui/react";

function TextAndFileUploadButton() {
  return (
    <HStack spacing={4}>
      <Input placeholder="파일 이름 입력" />
      <Button as="label" colorScheme="teal" cursor="pointer">
        첨부
        <Input type="file" display="none" />
      </Button>
    </HStack>
  );
}

export default TextAndFileUploadButton;
