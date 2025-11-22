import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "./products.json";

function App() {

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, padding: 16 }}>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((product, index) => (
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
                {product.description ?? product.shortDescription ?? "No description available."}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {product.price ? `$${product.price.toFixed(2)}` : "Price not available"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
}

export default App;
