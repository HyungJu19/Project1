import { Select } from "@chakra-ui/react";

function OutlinedSelectBox() {
  return (
    <Select
      placeholder="Select option"
      variant="outline"
      border="2px solid"
      borderColor="cyan.400"
      _hover={{ borderColor: "cyan.600" }}
      _focus={{ borderColor: "cyan.700", boxShadow: "0 0 5px cyan" }}
      w="300px" 
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}

export default OutlinedSelectBox;
