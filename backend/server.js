import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Hardcoded products
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1599,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0hDlM74lUG1rmLPkiW5S1PJExeoFOSu3yg&s",
  },
  {
    id: 2,
    name: "Headphones",
    price: 119,
    imageUrl:
      "https://gearswheel.com/wp-content/uploads/2024/06/Qcy-H2-Pro-43dB-hybrid-Active-Noice-Cancellation-Overhead-Earphone-1.jpg",
  },
  {
    id: 3,
    name: "Smartphone",
    price: 999,
    imageUrl:
      "https://xmobile.lk/wp-content/uploads/2025/09/Apple-iPhone-17-Pro-1.jpg",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 49,
    imageUrl:
      "https://resource.logitech.com/e_trim/w_700,h_600,c_pad,q_auto,f_auto,dpr_1.0/b_white/content/dam/logitech/en/products/keyboards/pop-keys-wireless-mechanical/gallery/wave-2/pop-keys-gallery-cosmo-1.png",
  },
  {
    id: 5,
    name: "Mouse",
    price: 39,
    imageUrl:
      "https://id-media.apjonlinecdn.com/catalog/product/2/s/2s9l1aa_1.png",
  },
  {
    id: 6,
    name: "Smartwatch",
    price: 499,
    imageUrl:
      "https://temptindia.com/cdn/shop/files/Artboard1.png?v=1704273967",
  },
  {
    id: 7,
    name: "Smart TV",
    price: 1199,
    imageUrl:
      "https://amstradworld.com/wp-content/uploads/2023/12/Amstrad-AM65UWGTA-WebOS-TV_front.jpg",
  },
  {
    id: 8,
    name: "Camera",
    price: 799,
    imageUrl:
      "https://www.bbassets.com/media/uploads/p/l/40329890_1-fujifilm-instax-mini-12-instant-camera-pastel-blue.jpg",
  },
  {
    id: 9,
    name: "Mapping Robot",
    price: 1200,
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vacuum-cleaner/2/9/d/-original-imahg2bsu8zzjk3k.jpeg?q=70",
  },
];

// GET /products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST /checkout
app.post("/checkout", (req, res) => {
  const { items } = req.body;
  console.log("Order Placed:", items);
  res.json({ success: true, msg: "Order placed successfully!" });
});

const PORT = Number(process.env.PORT) || 4000;
const server = app.listen(PORT, () =>
  console.log(`Backend running at port ${PORT}`)
);

export { app, server };
