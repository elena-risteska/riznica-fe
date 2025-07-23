import { Component } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styles } from "./styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PrimaryButton from "./ui/buttons/PrimaryButton";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          textAlign="center"
        >
          <ErrorOutlineIcon color="info" sx={styles.errorIcon} />
          <Typography variant="h4" gutterBottom>
            Упс! Нешто тргна наопаку.
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Страницата не може да се вчита. Обидете се да ја освежите или
            вратете се подоцна.
          </Typography>
          <PrimaryButton onClick={this.handleReload} sx={styles.reloadButton}>
            Освежи страница
          </PrimaryButton>
        </Box>
      );
    }

    return this.props.children;
  }
}
