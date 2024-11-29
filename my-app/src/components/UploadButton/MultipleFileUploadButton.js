import { Button, Input } from "@chakra-ui/react";

function MultipleFileUploadButton() {
  return (
    <Button as="label" colorScheme="purple" cursor="pointer">
      다중 파일 선택
      <Input type="file" display="none" multiple />
    </Button>
  );
}

export default MultipleFileUploadButton;
