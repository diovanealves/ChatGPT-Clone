import axios from "axios";

export const api = async (message: string) => {
  console.log(message);
  const { data } = await axios.post(
    "http://localhost:5000/api/prompt",
    message
  );

  return data;
};
