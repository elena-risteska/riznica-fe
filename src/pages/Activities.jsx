import DefaultLayout from "../layouts/DefaultLayout";
import HeaderLocations from "../components/pages/locations/HeaderLocations";
import ActivitiesSegment from "../components/pages/activities/ActivitiesSegment";
import hiking from "../assets/images/hiking.avif";
import hiking2 from "../assets/images/hiking2.jpg";
import mtb from "../assets/images/mtb.jpg";
import mtb2 from "../assets/images/mtb2.jpg";
import SegmentThree from "../components/pages/activities/SegmentThree";

const Activities = ({}) => {
  return (
    <DefaultLayout>
      <HeaderLocations
        title="Активности"
        subtitle="Препушти се на спортовите кои ги нуди природата тука"
        reverse={false}
      />
      <ActivitiesSegment
        title="Планинарење"
        subtitle="Приближно 80% од територијата на Македонија е покриена со планини и ридови."
        to="/hiking"
        reverse={false}
        photo1={hiking}
        photo2={hiking2}
      />
      <ActivitiesSegment
        title="Велосипедизам"
        subtitle="Планинскиот велосипедизам е одлична можност да ги истражиш дивините."
        to="/mtb"
        reverse={true}
        photo1={mtb}
        photo2={mtb2}
      />
      <SegmentThree />
    </DefaultLayout>
  );
};
export default Activities;
