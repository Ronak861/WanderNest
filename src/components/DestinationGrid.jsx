import { Grid, Container, Box, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DestinationCard from "./DestinationCard";

export default function DestinationGrid({ destinations, favorites, onToggleFavorite, onOpen }) {
  if (destinations.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <TravelExploreIcon sx={{ fontSize: 56, color: "text.secondary", mb: 1 }} />
        <Typography variant="h6" color="text.secondary">
          No destinations match your filters
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Try adjusting your search or filters
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      <Grid container spacing={3}>
        {destinations.map((d, i) => (
          <Grid item xs={12} sm={6} md={4} key={d.id}>
            <DestinationCard
              destination={d}
              isFavorite={favorites.includes(d.id)}
              onToggleFavorite={onToggleFavorite}
              onOpen={onOpen}
              index={i}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
