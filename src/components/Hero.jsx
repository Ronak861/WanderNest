import { Box, Typography, Container, Fade } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 320, md: 420 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.45), rgba(15,23,42,0.55)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="md">
        <Fade in timeout={900}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontSize: { xs: "2.2rem", md: "3.4rem" },
                mb: 1.5,
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Find your next escape
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 400, maxWidth: 560 }}
            >
              Hand-picked destinations across the globe — filter by region, budget, and vibe to plan
              your perfect trip.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
