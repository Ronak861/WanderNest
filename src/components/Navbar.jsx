import { AppBar, Toolbar, Typography, InputBase, IconButton, Badge, Box, Paper } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Navbar({ search, setSearch, favoritesCount, onOpenWishlist }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(15,23,42,0.08)",
        color: "text.primary",
      }}
    >
      <Toolbar sx={{ gap: 2, py: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}>
          <PublicIcon sx={{ color: "primary.main", fontSize: 28 }} />
          <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Wander
          </Typography>
        </Box>

        <Paper
          component="form"
          onSubmit={(e) => e.preventDefault()}
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            maxWidth: 480,
            px: 1.5,
            py: 0.3,
            ml: { xs: 0, sm: 3 },
            borderRadius: 999,
            bgcolor: "rgba(15,23,42,0.04)",
            boxShadow: "none",
          }}
        >
          <SearchIcon sx={{ color: "text.secondary", mr: 1 }} fontSize="small" />
          <InputBase
            placeholder="Search destinations or countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1, fontSize: 14 }}
          />
        </Paper>

        <Box sx={{ flex: 1 }} />

        <IconButton onClick={onOpenWishlist} sx={{ color: "text.primary" }}>
          <Badge badgeContent={favoritesCount} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
