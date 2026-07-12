import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Stack,
  Grow,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";

export default function DestinationCard({ destination, isFavorite, onToggleFavorite, onOpen, index }) {
  const { name, country, region, rating, price, days, image, tags } = destination;

  return (
    <Grow in timeout={400 + index * 80}>
      <Card
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          border: "1px solid rgba(15,23,42,0.08)",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 16px 32px rgba(15,23,42,0.14)",
          },
        }}
        onClick={() => onOpen(destination)}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" height="200" image={image} alt={name} sx={{ objectFit: "cover" }} />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(destination.id);
            }}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              bgcolor: "rgba(255,255,255,0.9)",
              transition: "transform 0.25s ease",
              "&:hover": { bgcolor: "#fff", transform: "scale(1.15)" },
            }}
            size="small"
          >
            {isFavorite ? <FavoriteIcon sx={{ color: "#ef4444" }} fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
          </IconButton>

          <Chip
            label={days}
            size="small"
            sx={{
              position: "absolute",
              bottom: 10,
              left: 10,
              bgcolor: "rgba(255,255,255,0.92)",
              fontWeight: 600,
            }}
          />
        </Box>

        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
                {name}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "text.secondary", mt: 0.3 }}>
                <PlaceIcon sx={{ fontSize: 15 }} />
                <Typography variant="caption">
                  {country} · {region}
                </Typography>
              </Stack>
            </Box>
            <Stack direction="row" alignItems="center" spacing={0.4}>
              <StarIcon sx={{ fontSize: 17, color: "#f59e0b" }} />
              <Typography variant="body2" fontWeight={600}>
                {rating}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={0.7} flexWrap="wrap" useFlexGap sx={{ mt: 1.5, mb: 1.5 }}>
            {tags.map((t) => (
              <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: "rgba(15,118,110,0.3)" }} />
            ))}
          </Stack>

          <Typography variant="subtitle1" fontWeight={700} sx={{ color: "primary.main" }}>
            ${price}{" "}
            <Typography component="span" variant="caption" color="text.secondary">
              / person
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Grow>
  );
}
