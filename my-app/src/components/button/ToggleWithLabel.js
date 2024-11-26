import { Switch, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { useState } from 'react';

function ToggleWithLabel() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        Enable Notifications
      </FormLabel>
      <Switch
        id="email-alerts"
        isChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <Text ml={3}>{isChecked ? 'Enabled' : 'Disabled'}</Text>
    </FormControl>
  );
}

export default ToggleWithLabel;
