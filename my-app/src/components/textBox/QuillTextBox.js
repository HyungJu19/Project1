import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function QuillTextBox() {
  const [value, setValue] = useState("");

  return (
    <div>
      <ReactQuill value={value} onChange={setValue} />
      <button
        onClick={() => console.log(value)}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default QuillTextBox;
