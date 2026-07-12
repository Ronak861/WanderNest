import { Box, Typography, Container, Stack } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#0f172a", color: "#fff", py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PublicIcon sx={{ color: "primary.light" }} />
            <Typography variant="subtitle1" fontWeight={700} sx={{ fontFamily: "'Playfair Display', serif" }}>
              Wander
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
            © 2026 Wander — Travel Destination Explorer. Built with React + Material UI.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
