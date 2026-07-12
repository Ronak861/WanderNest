import { Drawer, Box, Typography, IconButton, Stack, Avatar, Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function WishlistDrawer({ open, onClose, items, onRemove, onOpenDestination }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: { xs: "100%", sm: 380 }, p: 2.5 } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FavoriteIcon sx={{ color: "#ef4444" }} />
          <Typography variant="h6">Your Wishlist</Typography>
        </Stack>
        <IconButton onClick={onClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Divider sx={{ mb: 2 }} />

      {items.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography color="text.secondary">No saved destinations yet.</Typography>
          <Typography variant="body2" color="text.secondary">
            Tap the heart icon on any card to save it here.
          </Typography>
        </Box>
      ) : (
        <Stack spacing={1.5}>
          {items.map((d) => (
            <Stack
              key={d.id}
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{
                p: 1,
                borderRadius: 3,
                border: "1px solid rgba(15,23,42,0.08)",
                cursor: "pointer",
                "&:hover": { bgcolor: "rgba(15,118,110,0.05)" },
              }}
              onClick={() => onOpenDestination(d)}
            >
              <Avatar src={d.image} variant="rounded" sx={{ width: 56, height: 56 }} />
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2">{d.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {d.country} · ${d.price}
                </Typography>
              </Box>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(d.id);
                }}
              >
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Stack>
          ))}
        </Stack>
      )}

      {items.length > 0 && (
        <Button fullWidth variant="contained" sx={{ mt: 3 }}>
          Plan My Trip ({items.length})
        </Button>
      )}
    </Drawer>
  );
}
