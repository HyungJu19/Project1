import React from 'react';
import { Box, Stack, Link } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="gray.100" p={4} boxShadow="sm">
      <Stack direction="row" spacing={6} justifyContent="center">
        <Link href="/" fontWeight="bold">
          Home
        </Link>
        <Link href="/about" fontWeight="bold">
          About
        </Link>
        <Link href="#" fontWeight="bold">
          청첩장
        </Link>
        <Link href="#" fontWeight="bold">
          감사장
        </Link>
        <Link href="#" fontWeight="bold">
          돌잔치
        </Link>
        <Link href="#" fontWeight="bold">
          초대장
        </Link>
      </Stack>
    </Box>
  );
}

export default Header;
