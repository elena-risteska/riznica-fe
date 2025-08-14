import { Box, Typography } from "@mui/material";
import styles from "./styles";
import photo1 from "../../../assets/images/vodopad1.jpg";
import photo2 from "../../../assets/images/vodopad2.jpg";

const Directions = ({ mainInfo }) => {
  return (
    <Box sx={styles.detailsBox}>
      <Box sx={styles.textBox}>
        <Typography variant="h5" mb={3}>
          Како да стигнеш дотаму?
        </Typography>
        <Typography variant="body1" lineHeight={2}>
          Станечкиот водопад е најголем постојан водопад на Осоговските Планини,
          сместен долж течението на Козја Река, во близина на селото Станци,
          Кривопаланечко. Станечки Водопад на Козја Река се наоѓа во северниот
          дел на Осоговските Планини, кај село Станци, 8 километри јужно од
          Крива Паланка. До самото село Станци во долината на Дурачка Река, води
          асфалтен пат долг 5 километри. Потоа се тргнува по патека која води
          покрај Козја Река и по околу 3 километри или 30-тина минути пешачење
          се доаѓа до големиот Станечки Водопад. Водопадот е на надморска
          височина од 1160 метри и функционира во текот на целата година.
        </Typography>
      </Box>
      <Box
        component="img"
        alt="photo1"
        src={photo1}
        sx={{ width: 300, height: "auto", borderRadius: 8 }}
      />
      {/* <Box
        component="img"
        alt="photo2"
        src={photo2}
        sx={{ width: 300, height: "auto", borderRadius: 8 }}
      /> */}
    </Box>
  );
};

export default Directions;
