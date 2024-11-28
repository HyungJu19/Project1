import React, { useState } from "react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Text } from "@chakra-ui/react";

function CircularSlider() {
  const [value, setValue] = useState(50);

  return (
    <Box p={6} textAlign="center">
      <Text fontSize="lg" mb={4}>
        선택한 값: {value}
      </Text>
      <Slider
        aria-label="circular-slider"
        defaultValue={50}
        min={0}
        max={100}
        onChange={(val) => setValue(val)}
      >
        <SliderTrack bg="linear-gradient(90deg, teal, blue)">
          <SliderFilledTrack bg="linear-gradient(90deg, pink, yellow)" />
        </SliderTrack>
        <SliderThumb boxSize={6} bg="tomato" border="2px solid white">
          <Box boxSize={3} bg="white" borderRadius="50%" />
        </SliderThumb>
      </Slider>
    </Box>
  );
}

export default CircularSlider;
