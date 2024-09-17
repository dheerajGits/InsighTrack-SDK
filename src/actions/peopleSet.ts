import axios from "axios";

const createUser = async (apiKey: string, apiToken: string, traits: any) => {
  try {
    const requestBody = {
      traits: traits,
    };
    const authHeader = `Basic ${Buffer.from(`${apiKey}:${apiToken}`).toString(
      "base64"
    )}`;
    const userData = await axios.put(
      `${process.env.MAIN_API_URL}/users/api/create`,
      requestBody,
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`[Poeple Set }]`, userData);
    return userData?.data?.id;
  } catch (e) {
    console.error("Unable to set people", e);
    return null;
  }
};
export default createUser;
