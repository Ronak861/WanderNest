import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import DestinationGrid from "./components/DestinationGrid";
import DestinationModal from "./components/DestinationModal";
import WishlistDrawer from "./components/WishlistDrawer";
import Footer from "./components/Footer";
import { destinations } from "./data";

function App() {
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");
  const [activeBudget, setActiveBudget] = useState("All");
  const [sort, setSort] = useState("Rating");
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  const openDestination = (d) => {
    setSelected(d);
    setModalOpen(true);
  };

  const filtered = useMemo(() => {
    let list = destinations.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.country.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = activeRegion === "All" || d.region === activeRegion;
      const matchesBudget = activeBudget === "All" || d.budget === activeBudget;
      return matchesSearch && matchesRegion && matchesBudget;
    });

    list = [...list].sort((a, b) => (sort === "Rating" ? b.rating - a.rating : a.price - b.price));
    return list;
  }, [search, activeRegion, activeBudget, sort]);

  const favoriteDestinations = destinations.filter((d) => favorites.includes(d.id));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        search={search}
        setSearch={setSearch}
        favoritesCount={favorites.length}
        onOpenWishlist={() => setWishlistOpen(true)}
      />
      <Hero />
      <FilterBar
        activeRegion={activeRegion}
        setActiveRegion={setActiveRegion}
        activeBudget={activeBudget}
        setActiveBudget={setActiveBudget}
        sort={sort}
        setSort={setSort}
        resultCount={filtered.length}
      />
      <DestinationGrid
        destinations={filtered}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onOpen={openDestination}
      />
      <Footer />

      <DestinationModal
        destination={selected}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        isFavorite={selected ? favorites.includes(selected.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      <WishlistDrawer
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        items={favoriteDestinations}
        onRemove={toggleFavorite}
        onOpenDestination={(d) => {
          setWishlistOpen(false);
          openDestination(d);
        }}
      />
    </ThemeProvider>
  );
}

export default App;
