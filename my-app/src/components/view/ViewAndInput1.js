import React, { useState } from "react";
import {
  Flex,
  Box,
  VStack,
  Heading,
  Divider,
  Button,
  Switch,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ViewAndInput1() {
  const [liveComponents, setLiveComponents] = useState({
    mainImage: { active: false, value: null },
    greeting: { active: false, value: "" },
    message: { active: false, value: "" },
  });

  const toast = useToast();
  const navigate = useNavigate();

  // 랜덤 ID 생성 함수
  const generateRandomId = (length = 20) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  };

  // 저장 버튼 핸들러
  const handleSave = () => {
    const uniqueId = generateRandomId();

    // 데이터를 localStorage에 저장
    localStorage.setItem(uniqueId, JSON.stringify(liveComponents));

    const newUrl = `https://hyungju19.github.io/Project1/#/inputViewPage100/${uniqueId}`;
    navigate(`/inputViewPage100/${uniqueId}`);

    toast({
      title: "Components saved!",
      description: (
        <>
          URL created:{" "}
          <Button
            variant="link"
            colorScheme="teal"
            onClick={() => {
              navigator.clipboard.writeText(newUrl);
              toast({
                title: "URL copied!",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
            }}
          >
            Copy URL
          </Button>
        </>
      ),
      status: "success",
      duration: 5000,
      isClosable: true,
    });
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
                  <strong>메인사진</strong>
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
                  <strong>인삿말</strong> 
                 <p>
                  {liveComponents.greeting.value}
                  </p>
                </Box>
              )}
              {liveComponents.message.active && (
                <Box mb={4}>
                  <strong>전하고싶은말</strong> 
                  <p>
                  {liveComponents.message.value}
                  </p>
                </Box>
              )}
            </>
          ) : (
            "No components selected. Enable components to see them here."
          )}
        </Box>
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
       
          {/* 메인 사진 */}
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="main-image-toggle" mb="0">
            메인 사진
            </FormLabel>
            <Switch
              id="main-image-toggle"
              isChecked={liveComponents.mainImage.active}
              onChange={() =>
                setLiveComponents((prev) => ({
                  ...prev,
                  mainImage: { ...prev.mainImage, active: !prev.mainImage.active },
                }))
              }
              colorScheme="teal"
            />
          </FormControl>
          {liveComponents.mainImage.active && (
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setLiveComponents((prev) => ({
                  ...prev,
                  mainImage: {
                    ...prev.mainImage,
                    value: URL.createObjectURL(e.target.files[0]),
                  },
                }))
              }
            />
          )}

          {/* 인삿말 */}
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="greeting-toggle" mb="0">
            인삿말
            </FormLabel>
      
            <Switch
              id="greeting-toggle"
              isChecked={liveComponents.greeting.active}
              onChange={() =>
                setLiveComponents((prev) => ({
                  ...prev,
                  greeting: { ...prev.greeting, active: !prev.greeting.active },
                }))
              }
              colorScheme="teal"
            />
          </FormControl>
          {liveComponents.greeting.active && (
            <Input
              placeholder="Enter your greeting..."
              value={liveComponents.greeting.value}
              onChange={(e) =>
                setLiveComponents((prev) => ({
                  ...prev,
                  greeting: { ...prev.greeting, value: e.target.value },
                }))
              }
            />
          )}

          {/* 전하고 싶은 말 */}
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="message-toggle" mb="0">
            전하고 싶은 말
            </FormLabel>
            <Switch
              id="message-toggle"
              isChecked={liveComponents.message.active}
              onChange={() =>
                setLiveComponents((prev) => ({
                  ...prev,
                  message: { ...prev.message, active: !prev.message.active },
                }))
              }
              colorScheme="teal"
            />
          </FormControl>
          {liveComponents.message.active && (
            <Input
              placeholder="Enter your message..."
              value={liveComponents.message.value}
              onChange={(e) =>
                setLiveComponents((prev) => ({
                  ...prev,
                  message: { ...prev.message, value: e.target.value },
                }))
              }
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
            Save & Generate URL
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}

export default ViewAndInput1;
