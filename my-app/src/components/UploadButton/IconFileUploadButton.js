import { Button, Input } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";

function IconFileUploadButton() {
  return (
    <Button as="label" leftIcon={<AttachmentIcon />} colorScheme="teal" cursor="pointer">
      파일 선택
      <Input type="file" display="none" />
    </Button>
  );
}

export default IconFileUploadButton;
