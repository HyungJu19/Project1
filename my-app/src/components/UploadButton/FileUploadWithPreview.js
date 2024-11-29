import { useState } from "react";
import { Button, Input, Image, Box } from "@chakra-ui/react";

function FileUploadWithPreview() {
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
    <Box>
      <Button as="label" colorScheme="green" cursor="pointer">
        이미지 첨부
        <Input type="file" display="none" accept="image/*" onChange={handleFileChange} />
      </Button>
      {preview && <Image mt={4} src={preview} alt="Preview" maxH="200px" />}
    </Box>
  );
}

export default FileUploadWithPreview;
