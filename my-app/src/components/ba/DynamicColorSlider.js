import React, { useState } from "react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Text } from "@chakra-ui/react";

function DynamicColorSlider() {
  const [value, setValue] = useState(50);

  const getColor = (val) => {
    if (val < 33) return "red.400";
    if (val < 66) return "yellow.400";
    return "green.400";
  };

  return (
    <Box p={6}>
      <Text fontSize="lg" mb={4}>
        현재 값: {value}
      </Text>
      <Slider
        aria-label="dynamic-color-slider"
        defaultValue={50}
        min={0}
        max={100}
        onChange={(val) => setValue(val)}
      >
        <SliderTrack bg="gray.200">
          <SliderFilledTrack bg={getColor(value)} />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color={getColor(value)} as="span">
            🔵
          </Box>
        </SliderThumb>
      </Slider>
    </Box>
  );
}

export default DynamicColorSlider;
