import React, { useState } from "react";
import { Flex, Box, VStack, Heading, Divider, Button, Switch, FormControl, FormLabel, Input } from "@chakra-ui/react";

function ViewAndInput1() {
  // 상태 관리
  const [liveComponents, setLiveComponents] = useState({
    mainImage: { active: false, value: null },
    greeting: { active: false, value: "" },
    message: { active: false, value: "" },
  });

  const [savedComponents, setSavedComponents] = useState(null); // 저장된 데이터

  // 저장 버튼 핸들러
  const handleSave = () => {
    setSavedComponents({ ...liveComponents });
    alert("Components saved successfully!");
  };

  // 수정 버튼 핸들러
  const handleEdit = () => {
    setSavedComponents(null);
  };

  // 컴포넌트 상태 업데이트
  const updateComponent = (key, value) => {
    setLiveComponents((prev) => ({
      ...prev,
      [key]: { ...prev[key], value },
    }));
  };

  // 토글 상태 업데이트
  const toggleComponent = (key) => {
    setLiveComponents((prev) => ({
      ...prev,
      [key]: { ...prev[key], active: !prev[key].active },
    }));
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
          {Object.entries(liveComponents).some(([_, comp]) => comp.active) ? (
            <>
              {liveComponents.mainImage.active && (
                <Box mb={4}>
                  <strong>Main Image:</strong>
                  <Box mt={2}>
                    {liveComponents.mainImage.value ? (
                      <img
                        src={liveComponents.mainImage.value}
                        alt="Main"
                        style={{ maxWidth: "100%", maxHeight: "150px" }}
                      />
                    ) : (
                      "No image uploaded"
                    )}
                  </Box>
                </Box>
              )}
              {liveComponents.greeting.active && (
                <Box mb={4}>
                  <strong>Greeting:</strong> {liveComponents.greeting.value}
                </Box>
              )}
              {liveComponents.message.active && (
                <Box mb={4}>
                  <strong>Message:</strong> {liveComponents.message.value}
                </Box>
              )}
            </>
          ) : (
            "No components selected. Enable components to see them here."
          )}
        </Box>
        {savedComponents && (
          <Button colorScheme="teal" mt={4} onClick={handleEdit}>
            Edit
          </Button>
        )}
      </Box>

      {/* 오른쪽 Input 영역 */}
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

          {/* 메인 사진 */}
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="main-image-toggle" mb="0">
              Main Image
            </FormLabel>
            <Switch
              id="main-image-toggle"
              isChecked={liveComponents.mainImage.active}
              onChange={() => toggleComponent("mainImage")}
              colorScheme="teal"
            />
          </FormControl>
          {liveComponents.mainImage.active && (
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                updateComponent("mainImage", URL.createObjectURL(e.target.files[0]))
              }
            />
          )}

          {/* 인삿말 */}
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="greeting-toggle" mb="0">
              Greeting
            </FormLabel>
            <Switch
              id="greeting-toggle"
              isChecked={liveComponents.greeting.active}
              onChange={() => toggleComponent("greeting")}
              colorScheme="teal"
            />
          </FormControl>
          {liveComponents.greeting.active && (
            <Input
              placeholder="Enter your greeting..."
              value={liveComponents.greeting.value}
              onChange={(e) => updateComponent("greeting", e.target.value)}
            />
          )}

          {/* 전하고 싶은 말 */}
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="message-toggle" mb="0">
              Message
            </FormLabel>
            <Switch
              id="message-toggle"
              isChecked={liveComponents.message.active}
              onChange={() => toggleComponent("message")}
              colorScheme="teal"
            />
          </FormControl>
          {liveComponents.message.active && (
            <Input
              placeholder="Enter your message..."
              value={liveComponents.message.value}
              onChange={(e) => updateComponent("message", e.target.value)}
            />
          )}

          <Divider />

          {/* 저장 버튼 */}
          <Button
            colorScheme="teal"
            size="lg"
            onClick={handleSave}
            isDisabled={
              !liveComponents.mainImage.active &&
              !liveComponents.greeting.active &&
              !liveComponents.message.active
            }
          >
            Save
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}

export default ViewAndInput1;
