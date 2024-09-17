import { InsighTrack } from "./InsighTrackClass";

function init(apiKey: string, apiToken: string) {
  const insighTrack = new InsighTrack(apiKey, apiToken);
  return insighTrack;
}
export { init };
