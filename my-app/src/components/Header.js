import React from 'react';
import { Box, Stack, Link } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="gray.100" p={4} boxShadow="sm">
      <Stack direction="row" spacing={6} justifyContent="center">
        <Link href="/banner" fontWeight="bold">
          배너
        </Link>
        <Link href="/button" fontWeight="bold">
          버튼
        </Link>
        <Link href="/togle" fontWeight="bold">
          토글
        </Link>
        <Link href="/textbox" fontWeight="bold">
          텍스트상자
        </Link>
        <Link href="/ba" fontWeight="bold">
          바
        </Link>
        <Link href="#" fontWeight="bold">
          초대장
        </Link>
      </Stack>
    </Box>
  );
}

export default Header;
