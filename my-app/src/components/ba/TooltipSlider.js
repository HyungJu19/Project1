import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Box,
  Text,
} from "@chakra-ui/react";

function TooltipSlider() {
  const [value, setValue] = useState(50);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Box p={6}>
      <Text fontSize="lg" mb={4}>
        값: {value}
      </Text>
      <Slider
        aria-label="tooltip-slider"
        defaultValue={50}
        min={0}
        max={100}
        onChange={(val) => setValue(val)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        colorScheme="cyan"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb>
          <Tooltip
            hasArrow
            label={`${value}`}
            bg="blue.500"
            color="white"
            placement="top"
            isOpen={showTooltip}
          />
        </SliderThumb>
      </Slider>
    </Box>
  );
}

export default TooltipSlider;
