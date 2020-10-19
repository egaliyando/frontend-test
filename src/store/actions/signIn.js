import axios from "config";

export const signIn = async (data) => {
  try {
    const res = await axios.post(`/signin`, data, {
      headers: {
        accesskey: `ZnJvbnRFbmRUZXN0MTIz`,
      },
    });
    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.log(error.response);
  }
};
