import { Box, Chip, Stack, Container, ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import { regions, budgets } from "../data";

export default function FilterBar({
  activeRegion,
  setActiveRegion,
  activeBudget,
  setActiveBudget,
  sort,
  setSort,
  resultCount,
}) {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: "relative", zIndex: 2, mb: 2 }}>
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 4,
          p: { xs: 2, md: 3 },
          boxShadow: "0 10px 40px rgba(15,23,42,0.12)",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={{ md: "center" }} justifyContent="space-between">
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {regions.map((r) => (
              <Chip
                key={r}
                label={r}
                onClick={() => setActiveRegion(r)}
                color={activeRegion === r ? "primary" : "default"}
                variant={activeRegion === r ? "filled" : "outlined"}
                sx={{ transition: "all 0.2s" }}
              />
            ))}
          </Stack>

          <ToggleButtonGroup
            size="small"
            value={activeBudget}
            exclusive
            onChange={(e, val) => val && setActiveBudget(val)}
          >
            {budgets.map((b) => (
              <ToggleButton key={b} value={b} sx={{ textTransform: "none", px: 2 }}>
                {b}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {resultCount} destination{resultCount !== 1 ? "s" : ""} found
          </Typography>
          <Stack direction="row" spacing={1}>
            {["Rating", "Price"].map((s) => (
              <Chip
                key={s}
                label={`Sort: ${s}`}
                size="small"
                onClick={() => setSort(s)}
                color={sort === s ? "secondary" : "default"}
                variant={sort === s ? "filled" : "outlined"}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
