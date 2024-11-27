import React from "react";
import { Box, Stack, Link, Button, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "gray.100" : "gray.800"}
      color={colorMode === "light" ? "black" : "white"}
      p={4}
      boxShadow="sm"
    >
      <Stack direction="row" spacing={6} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={6}>
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
        </Stack>

        {/* 다크 모드 전환 버튼 */}
        <Button onClick={toggleColorMode} size="sm">
          {colorMode === "light" ? "다크 모드" : "라이트 모드"}
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;
