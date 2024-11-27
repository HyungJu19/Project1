import React from 'react';
import { Box, Stack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <Box bg="gray.100" p={4} boxShadow="sm">
      <Stack direction="row" spacing={6} justifyContent="center">
        
        <Link as={RouterLink} to="/" fontWeight="bold">
          홈
        </Link>
        <Link as={RouterLink} to="/banner" fontWeight="bold">
          배너
        </Link>
        <Link as={RouterLink} to="/button" fontWeight="bold">
          버튼
        </Link>
        <Link as={RouterLink} to="/togle" fontWeight="bold">
          토글
        </Link>
        <Link as={RouterLink} to="/textbox" fontWeight="bold">
          텍스트상자
        </Link>
        <Link as={RouterLink} to="/ba" fontWeight="bold">
          바
        </Link>
        <Link as={RouterLink} to="/" fontWeight="bold">
          초대장
        </Link>
      </Stack>
    </Box>
  );
}

export default Header;
