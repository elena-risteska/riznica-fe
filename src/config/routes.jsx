import React from "react";
import Profile from "../pages/Profile";
import ProtectedRoute from "../utils/ProtectedRoute";

export const importHome = () => import("../pages/Home");
export const importAbout = () => import("../pages/About");
export const importLogin = () => import("../pages/Login");
export const importRegister = () => import("../pages/Register");
export const importForgotPassword = () => import("../pages/ForgotPassword");
export const importRecoverAccount = () => import("../pages/RecoverAccount");
export const importNotFound = () => import("../pages/NotFound");
export const importLocations = () => import("../pages/locations/Locations");
export const importLocationCategory = () =>
  import("../pages/locations/LocationCategory");
export const importLocationDetail = () =>
  import("../pages/locations/LocationDetail");
export const importActivities = () => import("../pages/activities/Activities");
export const importActivitiesCategory = () =>
  import("../pages/activities/ActivitiesCategory");
export const importActivitiesDetail = () =>
  import("../pages/activities/ActivitiesDetail");

const LazyHome = React.lazy(importHome);
const LazyLocations = React.lazy(importLocations);
const LazyLocationCategory = React.lazy(importLocationCategory);
const LazyLocationDetail = React.lazy(importLocationDetail);
const LazyActivities = React.lazy(importActivities);
const LazyActivitiesCategory = React.lazy(importActivitiesCategory);
const LazyActivitiesDetail = React.lazy(importActivitiesDetail);
const LazyMap = React.lazy(importHome);
const LazyAbout = React.lazy(importAbout);
const LazyLogin = React.lazy(importLogin);
const LazyRegister = React.lazy(importRegister);
const LazyForgotPassword = React.lazy(importForgotPassword);
const LazyRecoverAccount = React.lazy(importRecoverAccount);
const LazyNotFound = React.lazy(importNotFound);

export const routes = [
  {
    path: "/",
    element: <LazyHome />,
    label: "Дома",
    showInNav: true,
    preload: importHome,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
    showInNav: false,
  },
  {
    path: "/locations",
    element: <LazyLocations />,
    label: "Локации",
    showInNav: true,
    preload: importLocations,
  },
  {
    path: "/locations/:category",
    element: <LazyLocationCategory />,
    showInNav: false,
    preload: importLocationCategory,
  },
  {
    path: "/locations/:category/:details",
    element: <LazyLocationDetail />,
    showInNav: false,
    preload: importLocationDetail,
  },
  {
    path: "/activities",
    element: <LazyActivities />,
    label: "Активности",
    showInNav: false,
    preload: importActivities,
  },
  {
    path: "/activities/:category",
    element: <LazyActivitiesCategory />,
    showInNav: false,
    preload: importActivitiesCategory,
  },
  {
    path: "/activities/:category/:details",
    element: <LazyActivitiesDetail />,
    showInNav: false,
    preload: importActivitiesDetail,
  },
  {
    path: "/map",
    element: <LazyMap />,
    label: "Мапа",
    showInNav: true,
    preload: importHome,
  },
  {
    path: "/about",
    element: <LazyAbout />,
    label: "За нас",
    showInNav: true,
    preload: importAbout,
  },
  {
    path: "/login",
    element: <LazyLogin />,
    showInNav: false,
    preload: importLogin,
  },
  {
    path: "/register",
    element: <LazyRegister />,
    showInNav: false,
    preload: importRegister,
  },
  {
    path: "/forgot-password",
    element: <LazyForgotPassword />,
    showInNav: false,
    preload: importForgotPassword,
  },
  {
    path: "/recover-account",
    element: <LazyRecoverAccount />,
    showInNav: false,
    preload: importRecoverAccount,
  },
  {
    path: "*",
    element: <LazyNotFound />,
    showInNav: false,
    preload: importNotFound,
  },
];
