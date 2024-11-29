import { Box, Input, Icon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function CardStyleUploadButton() {
  return (
    <Box
      as="label"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border="2px dashed"
      borderColor="gray.400"
      borderRadius="md"
      p={4}
      cursor="pointer"
      _hover={{ borderColor: "blue.400", bg: "blue.50" }}
      h="150px"
      w="200px"
    >
      <Icon as={AddIcon} boxSize={6} color="gray.500" />
      <Box mt={2} color="gray.500" fontSize="sm">
        파일 첨부
      </Box>
      <Input type="file" display="none" />
    </Box>
  );
}

export default CardStyleUploadButton;
