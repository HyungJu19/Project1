import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function IconButton() {
  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="blue">
        
      </Button>
      <Button rightIcon={<AddIcon />} colorScheme="green">
        
      </Button>
    </>
  );
}

export default IconButton;
