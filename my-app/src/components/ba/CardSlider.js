import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Text,
  Stack,
  Card,
  CardBody,
  useColorMode,
} from "@chakra-ui/react";

function CardSlider() {
  const [value, setValue] = useState(30);
  const { colorMode } = useColorMode(); // 다크/라이트 모드 상태 가져오기

  return (
    <Box p={6}>
      <Card
        borderRadius="lg"
        boxShadow="md"
        p={6}
        bg={colorMode === "light" ? "gray.50" : "gray.700"} // 다크 모드 배경
      >
        <CardBody>
          <Text
            fontSize="xl"
            fontWeight="bold"
            mb={4}
            color={colorMode === "light" ? "black" : "white"} // 다크 모드 텍스트 색상
          >
            값 조정
          </Text>
          <Stack spacing={4}>
            <Text color={colorMode === "light" ? "black" : "white"}>현재 값: {value}</Text>
            <Slider
              aria-label="card-slider"
              defaultValue={30}
              min={0}
              max={100}
              onChange={(val) => setValue(val)}
              colorScheme="purple"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default CardSlider;
