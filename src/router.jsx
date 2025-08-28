import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./config/routes";
import Loader from "./components/ui/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

const Router = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Router;
