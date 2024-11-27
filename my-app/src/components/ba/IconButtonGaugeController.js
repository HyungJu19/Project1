import React, { useState } from "react";
import {
  Box,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  HStack,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

function IconButtonGaugeController() {
  const [value, setValue] = useState(50);

  const increase = () => setValue((prev) => Math.min(prev + 10, 100));
  const decrease = () => setValue((prev) => Math.max(prev - 10, 0));

  return (
    <Box p={6} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        현재 값: {value}
      </Text>
      <Slider
        aria-label="icon-button-slider"
        value={value}
        min={0}
        max={100}
        isReadOnly
        colorScheme="pink"
        mb={4}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <HStack justifyContent="center" spacing={6}>
        <IconButton
          colorScheme="red"
          aria-label="감소"
          icon={<MinusIcon />}
          onClick={decrease}
        />
        <IconButton
          colorScheme="green"
          aria-label="증가"
          icon={<AddIcon />}
          onClick={increase}
        />
      </HStack>
    </Box>
  );
}

export default IconButtonGaugeController;
