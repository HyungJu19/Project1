import React, { useState } from "react";
import {
  Box,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

function CircularGaugeController() {
  const [value, setValue] = useState(50);
  const { colorMode } = useColorMode(); // 다크/라이트 모드 상태 가져오기

  const increase = () => setValue((prev) => Math.min(prev + 10, 100));
  const decrease = () => setValue((prev) => Math.max(prev - 10, 0));

  return (
    <Box
      p={6}
      textAlign="center"
      borderRadius="md"
      boxShadow="md"
      bg={colorMode === "light" ? "gray.50" : "gray.700"} // 다크 모드 배경
      color={colorMode === "light" ? "black" : "white"} // 다크 모드 텍스트
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        현재 값: {value}
      </Text>
      <Slider
        aria-label="circular-slider"
        value={value}
        min={0}
        max={100}
        isReadOnly
        colorScheme="blue"
        mb={6}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color="blue.500" as="span">
            🔵
          </Box>
        </SliderThumb>
      </Slider>
      <Stack direction="row" spacing={6} justifyContent="center">
        <Button
          colorScheme="pink"
          size="lg"
          borderRadius="full"
          onClick={decrease}
          isDisabled={value === 0} // 최소값에서 비활성화
        >
          ➖ 감소
        </Button>
        <Button
          colorScheme="cyan"
          size="lg"
          borderRadius="full"
          onClick={increase}
          isDisabled={value === 100} // 최대값에서 비활성화
        >
          ➕ 증가
        </Button>
      </Stack>
    </Box>
  );
}

export default CircularGaugeController;
