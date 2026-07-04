import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import{ Button  } from "@mui/material";
import image1 from "../../assets/block1.png"
import image2 from "../../assets/block2.png"
import image3 from "../../assets/block3.png"
import image4 from "../../assets/block4.png"
import image5 from "../../assets/block5.png"
import image6 from "../../assets/block6.png"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Chip from "@mui/material/Chip";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const products = [
  {
    id: 1,
    title: "Пенофлекс Комфорт 1185х585х20мм 20 плит, 13.86м2, 0.27м3",
    price: 2491,
    badge: "3 ПОДАРОК",
    images: image1,
  },
  {
    id: 2,
    title: "Пенофлекс Комфорт 1185х585х20мм 20 плит, 13.86м2, 0.27м3",
    price: 3200,
    badge: null,
     images: image2,
  },
  {
    id: 3,
    title: "Пенофлекс Комфорт 1185х585х20мм 20 плит, 13.86м2, 0.27м3",
    price: 1345,
    badge: null,
    images: image3,
  },
  {
    id: 4,
    title: "Пенофлекс Комфорт 1185х585х20мм 20 плит, 13.86м2, 0.27м3",
    price: 2600,
    badge: null,
    images: image4,
  },
  {
    id: 5,
    title: "Пенофлекс Комфорт 1185х585х30мм 20 плит, 13.86м2, 0.41м3",
    price: 2890,
    badge: "НОВИНКА",
     images: image5,
  },
  {
    id: 6,
    title: "Пенофлекс Фольга 1185х585х10мм 20 плит, 13.86м2, 0.14м3",
    price: 1980,
    badge: null,
    images: image6,
  },
];

function formatPrice(n) {
  return `${n.toLocaleString("ru-RU")} ₽/шт.`;
}

function QtyStepper({ value, onChange }) {
  return (
    <Box className="flex items-center border border-gray-200 rounded-lg overflow-hidden flex-1">
      <IconButton
        size="small"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="!rounded-none"
        aria-label="Уменьшить количество"
      >
        <RemoveIcon fontSize="small" />
      </IconButton>
      <InputBase
        value={value}
        onChange={(e) => {
          const v = parseInt(e.target.value, 10);
          onChange(Number.isNaN(v) ? 1 : Math.max(1, v));
        }}
        inputProps={{
          inputMode: "numeric",
          className: "text-center text-sm w-full",
        }}
        className="border-x border-gray-200 h-[34px] w-full"
      />
      <IconButton
        size="small"
        onClick={() => onChange(value + 1)}
        className="!rounded-none"
        aria-label="Увеличить количество"
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

function ProductCard({ product }) {
  const [qty, setQty] = useState(1);

  return (
    <Card
      elevation={0}
      className="border border-gray-200 rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      <Box
        className="relative w-full aspect-[4/2.9]"
        sx={{ background: product.images ? `url(${product.images}) center/cover no-repeat` : product.gradient }}
      >
        {product.badge && (
          <Chip
            label={product.badge}
            size="small"
            className="!absolute !top-2 !left-2 !bg-rose-500 !text-white !font-bold !text-[10px]"
          />
        )}
      </Box>

      <CardContent className="!p-3.5 flex flex-col gap-2.5 flex-1">
        <Typography
          variant="body2"
          className="!text-[12.5px] !leading-snug !text-gray-600 !min-h-[34px]"
        >
          {product.title}
        </Typography>

        <Typography variant="subtitle1" className="!font-bold !text-blue-600">
          {formatPrice(product.price)}
        </Typography>

        <Box className="flex items-center gap-1.5 mt-auto">
          <QtyStepper value={qty} onChange={setQty} />
          <IconButton
            className="!bg-blue-600 hover:!bg-blue-700 !rounded-lg !w-[38px] !h-[34px] !text-white"
            aria-label="Добавить в корзину"
          >
            <ShoppingCartIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function Home3() {
  return (
    <Box className="max-w-[1200px] mx-auto p-6">
      <div className="max-w-[1200px] m-auto p-[10px] flex justify-between items-center">
        <Typography variant="h5">Строительные блоки</Typography>
         <Button sx={{backgroundColor : "#287FE8", marginTop : '10px'}} variant="contained">Смотреть все</Button>
     </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        navigation={false} // arrows explicitly disabled
        breakpoints={{
          480: { slidesPerView: 2.2, spaceBetween: 14 },
          768: { slidesPerView: 3.2, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 18 },
        }}
        className="!pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="!h-auto">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
