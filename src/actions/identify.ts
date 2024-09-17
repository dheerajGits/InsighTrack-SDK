import axios from "axios";

const identify = async (
  apiKey: string,
  apiToken: string,
  userId: string,
  parentId: string
) => {
  try {
    const requestBody = {
      parentId: parentId,
      userId: userId,
    };
    const authHeader = `Basic ${Buffer.from(`${apiKey}:${apiToken}`).toString(
      "base64"
    )}`;
    const updatedUserData = await axios.put(
      `${process.env.MAIN_API_URL}/users/api/set-super-parent`,
      requestBody,
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`[Identify ${parentId}]`, updatedUserData);
    return updatedUserData.data.id;
  } catch (e) {
    console.error("Unable to identify user", e);
    return null;
  }
};
export default identify;
