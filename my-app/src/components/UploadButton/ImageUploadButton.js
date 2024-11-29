import { useState } from "react";
import { Box, Input, Image, Text } from "@chakra-ui/react";

function ImageUploadButton() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      as="label"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border="2px dashed"
      borderColor="gray.400"
      borderRadius="md"
      p={4}
      cursor="pointer"
      _hover={{ borderColor: "green.400", bg: "green.50" }}
      h="200px"
      w="300px"
    >
      {preview ? (
        <Image src={preview} alt="Preview" maxH="100%" maxW="100%" />
      ) : (
        <>
          <Text fontSize="lg" color="gray.500">
            이미지를 첨부하거나 여기에 드래그하세요
          </Text>
        </>
      )}
      <Input type="file" display="none" accept="image/*" onChange={handleFileChange} />
    </Box>
  );
}

export default ImageUploadButton;
