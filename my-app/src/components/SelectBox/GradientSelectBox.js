import { Select } from "@chakra-ui/react";

function GradientSelectBox() {
  return (
    <Select
      placeholder="Select option"
      bgGradient="linear(to-r, cyan.400, blue.400)"
      color="white"
      w="300px" 
      _hover={{ bgGradient: "linear(to-r, cyan.500, blue.500)" }}
      _focus={{
        borderColor: "cyan.600",
        boxShadow: "0 0 10px cyan",
        
      }}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}

export default GradientSelectBox;
