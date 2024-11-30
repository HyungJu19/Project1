import React, { useState } from "react";
import { Flex, Box, VStack, Heading, Divider, Switch, FormControl, FormLabel, Button } from "@chakra-ui/react";
import InputComponent from "../textBox/InputComponent";
import AnimatedSelectBox10 from "../SelectBox/AnimatedSelectBox10"; // 드롭다운 컴포넌트

function ViewAndInput() {
  const [text, setText] = useState(""); // 입력 텍스트 상태 관리
  const [selectedOption, setSelectedOption] = useState(""); // 드롭다운 상태 관리
  const [isSelectBoxEnabled, setIsSelectBoxEnabled] = useState(false); // 셀렉트박스 사용 여부 상태 관리

  const handleSubmit = () => {
    // 사용 중인 값만 제출
    const formData = {
      text: text || null, // 텍스트박스 값
      selectedOption: isSelectBoxEnabled ? selectedOption : null, // 셀렉트박스 값
    };

    console.log("Submitted Data:", formData);
    alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <Flex height="100vh" bg="gray.200">
      {/* 왼쪽 View 영역 */}
      <Box
        flex="1"
        bg="white"
        p={6}
        borderRight="1px solid"
        borderColor="gray.300"
        boxShadow="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading size="lg" color="teal.500" mb={6}>
          Live View
        </Heading>
        <Box
          bg="gray.50"
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          textAlign="center"
          w="80%"
          minHeight="200px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          color="gray.600"
        >
          <Box>
            <strong>Text:</strong> {text || "Type something to see it here..."}
          </Box>
          {isSelectBoxEnabled && (
            <Box mt={4}>
              <strong>Selected:</strong> {selectedOption || "Default Option"}
            </Box>
          )}
          <Box mt={4}>
            <strong>Select Box:</strong> {isSelectBoxEnabled ? "Enabled" : "Disabled"}
          </Box>
        </Box>
      </Box>

      {/* 오른쪽 Input Component */}
      <Box
        flex="1"
        p={6}
        bg="gray.100"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} w="full" maxW="400px">
          <Heading size="lg" color="teal.500">
            Input Area
          </Heading>
          <InputComponent value={text} onChange={setText} />
          <Divider />

          {/* 토글 버튼 */}
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="select-toggle" mb="0">
              Enable Select Box
            </FormLabel>
            <Switch
              id="select-toggle"
              isChecked={isSelectBoxEnabled}
              onChange={() => {
                setIsSelectBoxEnabled(!isSelectBoxEnabled);
                if (!isSelectBoxEnabled) {
                  // 디폴트값 설정
                  setSelectedOption("Option 1");
                } else {
                  // 비활성화 시 값 초기화
                  setSelectedOption("");
                }
              }}
              colorScheme="teal"
            />
          </FormControl>

          {/* 셀렉트박스 */}
          {isSelectBoxEnabled && (
            <AnimatedSelectBox10
              value={selectedOption}
              onChange={setSelectedOption}
            />
          )}

          <Divider />

          {/* 만들기 버튼 */}
          <Button
            colorScheme="teal"
            size="lg"
            onClick={handleSubmit}
            isDisabled={!text && !isSelectBoxEnabled} // 값이 없으면 비활성화
          >
            만들기
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}

export default ViewAndInput;
