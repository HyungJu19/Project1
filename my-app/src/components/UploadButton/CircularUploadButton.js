import { useState, useRef } from "react";
import { Box, Input, Image, Avatar } from "@chakra-ui/react";

function CircularUploadButton() {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Box position="relative" w="100px" h="100px" onClick={handleClick} cursor="pointer">
      {preview ? (
        <Image
          src={preview}
          alt="Preview"
          borderRadius="full"
          w="100%"
          h="100%"
          objectFit="cover"
          border="2px solid"
          borderColor="gray.300"
        />
      ) : (
        <Avatar
          size="xl"
          bg="gray.200"
          cursor="pointer"
          _hover={{ borderColor: "blue.300", borderWidth: "2px" }}
        />
      )}
      <Input
        type="file"
        ref={inputRef} // Input 요소에 ref 연결
        display="none"
        accept="image/*"
        onChange={handleFileChange}
      />
    </Box>
  );
}

export default CircularUploadButton;
