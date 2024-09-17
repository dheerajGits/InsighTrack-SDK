import track from "../src/actions/track";
import alias from "./actions/alias";
import identify from "./actions/identify";
import createUser from "./actions/peopleSet";
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
  public set = async (traits: any) => {
    const userData = await createUser(this.apiKey, this.apiToken, traits);
    if (userData) {
      this.userId = userData.id;
    }
  };
  public identify = async (parentId: string) => {
    const identifiedUserId = await identify(
      this.apiKey,
      this.apiToken,
      this.userId,
      parentId
    );
    if (identifiedUserId) {
      this.userId = identifiedUserId;
    }
  };
}

class InsighTrack {
  public people;
  public apiKey;
  public apiToken;
  constructor(apiKey: string, apiToken: string) {
    this.apiKey = apiKey;
    this.apiToken = apiToken;
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
export { InsighTrack };
