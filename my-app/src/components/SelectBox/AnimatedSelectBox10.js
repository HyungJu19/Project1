import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function AnimatedSelectBox10({ value, onChange }) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="gray.100"
        _hover={{ bg: "gray.200" }}
        _focus={{ boxShadow: "0 0 5px cyan" }}
      >
        {value || "Select option"} {/* 선택된 값 표시 */}
      </MenuButton>
      <MenuList
        bg="white"
        border="1px solid gray"
        borderRadius="md"
        boxShadow="md"
        mt={2} // 위 버튼과 약간의 간격
        animation="slideIn 0.3s ease-out"
        sx={{
          "@keyframes slideIn": {
            "0%": { transform: "translateY(-20px)", opacity: 0 },
            "100%": { transform: "translateY(0)", opacity: 1 },
          },
        }}
      >
        {/* 각 MenuItem에 onClick 이벤트 추가 */}
        <MenuItem onClick={() => onChange("Option 1")}>Option 1</MenuItem>
        <MenuItem onClick={() => onChange("Option 2")}>Option 2</MenuItem>
        <MenuItem onClick={() => onChange("Option 3")}>Option 3</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AnimatedSelectBox10;
