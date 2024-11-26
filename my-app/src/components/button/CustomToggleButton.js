import { Switch, FormControl, FormLabel } from '@chakra-ui/react';
import { useState } from 'react';

function CustomToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="custom-switch" mb="0">
        Dark Mode
      </FormLabel>
      <Switch
        id="custom-switch"
        isChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        colorScheme="teal"  // 버튼 색상 변경
        size="lg"            // 크기 변경 (sm, md, lg)
        borderRadius="full"  // 완전한 원형 모양으로 설정
      />
    </FormControl>
  );
}

export default CustomToggleButton;
