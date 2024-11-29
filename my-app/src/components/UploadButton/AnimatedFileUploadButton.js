/** @jsxImportSource @emotion/react */
import { Button, Input } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Glow 애니메이션 정의
const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.4); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
  100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.4); }
`;

// Zoom In and Out 애니메이션 정의
const zoomInOut = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
`;

// Stripe 애니메이션 정의
const stripeMove = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
`;

// Bounce 애니메이션 정의
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;


// Pulsating 애니메이션 정의
const pulsate = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// Color Shift 애니메이션 정의
const colorShift = keyframes`
  0% { background-color: cyan; }
  50% { background-color: blue; }
  100% { background-color: cyan; }
`;
// Spinning 애니메이션 정의
const spin = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;


// Wobble 애니메이션 정의
const wobble = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

// Fade In and Out 애니메이션 정의
const fadeInOut = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;



function AnimatedFileUploadButton() {
  return (

    <>
    <Button
      as="label"
      bg="cyan.400"
      color="white"
      cursor="pointer"
      border="none"
      borderRadius="md"
      _hover={{ bg: "cyan.500" }}
      css={{
        animation: `${glow} 2s infinite`, // 애니메이션 설정
        transition: "box-shadow 0.3s ease-in-out", // 애니메이션 전환
      }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>

    <Button
      as="label"
      bg="cyan.400"
      color="white"
      cursor="pointer"
      _hover={{ bg: "cyan.500" }}
      css={{
        animation: `${pulsate} 1.5s infinite`, // 애니메이션 적용
        transition: "transform 0.3s ease-in-out", // 부드러운 전환
      }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>


    <Button
      as="label"
      bg="cyan.400"
      color="white"
      cursor="pointer"
      _hover={{ bg: "cyan.500" }}
      css={{
        animation: `${spin} 2s infinite linear`, // 애니메이션 적용
      }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>


    <Button
      as="label"
      color="white"
      cursor="pointer"
      _hover={{ bg: "cyan.500" }}
      css={{
        animation: `${colorShift} 3s infinite`, // 애니메이션 적용
      }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>


    <Button
      as="label"
      bg="cyan.400"
      color="white"
      cursor="pointer"
      _hover={{ bg: "cyan.500" }}
      css={{
        animation: `${wobble} 1s infinite`,
      }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>


    <Button
      as="label"
      bg="cyan.400"
      color="white"
      cursor="pointer"
      _hover={{ bg: "cyan.500" }}
      css={{
        animation: `${fadeInOut} 2s infinite`,
      }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>

    <Button
      as="label"
      bg="cyan.400"
      color="white"
      cursor="pointer"
      _hover={{ bg: "cyan.500" }}
      css={{
        animation: `${bounce} 1.5s infinite`,
      }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>

    <Button
      as="label"
      bg="cyan.400"
      color="white"
      cursor="pointer"
      _hover={{ bg: "cyan.500" }}
      css={{
        animation: `${zoomInOut} 2s infinite`,
      }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>


    <Button
      as="label"
      bgGradient="linear(to-r, cyan.400, blue.400, purple.400)"
      bgSize="200% 100%"
      color="white"
      cursor="pointer"
      _hover={{ bgGradient: "linear(to-r, cyan.500, blue.500, purple.500)" }}
      css={{
        animation: `${stripeMove} 3s linear infinite`,
      }}
    >
      업로드
      <Input type="file" display="none" />
    </Button>
   </>

  );
}

export default AnimatedFileUploadButton;
