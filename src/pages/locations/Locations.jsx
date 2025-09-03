import { useState, useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import useVisibleItems from "../../hooks/useVisibleItems";
import ScrollerSegment from "../../components/ScrollerSegment";
import HeaderLocations from "../../components/pages/locations/HeaderLocations";
import locations from "../../config/locations";
import api from "../../../api";

const Locations = () => {
  const [allLocations, setAllLocations] = useState([]);
  const visibleItems = useVisibleItems();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await api.get("/locations");
        const locationsWithPath = response.data.map((loc) => ({
          ...loc,
          to: `/location/${loc.type}/${loc._id}`,
        }));
        setAllLocations(locationsWithPath);
      } catch (err) {
        console.error("Failed to load locations:", err);
      }
    };
    fetchLocations();
  }, []);

  const getLocationsByType = (type) => {
    return allLocations.filter((loc) => loc.type === type);
  };

  return (
    <DefaultLayout>
      <HeaderLocations
        title="Локации"
        subtitle="Пребарувај низ бројноста атракции и погледни што се крие во оваа земја"
        reverse={true}
      />

      {locations.map(({ title, to, key }) => (
        <ScrollerSegment
          key={to}
          items={getLocationsByType(key)}
          visibleItems={visibleItems}
          title={title}
          to={to}
        />
      ))}
    </DefaultLayout>
  );
};

export default Locations;
