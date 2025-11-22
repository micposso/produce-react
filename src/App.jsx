import { useState, useMemo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import data from "./products.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extract unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(data.map((product) => product.category))];
    return uniqueCategories.sort();
  }, []);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return data;
    return data.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div style={{ padding: 16 }}>
      {/* Category Filter */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          Filter by Category:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => handleCategoryClick(category)}
              color={selectedCategory === category ? "primary" : "default"}
              variant={selectedCategory === category ? "filled" : "outlined"}
              sx={{ cursor: "pointer" }}
            />
          ))}
        </Box>
      </Box>

      {/* Products Grid */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Card
              key={product.id ?? product.sku ?? product.name ?? index}
              sx={{ maxWidth: 345 }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={product.image ?? "/static/images/cards/contemplative-reptile.jpg"}
                title={product.name ?? "Product image"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name ?? "Unnamed product"}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.category}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", marginTop: 1 }}>
                  {product.description ?? product.shortDescription ?? "No description available."}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1, fontWeight: "bold" }}>
                  {product.price ? `$${product.price.toFixed(2)}` : "Price not available"}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">{product.category}</Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
}

export default App;
