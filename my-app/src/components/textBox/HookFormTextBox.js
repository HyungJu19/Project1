import React from "react";
import { useForm } from "react-hook-form";

function HookFormTextBox() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          {...register("name", { required: true })}
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "8px",
            marginBottom: "10px",
          }}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HookFormTextBox;
