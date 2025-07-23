import React from "react";

export const importHome = () => import("../pages/Home");
export const importAbout = () => import("../pages/About");
export const importNotFound = () => import("../pages/NotFound");

const LazyHome = React.lazy(importHome);
const LazyLocations = React.lazy(importHome);
const LazyActivities = React.lazy(importHome);
const LazyMap = React.lazy(importHome);
const LazyAbout = React.lazy(importAbout);
const LazyNotFound = React.lazy(importNotFound);

export const routes = [
  {
    path: "/",
    element: LazyHome,
    label: "Дома",
    showInNav: true,
    preload: importHome,
  },
  {
    path: "/locations",
    element: LazyLocations,
    label: "Локации",
    showInNav: true,
    preload: importHome,
  },
  {
    path: "/activities",
    element: LazyActivities,
    label: "Активности",
    showInNav: true,
    preload: importHome,
  },
  {
    path: "/map",
    element: LazyMap,
    label: "Мапа",
    showInNav: true,
    preload: importHome,
  },
  {
    path: "/about",
    element: LazyAbout,
    label: "За нас",
    showInNav: true,
    preload: importAbout,
  },
  {
    path: "*",
    element: LazyNotFound,
    showInNav: false,
    preload: importNotFound,
  },
];
