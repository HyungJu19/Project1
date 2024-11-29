import { IconButton, Input, Box } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { useRef } from "react";

function SmallIconButton() {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Box>
      <IconButton
        icon={<AttachmentIcon />}
        colorScheme="blue"
        aria-label="파일 첨부"
        onClick={handleClick} // 클릭 시 Input 트리거
      />
      <Input
        type="file"
        ref={inputRef} // Input 요소에 ref 연결
        display="none"
      />
    </Box>
  );
}

export default SmallIconButton;
