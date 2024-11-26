import { Progress } from '@chakra-ui/react';

function BasicGaugeBar() {
  return (
    <Progress value={60} size="lg" colorScheme="teal" />
  );
}
export default BasicGaugeBar;