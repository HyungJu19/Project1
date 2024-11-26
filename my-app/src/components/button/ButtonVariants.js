import { Button } from '@chakra-ui/react';

function ButtonVariants() {
  return (
    <>
      <Button variant="solid" colorScheme="blue">
        Solid Button
      </Button>
      <Button variant="outline" colorScheme="blue">
        Outline Button
      </Button>
      <Button variant="link" colorScheme="blue">
        Link Button
      </Button>
    </>
  );
}

export default ButtonVariants;
