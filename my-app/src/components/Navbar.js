import React from 'react';
import { Flex, Box, Link, Button, Stack } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex
      bg="teal.500"
      color="white"
      p={4}
      justifyContent="center"
      alignItems="center"
      w="100%" // 부모 Flex의 가로 100% 설정
    >
      <Box fontWeight="bold" fontSize="lg" 
        w="100%" // 가로 100% 적용
        textAlign="center" // 텍스트 가운데 정렬
      >
        
                    Ang_P
      </Box>
     
    </Flex>
  );
}

export default Navbar;
