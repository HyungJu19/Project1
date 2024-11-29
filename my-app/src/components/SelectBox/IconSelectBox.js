import { Select } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

function IconSelectBox() {
  return (
    <Select
      placeholder="Select option"
      icon={<FaChevronDown />}
      bg="white"
      borderColor="gray.300"
      _hover={{ borderColor: "cyan.500" }}
      _focus={{ borderColor: "cyan.500", boxShadow: "0 0 5px cyan" }}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}

export default IconSelectBox;
