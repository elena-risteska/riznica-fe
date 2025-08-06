import DefaultLayout from "../layouts/DefaultLayout";
import HeaderLocations from "../components/pages/locations/HeaderLocations";

const Activities = () => {
  return (
    <DefaultLayout>
      <HeaderLocations
        title="Активности"
        subtitle="Препушти се на спортовите кои ги нуди природата тука"
        reverse={false}
      />
    </DefaultLayout>
  );
};
export default Activities;
