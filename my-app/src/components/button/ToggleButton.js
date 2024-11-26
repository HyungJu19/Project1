import { Button } from '@chakra-ui/react';
import { useState } from 'react';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Button
      colorScheme={isToggled ? 'red' : 'green'}
      onClick={() => setIsToggled(!isToggled)}
    >
      {isToggled ? 'On' : 'Off'}
    </Button>
  );
}

export default ToggleButton;
