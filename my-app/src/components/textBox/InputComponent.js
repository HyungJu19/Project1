import React from "react";
import { Textarea, VStack, Box } from "@chakra-ui/react";

function InputComponent({ value, onChange }) {
  return (
    <VStack spacing={4} w="full">
      <Box fontSize="lg" fontWeight="bold">
        Input
      </Box>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type here..."
        size="lg"
        bg="white"
        border="1px solid gray"
        borderRadius="md"
        boxShadow="sm"
      />
    </VStack>
  );
}

export default InputComponent;
