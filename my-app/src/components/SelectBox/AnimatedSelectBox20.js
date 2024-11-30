import React, { useState } from "react";
import { Box, VStack, Collapse, Button, Text } from "@chakra-ui/react";

function PushDownSelectBox20() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Option");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };

  return (
    <VStack align="stretch" spacing={4} p={4}>
      {/* 셀렉트 박스 */}
      <Box>
        <Button
          w="full"
          onClick={toggleDropdown}
          bg="gray.100"
          _hover={{ bg: "gray.200" }}
          _focus={{ boxShadow: "0 0 5px cyan" }}
        >
          {selectedOption}
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            mt={2}
            border="1px solid gray"
            borderRadius="md"
            p={4}
            bg="white"
            boxShadow="md"
          >
            <Box
              as="div"
              p={2}
              _hover={{ bg: "gray.100" }}
              onClick={() => handleOptionClick("Option 1")}
              cursor="pointer"
            >
              Option 1
            </Box>
            <Box
              as="div"
              p={2}
              _hover={{ bg: "gray.100" }}
              onClick={() => handleOptionClick("Option 2")}
              cursor="pointer"
            >
              Option 2
            </Box>
            <Box
              as="div"
              p={2}
              _hover={{ bg: "gray.100" }}
              onClick={() => handleOptionClick("Option 3")}
              cursor="pointer"
            >
              Option 3
            </Box>
          </Box>
        </Collapse>
      </Box>

    
    </VStack>
  );
}

export default PushDownSelectBox20;
