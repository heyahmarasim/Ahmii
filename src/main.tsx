import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Preload all images for smooth loading
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";
import flowerBouquet from "@/assets/flower-bouquet.png";
import flowerCorner from "@/assets/flower-corner.png";

const preloadImages = [photo1, photo2, photo3, photo4, flowerBouquet, flowerCorner];
preloadImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

createRoot(document.getElementById("root")!).render(<App />);
