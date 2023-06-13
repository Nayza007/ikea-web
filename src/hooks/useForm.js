import { useState } from "react";

export default function useForm(initialstate, validate) {
  const [input, setInput] = useState(initialstate);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (onSubmit) => async (e) => {
    e.preventDefault();

    console.log("start");
    const result = validate(input);
    // console.log(error);
    if (result) {
      return setError(result);
    }

    setError({});

    await onSubmit(input);
    setInput(initialstate);
  };

  return { input, error, handleChangeInput, handleSubmitForm };
}
