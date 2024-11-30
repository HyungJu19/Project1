import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function ChakraTextBox() {
  return (
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input
        placeholder="Enter your name"
        borderColor="gray.300"
        focusBorderColor="cyan.500"
        borderRadius="md"
      />
      <Button mt={4} colorScheme="blue">
        Submit
      </Button>
    </FormControl>
  );
}

export default ChakraTextBox;
