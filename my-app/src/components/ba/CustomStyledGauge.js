import { Progress, Box } from '@chakra-ui/react';

function CustomStyledGauge() {
  return (
    <Box width="100%" padding="4" w="300px" >
      <Progress
        value={50}
        size="lg"
        colorScheme="teal"
        borderRadius="full" // 둥근 모서리
        height="20px"        // 높이 설정
        trackColor="gray.100" // 배경 색상
        hasStripe
        isAnimated
      />
    </Box>
  );
}

export default CustomStyledGauge;
