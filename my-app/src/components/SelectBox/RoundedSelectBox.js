import { Select } from "@chakra-ui/react";

function RoundedSelectBox() {
  return (
    <Select
      placeholder="Select option"
      borderRadius="full"
      bg="gray.100"
      _hover={{ bg: "gray.200" }}
      _focus={{ borderColor: "cyan.400" }}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}

export default RoundedSelectBox;
