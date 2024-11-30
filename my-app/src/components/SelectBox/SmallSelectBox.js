import { Select } from "@chakra-ui/react";

function SmallSelectBox() {
  return (
    <Select
      placeholder="Select option"
      size="sm"
      borderRadius="md"
      borderColor="gray.300"
      _hover={{ borderColor: "cyan.400" }}
      _focus={{ borderColor: "cyan.500", boxShadow: "0 0 5px cyan" }}
      w="300px" // 가로 크기 설정
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}

export default SmallSelectBox;
