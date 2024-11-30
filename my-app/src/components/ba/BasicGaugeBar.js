import { Progress } from '@chakra-ui/react';

function BasicGaugeBar() {
  return (
    <Progress value={60} size="lg" colorScheme="teal" w="300px" />
  );
}
export default BasicGaugeBar;