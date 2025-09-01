import api from "../../api";

export const getLocations = async () => {
  const res = await api.get("/locations");
  const locationsWithPath = res.data.map((loc) => ({
    ...loc,
    to: `/location/${loc.type}/details`,
  }));
  return locationsWithPath;
};

export const getComments = async () => {
  const res = await api.get("/comments");
  return res.data;
};

export const getActivities = async () => {
  const res = await api.get("/activities");
  return res.data;
};
