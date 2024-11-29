import { Button, Input } from "@chakra-ui/react";

function BasicFileUploadButton() {
  return (
    <Button as="label" colorScheme="blue" cursor="pointer">
      첨부파일
      <Input type="file" display="none" />
    </Button>
  );
}

export default BasicFileUploadButton;
