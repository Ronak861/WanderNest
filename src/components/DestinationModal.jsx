import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Chip,
  Stack,
  IconButton,
  Button,
  Divider,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DestinationModal({ destination, open, onClose, isFavorite, onToggleFavorite }) {
  if (!destination) return null;
  const { name, country, region, rating, price, days, image, tags, description, budget } = destination;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth TransitionComponent={Transition} PaperProps={{ sx: { borderRadius: 4, overflow: "hidden" } }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
        />
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 10, right: 10, bgcolor: "rgba(255,255,255,0.9)", "&:hover": { bgcolor: "#fff" } }}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <Chip
          label={budget}
          color="secondary"
          size="small"
          sx={{ position: "absolute", top: 10, left: 10, fontWeight: 600 }}
        />
      </Box>

      <DialogContent>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="h5">{name}</Typography>
            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "text.secondary", mt: 0.4 }}>
              <PlaceIcon sx={{ fontSize: 17 }} />
              <Typography variant="body2">
                {country} · {region}
              </Typography>
            </Stack>
          </Box>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <StarIcon sx={{ color: "#f59e0b" }} />
            <Typography variant="subtitle1" fontWeight={700}>
              {rating}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={0.7} flexWrap="wrap" useFlexGap sx={{ mt: 2, mb: 2 }}>
          {tags.map((t) => (
            <Chip key={t} label={t} size="small" sx={{ bgcolor: "rgba(15,118,110,0.08)" }} />
          ))}
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          {description}
        </Typography>

        <Divider sx={{ my: 2.5 }} />

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={700}>
              ${price}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              per person · {days}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              startIcon={isFavorite ? <FavoriteIcon sx={{ color: "#ef4444" }} /> : <FavoriteBorderIcon />}
              onClick={() => onToggleFavorite(destination.id)}
            >
              {isFavorite ? "Saved" : "Save"}
            </Button>
            <Button variant="contained" color="primary">
              Book Now
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
