import { useState, useEffect } from "react";
import { getLocations } from "../services/homeService";
import useVisibleItems from "../hooks/useVisibleItems";
import Banner from "../components/layout/Banner";
import DefaultLayout from "../layouts/DefaultLayout";
import HeaderHome from "../components/pages/home/HeaderHome";
import MapHome from "../components/pages/home/MapHome";
import CommentsHome from "../components/pages/home/CommentsHome";
import api from "../../api";
import ScrollerSegment from "../components/ScrollerSegment";

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [comments, setComments] = useState([]);
  const visibleItems = useVisibleItems();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationsData = await getLocations();
        console.log(locationsData, "loc");
        setLocations(locationsData);

        const commentsRes = await api.get("/comments");
        const mappedComments = commentsRes.data.map((c) => ({
          firstName: c.user?.firstName || "",
          lastName: c.user?.lastName || "",
          username: c.user?.username || "Анонимен",
          comment: c.text,
          photo: c.user?.photo || null,
          post: c,
          user: c.user,
        }));
        setComments(mappedComments);
      } catch (err) {
        console.error("Failed to load data from api:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <HeaderHome />

      <ScrollerSegment
        items={locations}
        visibleItems={visibleItems}
        title="Необични локации"
        to="/location"
      />

      <MapHome />

      {comments.length > 0 && (
        <CommentsHome
          comments={comments}
          visibleItems={visibleItems}
          text="Коментари од корисници"
        />
      )}

      <Banner />
    </DefaultLayout>
  );
};

export default Home;
