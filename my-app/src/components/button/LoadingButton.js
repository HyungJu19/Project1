import { Button } from '@chakra-ui/react';

function LoadingButton() {
  return (
    <Button isLoading loadingText="Submitting" colorScheme="blue">
      Submit
    </Button>
  );
}

export default LoadingButton;
