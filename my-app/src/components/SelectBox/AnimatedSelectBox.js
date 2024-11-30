import { Select } from "@chakra-ui/react";

function AnimatedSelectBox() {
  return (
    <Select
      placeholder="Select option"
      bg="gray.100"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
      _focus={{ transform: "scale(1.1)", borderColor: "cyan.400" }}
      w="300px" 
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}

export default AnimatedSelectBox;
