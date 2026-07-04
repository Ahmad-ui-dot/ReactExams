import image1 from "../../assets/vata.png";
import image2 from "../../assets/vata2.png"; 
import image3 from "../../assets/vata3.png";

import { Typography, Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    image: image1,
    title: "Новинка в России",
    subtitle: "Север - теплоизоляция для сурового климата",
    price: "от 850 ₽ за 3м²",
  },
  {
    image: image2,
    title: "Лучшая теплоизоляция",
    subtitle: "Экономьте тепло зимой",
    price: "от 990 ₽ за 3м²",
  },
  {
    image: image3,
    title: "Скидки до 30%",
    subtitle: "Только до конца месяца",
    price: "от 750 ₽ за 3м²",
  },
];

export default function Home1() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <section className="bgimage w-[100%] h-[400px]">
            <div className="max-w-[1200px] mx-auto px-4 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-[white]">
                <Typography color="white" variant="h4">
                  {banner.title}
                </Typography>

                <Typography
                  color="white"
                  variant="h6"
                  sx={{ mt: 2 }}
                >
                  {banner.subtitle}
                </Typography>

                <Typography
                  color="white"
                  variant="h4"
                  sx={{ mt: 2 }}
                >
                  {banner.price}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    background: "#287FE8",
                  }}
                >
                  Подробнее
                </Button>
              </div>

              <img
                src={banner.image}
                alt={banner.title}
                className="w-[400px]"
              />
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}