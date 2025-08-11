import { useState, useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import useVisibleItems from "../../hooks/useVisibleItems";
import ScrollerSegment from "../../components/ScrollerSegment";
import HeaderLocations from "../../components/pages/locations/HeaderLocations";
import locations from "../../config/locations";

const Locations = () => {
  const [waterfalls, setWaterfalls] = useState([]);
  const [archeology, setArcheology] = useState([]);
  const [caves, setCaves] = useState([]);
  const [canyons, setCanyons] = useState([]);
  const [landmarks, setLandmarks] = useState([]);

  const visibleItems = useVisibleItems();

  const itemsMap = {
    waterfalls,
    archeology,
    caves,
    canyons,
    landmarks,
  };

  useEffect(() => {
    fetch("/mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setWaterfalls(data.locations);
        setArcheology(data.locations);
        setCaves(data.locations);
        setCanyons(data.locations);
        setLandmarks(data.locations);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
  }, []);

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
          items={itemsMap[key]}
          visibleItems={visibleItems}
          title={title}
          to={to}
        />
      ))}
    </DefaultLayout>
  );
};

export default Locations;
