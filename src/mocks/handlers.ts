import { HttpResponse, http } from "msw";
import { groups } from "./groups";

const groupsResolver = () => {
  return HttpResponse.json(groups);
};
const groupsHandler = http.get("/api/groups", groupsResolver);

export const handlers = [groupsHandler];
