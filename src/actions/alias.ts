import axios from "axios";

const alias = async (
  apiKey: string,
  apiToken: string,
  userId: string,
  aliasId: string
) => {
  try {
    const requestBody = {
      aliasId: aliasId,
      userId: userId,
    };
    const authHeader = `Basic ${Buffer.from(`${apiKey}:${apiToken}`).toString(
      "base64"
    )}`;
    const updatedUserData = await axios.put(
      `${process.env.MAIN_API_URL}/users/api/alias`,
      requestBody,
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`[Alias ${aliasId}]`, updatedUserData);
    return updatedUserData.data.id;
  } catch (e) {
    console.error("Unable to set alias", e);
    return null;
  }
};

export default alias;
