import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { translations } from "../config/translations";

function translateSegment(segment) {
  return translations[segment.toLowerCase()] || segment;
}

const BreadcrumbsComponent = ({ crumbs }) => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const generatedCrumbs = pathnames.map((segment, index) => {
    const to = "/" + pathnames.slice(0, index + 1).join("/");
    return { label: translateSegment(segment), to };
  });

  const finalCrumbs = crumbs && crumbs.length > 0 ? crumbs : generatedCrumbs;

  return (
    <Breadcrumbs sx={{ my: 2 }}>
      {location.pathname === "/" ? (
        <Typography color="text.primary">Дома</Typography>
      ) : (
        <Link component={RouterLink} underline="hover" color="inherit" to="/">
          Дома
        </Link>
      )}

      {finalCrumbs.map(({ label, to }, index) => {
        const isLast = index === finalCrumbs.length - 1;
        const displayLabel = isLast ? "Детали" : label;
        return isLast ? (
          <Typography color="primary" key={to}>
            {displayLabel}
          </Typography>
        ) : (
          <Link
            key={to}
            component={RouterLink}
            underline="hover"
            color="inherit"
            to={to}
          >
            {displayLabel}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
