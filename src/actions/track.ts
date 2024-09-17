import axios from "axios";

const shootEvent = async (
  apiKey: string,
  apiToken: string,
  eventName: string,
  eventData: any,
  userId?: string
) => {
  try {
    const requestBody = {
      eventData: eventData,
      eventName: eventName,
      userId: userId,
    };
    const authHeader = `Basic ${Buffer.from(`${apiKey}:${apiToken}`).toString(
      "base64"
    )}`;
    const eventDetails = await axios.post(
      `${process.env.MAIN_API_URL}/events/api/track`,
      requestBody,
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`[Event ${eventName}]`, eventDetails);
    return eventDetails?.data?.userId;
  } catch (e) {
    console.error("[Event couldn't be shooted]", e);
    return null;
  }
};
export default shootEvent;
