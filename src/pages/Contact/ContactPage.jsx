import React, { useEffect } from "react";
import {
  Box,
  Card,
  Container,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const contactData = [
  {
    id: 1,
    title: "Центральный офис и склад",
    phone: "+7 (3952) 648-139",
    email: "postav.irk@mail.ru",
    mobile: "+7 (924) 626-33-40",
    address: "г. Иркутск ул. Ракитная стр 4 корп 11",
    hours: "Пн-Пт с 09:00 до 18:00\nСб с 09:00 до 14:00",
    coords: [52.2605, 104.281],
  },
  {
    id: 2,
    title: "Офис и склад на Трактовой",
    phone: "+7 (3952) 648-989",
    email: "post5447374@gmail.com",
    mobile: "+7 (924) 626-33-40",
    address: "г. Иркутск ул. Трактовая 7/7",
    hours: "Пн-Пт с 09:00 до 18:00\nСб с 09:00 до 14:00",
    coords: [52.245, 104.23],
  },
  {
    id: 3,
    title: "Центральный офис и склад",
    phone: "+7 (3952) 648-139",
    email: "postav.irk@mail.ru",
    mobile: "+7 (924) 626-33-40",
    address: "г. Иркутск ул. Ракитная стр 4 корп 11",
    hours: "Пн-Пт с 09:00 до 18:00\nСб с 09:00 до 14:00",
    coords: [52.2605, 104.281],
  },
  {
    id: 4,
    title: "Офис и склад на Трактовой",
    phone: "+7 (3952) 648-989",
    email: "post5447374@gmail.com",
    mobile: "+7 (924) 626-33-40",
    address: "г. Иркутск ул. Трактовая 7/7",
    hours: "Пн-Пт с 09:00 до 18:00\nСб с 09:00 до 14:00",
    coords: [52.245, 104.23],
  },
];

const Item = ({ icon, text }) => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Box
      sx={{
        width: 46,
        height: 46,
        borderRadius: "50%",
        bgcolor: "#1976d2",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon}
    </Box>

    <Typography color="text.secondary">{text}</Typography>
  </Stack>
);

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <YMaps
      query={{
        apikey: "ВАШ_API_KEY",
        lang: "ru_RU",
        load: "package.full",
      }}
    >
      <Box sx={{ bgcolor: "#f5f7fb", py: 8 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={6}
            textAlign="center"
          >
            Контакты
          </Typography>

          <Stack spacing={5}>
            {contactData.map((item) => (
              <Card
                key={item.id}
                elevation={4}
                sx={{
                  borderRadius: 5,
                  overflow: "hidden",
                  p: {
                    xs: 2,
                    md: 4,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "430px 1fr",
                    },
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  {/* Левая часть */}

                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      mb={3}
                    >
                      {item.title}
                    </Typography>

                    <Stack spacing={3}>
                      <Item
                        icon={<PhoneIcon />}
                        text={item.phone}
                      />

                      <Item
                        icon={<EmailIcon />}
                        text={item.email}
                      />

                      <Item
                        icon={<PhoneIcon />}
                        text={item.mobile}
                      />

                      <Item
                        icon={<LocationOnIcon />}
                        text={item.address}
                      />

                      <Item
                        icon={<AccessTimeIcon />}
                        text={item.hours}
                      />
                    </Stack>
                  </Box>

                  {/* Правая часть */}

                  <Box>
                    <Box
                      sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                        height: {
                          xs: 300,
                          md: 420,
                        },
                      }}
                    >
                      <Map
                        defaultState={{
                          center: item.coords,
                          zoom: 15,
                        }}
                        width="100%"
                        height="100%"
                      >
                        <Placemark geometry={item.coords} />
                      </Map>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ mt: 4 }} />
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>
    </YMaps>
  );
}