import { Button, Input } from "@chakra-ui/react";

function RoundedFileUploadButton() {
  return (
    <Button as="label" borderRadius="full" colorScheme="pink" cursor="pointer">
      첨부
      <Input type="file" display="none" />
    </Button>
  );
}

export default RoundedFileUploadButton;
