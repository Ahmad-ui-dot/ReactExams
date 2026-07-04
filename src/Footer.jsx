import { Box, Container, Typography } from "@mui/material";
import {
  FaTelegramPlane,
  FaVk,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWarehouse,
} from "react-icons/fa";
import { MdEmail, MdAccessTime } from "react-icons/md";
import { BsLayersFill } from "react-icons/bs";

export default function Footer() {
  return (
    <Box className="bg-[#1d2026] text-white py-12">
      <Container maxWidth="lg">
        <Box className="grid md:grid-cols-3 gap-12">

          <Box className="border-r border-gray-700 pr-10">
            <Box className="flex items-center gap-2 mb-8">
              <BsLayersFill className="text-[#2F80ED] text-xl" />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                ПОСТАВЩИК
              </Typography>
            </Box>

            <Typography className="mb-3 text-gray-300">
              8-800-550-01-09
            </Typography>

            <Typography className="mb-6 text-gray-400 text-sm">
              postaviv@y8mail.ru
            </Typography>

            <Box className="flex gap-4 text-[#2F80ED] text-xl mb-8">
              <FaTelegramPlane className="cursor-pointer hover:text-white duration-300" />
              <FaVk className="cursor-pointer hover:text-white duration-300" />
              <FaInstagram className="cursor-pointer hover:text-white duration-300" />
            </Box>

            <Typography className="text-gray-500 text-xs">
              © 2023 все права защищены
            </Typography>
          </Box>

  
          <Box>
            <Typography
              sx={{
                fontWeight: "700",
                marginBottom: "30px",
              }}
            >
              Информация
            </Typography>

            <Box className="flex flex-col gap-5 text-gray-400 text-sm">
              <Typography>Оплата</Typography>
              <Typography>Доставка</Typography>
              <Typography>
                Политика обработки персональных данных
              </Typography>
              <Typography>
                Согласие на обработку персональных данных
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "700",
                marginBottom: "30px",
              }}
            >
              Центральный офис и склад
            </Typography>

            <Box className="flex flex-col gap-6 text-sm text-gray-400">

              <Box className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#2F80ED] mt-1" />
                <Typography>
                  г. Иркутск ул. Ракитная стр 4 корпус 11
                </Typography>
              </Box>

              <Box className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#2F80ED]" />
                <Typography>8-800-550-01-09</Typography>
              </Box>

              <Box className="flex items-start gap-3">
                <MdAccessTime className="text-[#2F80ED] text-lg mt-1" />
                <Typography>
                  Режим работы: Пн-Пт с 9:00 до 18:00, Сб с 9:00 до
                  14:00
                </Typography>
              </Box>

              <Box className="flex items-center gap-3">
                <FaWarehouse className="text-[#2F80ED]" />
                <Typography>Региональные склады</Typography>
              </Box>

            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}