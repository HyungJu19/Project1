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
  Card,
  CardBody,
  useColorMode,
} from "@chakra-ui/react";

function CardGaugeController() {
  const [value, setValue] = useState(50);
  const { colorMode } = useColorMode(); // 다크/라이트 모드 상태 가져오기

  const increase = () => setValue((prev) => Math.min(prev + 10, 100));
  const decrease = () => setValue((prev) => Math.max(prev - 10, 0));

  return (
    <Box p={6}>
      <Card
        borderRadius="lg"
        boxShadow="md"
        p={6}
        bg={colorMode === "light" ? "gray.100" : "gray.700"} // 다크 모드 배경
      >
        <CardBody textAlign="center">
          <Text
            fontSize="xl"
            fontWeight="bold"
            mb={4}
            color={colorMode === "light" ? "black" : "white"} // 다크 모드 텍스트
          >
            현재 값: {value}
          </Text>
          <Slider
            aria-label="card-slider"
            value={value}
            min={0}
            max={100}
            isReadOnly
            colorScheme="purple"
            mb={6}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Stack direction="row" spacing={4} justifyContent="center">
            <Button
              colorScheme="red"
              onClick={decrease}
              isDisabled={value === 0} // 최소값에서 비활성화
            >
              감소
            </Button>
            <Button
              colorScheme="green"
              onClick={increase}
              isDisabled={value === 100} // 최대값에서 비활성화
            >
              증가
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default CardGaugeController;
