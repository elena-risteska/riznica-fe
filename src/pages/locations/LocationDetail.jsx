import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Modal,
  TextField,
  IconButton,
  Avatar,
} from "@mui/material";
import { UserContext } from "../../UserContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../components/ui/Loader";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeaderDetails from "../../components/pages/locations/HeaderDetails";
import Directions from "../../components/pages/locations/Directions";
import Map from "../../components/Map";
import Story from "../../components/pages/locations/Story";
import ScrollerSegment from "../../components/ScrollerSegment";
import Tour from "../../components/pages/activities/Tour";
import api from "../../../api";
import PrimaryButton from "../../components/ui/buttons/PrimaryButton";

const LocationDetail = () => {
  const { type, id } = useParams();
  const { userId, user } = useContext(UserContext);
  const [details, setDetails] = useState(null);
  const [locations, setLocations] = useState([]);
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState("");

  const visibleItems = 3;
  console.log("User ID:", userId);
  console.log("Full user object:", user);
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await api.get("/locations");
        const allLocations = response.data;

        const currentLocation = allLocations.find((loc) => loc._id === id);
        setDetails(currentLocation);

        const similarLocations = allLocations.filter(
          (loc) => loc.type === type && loc._id !== id
        );
        const locationsWithPath = similarLocations.map((loc) => ({
          ...loc,
          to: `/location/${loc.type}/${loc._id}`,
        }));
        setLocations(locationsWithPath);
      } catch (err) {
        console.error("Failed to fetch locations:", err);
      }
    };

    fetchLocations();
  }, [type, id]);

  const fetchComments = async () => {
    try {
      const res = await api.get(`/comments/${id}`);
      setComments(res.data);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
    }
  };

  useEffect(() => {
    if (id) fetchComments();
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/comments/${id}`, { text: newComment });
      setNewComment("");
      setOpen(false);
      fetchComments();
    } catch (err) {
      console.error("Failed to add comment:", err);
    }
  };

  const handleEditComment = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/comments/${editCommentId}`, { text: editCommentText });
      setEditCommentId(null);
      setEditCommentText("");
      fetchComments();
    } catch (err) {
      console.error("Failed to edit comment:", err);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await api.delete(`/comments/${commentId}`);
      fetchComments();
    } catch (err) {
      console.error("Failed to delete comment:", err);
    }
  };

  if (!details) return <Loader />;

  return (
    <DefaultLayout breadcrumbs={true}>
      <Box display="flex" flexDirection="column" gap={6} px={10}>
        <HeaderDetails
          title={details?.title}
          description={details?.description}
          directions={details?.directions}
          region={details?.region}
          type={details?.type}
          hiking={details?.hiking}
          biking={details?.biking}
          legend={details?.legend}
          location={details?.place}
          details={details?.details}
          coords={details?.coords}
          activities={details?.activities}
          mainInfo={details?.mainInfo}
          locationID={id}
        />

        <Directions mainInfo={details?.directions} />

        <Box sx={{ height: 600, my: 4 }}>
          <Map
            zoom={9}
            center={
              details?.coords?.length === 2
                ? [Number(details.coords[0]), Number(details.coords[1])]
                : [41.35599, 21.42177]
            }
            markerData={[
              {
                position:
                  details?.coords?.length === 2
                    ? [Number(details.coords[0]), Number(details.coords[1])]
                    : [41.35599, 21.42177],
                text: details?.title || "Локација",
              },
            ]}
          />
        </Box>

        <Tour text1={details?.hiking} text2={details?.biking} />
        <Story text={details?.legend} />

        {details.images && details.images.length > 0 && (
          <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            mb={4}
            justifyContent="flex-start"
          >
            {details.images.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={
                  img.startsWith("http") ? img : `http://localhost:5000/${img}`
                }
                alt={`Location image ${index + 1}`}
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.02)" },
                }}
                onClick={() =>
                  window.open(
                    img.startsWith("http")
                      ? img
                      : `http://localhost:5000/${img}`,
                    "_blank"
                  )
                }
              />
            ))}
          </Box>
        )}

        <Box mt={10} px={6}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            mb={2}
          >
            <PrimaryButton
              sx={{
                width: "20%",
                color: "white",
                backgroundColor: "primary.main",
                borderRadius: 4,
              }}
              onClick={() => setOpen(true)}
            >
              Остави коментар
            </PrimaryButton>
          </Box>

          {comments.length > 0 ? (
            comments.map((c) => {
              console.log(
                "Comment user ID:",
                c.user?._id,
                "Current user ID:",
                user?._id
              );

              const canEdit =
                user && c.user?._id?.toString() === user._id?.toString();

              return (
                <Paper
                  key={c._id}
                  sx={{ p: 2, mb: 2, borderRadius: 2 }}
                  elevation={1}
                >
                  <Box display="flex" gap={2}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      minWidth={80}
                    >
                      <Avatar sx={{ bgcolor: "primary.main", mb: 1 }}>
                        {(c.user?.username || c.user?.firstName || "А")
                          .charAt(0)
                          .toUpperCase()}
                      </Avatar>
                      <Typography variant="caption" textAlign="center">
                        {c.user?.username ||
                          `${c.user?.firstName || ""} ${
                            c.user?.lastName || ""
                          }` ||
                          "Анонимен"}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(c.createdAt).toLocaleDateString("mk-MK")}
                      </Typography>
                    </Box>

                    <Box
                      flexGrow={1}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="body1">{c.text}</Typography>

                      {canEdit && (
                        <Box display="flex" flexDirection="column" ml={2}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              setEditCommentId(c._id);
                              setEditCommentText(c.text);
                            }}
                            color="primary"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => handleDeleteComment(c._id)}
                            color="primary"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Paper>
              );
            })
          ) : (
            <Typography variant="body2" color="text.secondary">
              Нема коментари за оваа локација.
            </Typography>
          )}
        </Box>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            component="form"
            onSubmit={handleAddComment}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 2,
              width: { xs: "90%", sm: 400 },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h6">Остави коментар</Typography>
            <TextField
              label="Коментар"
              multiline
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <PrimaryButton
              type="submit"
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: 3,
              }}
            >
              Испрати
            </PrimaryButton>
          </Box>
        </Modal>

        <Modal open={!!editCommentId} onClose={() => setEditCommentId(null)}>
          <Box
            component="form"
            onSubmit={handleEditComment}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 2,
              width: { xs: "90%", sm: 400 },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h6">Измени коментар</Typography>
            <TextField
              label="Коментар"
              multiline
              rows={4}
              value={editCommentText}
              onChange={(e) => setEditCommentText(e.target.value)}
              required
            />
            <PrimaryButton
              type="submit"
              sx={{ backgroundColor: "primary.main", color: "white" }}
            >
              Зачувај
            </PrimaryButton>
          </Box>
        </Modal>

        <Box mt={4}>
          <ScrollerSegment
            items={locations}
            visibleItems={visibleItems}
            title="Слични препораки"
            to="/location"
            button={false}
          />
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default LocationDetail;
