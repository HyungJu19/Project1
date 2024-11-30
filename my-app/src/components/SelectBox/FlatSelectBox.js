import { Select } from "@chakra-ui/react";

function FlatSelectBox() {
  return (
    <Select
      placeholder="Select option"
      variant="filled"
      bg="cyan.50"
      _hover={{ bg: "cyan.100" }}
      _focus={{ bg: "cyan.200", borderColor: "cyan.400" }}
      w="300px" 
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}

export default FlatSelectBox;
