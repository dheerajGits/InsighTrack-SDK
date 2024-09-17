import track from "../src/actions/track";
import alias from "./actions/alias";
class People {
  public userId;
  public apiKey;
  public apiToken;

  constructor() {}
  public alias = async (aliasId: string) => {
    const aliasResult = await alias(
      this.apiKey,
      this.apiToken,
      this.userId,
      aliasId
    );
    if (aliasResult) {
      this.userId = aliasResult;
    }
  };
  public set = async () => {};
  public identify = async () => {};
}

class InsighTracK {
  public people;
  public apiKey;
  public apiToken;
  constructor() {
    this.people = new People();
    this.people.apiKey = this.apiKey;
    this.people.apiToken = this.apiToken;
  }
  public track = async (eventName: string, eventData: any) => {
    const eventDetails = await track(
      this.apiKey,
      this.apiToken,
      eventName,
      eventData,
      this.people?.userId
    ); // this will shoot an event
  };
}
export { InsighTracK };
