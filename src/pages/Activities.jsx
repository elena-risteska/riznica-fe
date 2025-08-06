import DefaultLayout from "../layouts/DefaultLayout";
import HeaderLocations from "../components/pages/locations/HeaderLocations";
import ActivitiesSegment from "../components/pages/activities/ActivitiesSegment";

const Activities = ({}) => {
  return (
    <DefaultLayout>
      <HeaderLocations
        title="Активности"
        subtitle="Препушти се на спортовите кои ги нуди природата тука"
        reverse={false}
      />
      <ActivitiesSegment
        title="Параглајдинг"
        subtitle="Искуство за најхрабрите"
        to="/paragliding"
        reverse={false}
      />
      <ActivitiesSegment
        title="Јавање коњи"
        subtitle="Експедиција и глетка која не треба да ја пропуштиш"
        to="/horse-riding"
        reverse={true}
      />
    </DefaultLayout>
  );
};
export default Activities;
