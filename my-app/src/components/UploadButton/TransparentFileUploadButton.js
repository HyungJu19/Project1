import { Button, Input } from "@chakra-ui/react";

function TransparentFileUploadButton() {
  return (
    <Button as="label" bg="transparent" border="2px solid" borderColor="gray.400" color="gray.600" cursor="pointer" _hover={{ bg: "gray.100" }}>
      파일 업로드
      <Input type="file" display="none" />
    </Button>
  );
}

export default TransparentFileUploadButton;
