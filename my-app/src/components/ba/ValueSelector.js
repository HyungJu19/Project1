import React, { useState } from "react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Text } from "@chakra-ui/react";

function ValueSelector() { // 함수 이름을 의미에 맞게 변경
  const [value, setValue] = useState(50); // 기본값은 50으로 설정

  return (
    <Box p={6}>
      <Text fontSize="lg" mb={4}>
        선택한 값: {value}
      </Text>
      <Slider
        aria-label="slider-value-selector"
        defaultValue={50}
        min={0}
        max={100}
        onChange={(val) => setValue(val)} // 값 변경 시 업데이트
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}

export default ValueSelector;
