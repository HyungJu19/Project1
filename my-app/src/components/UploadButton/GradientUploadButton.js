import { Button, Input } from "@chakra-ui/react";

function GradientUploadButton() {
  return (
    <Button
      as="label"
      bgGradient="linear(to-r, pink.400, purple.400)"
      color="white"
      cursor="pointer"
      _hover={{ bgGradient: "linear(to-r, pink.500, purple.500)" }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>
  );
}

export default GradientUploadButton;
