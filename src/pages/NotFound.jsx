import { Box, Typography, Button } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function NotFound({ search, onReset }) {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "4px solid #1976d2",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fff",
        px: 2,
      }}
    >
      <Box textAlign="center">
        <HighlightOffIcon
          sx={{
            fontSize: 80,
            color: "#1976d2",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontSize: {
              xs: 52,
              md: 70,
            },
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 28,
            mt: 1,
          }}
        >
          Ничего не найдено
        </Typography>

        <Typography
          sx={{
            color: "#777",
            mt: 3,
            maxWidth: 620,
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          По запросу <b>"{search}"</b> товары не найдены.
          <br />
          Попробуйте изменить запрос или показать все товары.
        </Typography>

        <Button
          variant="contained"
          onClick={onReset}
          sx={{
            mt: 5,
            px: 6,
            py: 1.5,
            borderRadius: 1,
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          ПОКАЗАТЬ ВСЕ
        </Button>
      </Box>
    </Box>
  );
}