import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

function InputViewPage100() {
  const { id } = useParams(); // URL에서 고유 ID 추출
  const [data, setData] = useState(null);

  useEffect(() => {
    // localStorage에서 데이터 로드
    const savedData = localStorage.getItem(id);
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, [id]);

  if (!data) {
    return <Heading>No data available</Heading>;
  }

  return (
    <Box p={6} bg="gray.100" minHeight="100vh">
 
      {data.mainImage.active && (
        <Box>
          <strong>메인사진</strong>
          <Box mt={2}>
            <img
              src={data.mainImage.value}
              alt="Main"
              style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
          </Box>
        </Box>
      )}
      {data.greeting.active && (
        <Box mt={4}>
          <strong>인삿말</strong> <p> {data.greeting.value}</p>
        </Box>
      )}
      {data.message.active && (
        <Box mt={4}>
          <strong>전하고싶은말</strong> <p>{data.message.value}</p>
        </Box>
      )}
    </Box>
  );
}

export default InputViewPage100;
