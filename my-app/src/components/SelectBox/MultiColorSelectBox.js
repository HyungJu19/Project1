import { Select } from "@chakra-ui/react";

function MultiColorSelectBox() {
  return (
    <Select
      placeholder="Select option"
      borderWidth="2px"
      borderColor="purple.400"
      bg="blue.50"
      color="blue.900"
      _hover={{ borderColor: "blue.400", bg: "blue.100" }}
      _focus={{ borderColor: "purple.600", boxShadow: "0 0 5px purple" }}
    >
      <option value="option1" style={{ color: "red" }}>
        Red Option
      </option>
      <option value="option2" style={{ color: "green" }}>
        Green Option
      </option>
      <option value="option3" style={{ color: "blue" }}>
        Blue Option
      </option>
    </Select>
  );
}

export default MultiColorSelectBox;
