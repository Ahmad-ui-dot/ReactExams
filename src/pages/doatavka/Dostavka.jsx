import { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Divider,
} from "@mui/material";

export default function Delivery() {
  const [value, setValue] = useState(0);

  return (
    <section
      className="max-w-[1200px] mx-auto px-5 py-10"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
        <Typography
          variant="h3"
          fontWeight={600}
          sx={{ fontSize: { xs: "30px", md: "42px" } }}
        >
          Доставка
        </Typography>

        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
          sx={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            minHeight: "45px",

            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              fontSize: "15px",
            },
          }}
        >
          <Tab label="Правила доставки" />
          <Tab label="Стоимость услуг" />
        </Tabs>
      </div>

      {/* ---------- TAB 1 ---------- */}

      {value === 0 && (
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <Typography fontWeight={600} mb={3}>
              Правила доставки
            </Typography>

            <Typography color="text.secondary" lineHeight={2}>
              Доставка производится транспортом компании. Водитель не
              разгружает товар и передает его получателю после проверки
              документов.

              <br />
              <br />

              Если покупатель отсутствует по указанному адресу,
              доставка переносится на другое время.

              <br />
              <br />

              При получении необходимо внимательно проверить
              количество товара, целостность упаковки и внешний вид.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography fontWeight={600} mb={2}>
              Для оформления доставки потребуется:
            </Typography>

            <ul className="list-disc pl-5 text-gray-600 leading-8">
              <li>Контактный телефон</li>
              <li>ФИО получателя</li>
              <li>Точный адрес доставки</li>
              <li>Удобное время получения</li>
            </ul>

            <Divider sx={{ my: 4 }} />

            <Typography fontWeight={600} mb={2}>
              Самовывоз
            </Typography>

            <Typography color="text.secondary" lineHeight={2}>
              Вы можете самостоятельно забрать товар со склада после
              подтверждения заказа менеджером.
            </Typography>
          </div>

          <div>
            <Typography fontWeight={600} mb={3}>
              Доставка по Иркутску
            </Typography>

            <Typography color="text.secondary" lineHeight={2}>
              Доставка осуществляется ежедневно. Стоимость зависит
              от района и объема заказа.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography fontWeight={600} mb={3}>
              Доставка по России
            </Typography>

            <Typography color="text.secondary" lineHeight={2}>
              Мы отправляем товары транспортными компаниями.
              Возможна доставка в любой регион России.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography fontWeight={600}>
              Бесплатная доставка
            </Typography>

            <Typography color="text.secondary" lineHeight={2}>
              При заказе от определенной суммы доставка по городу
              осуществляется бесплатно.
            </Typography>
          </div>
        </div>
      )}

      {/* ---------- TAB 2 ---------- */}

      {value === 1 && (
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <Typography fontWeight={600} mb={4}>
              Стоимость доставки
            </Typography>

            {[
              ["Доставка в Свердловский район", "600 ₽"],
              ["Доставка в Октябрьский район", "800 ₽"],
              ["Доставка в Ленинский район", "900 ₽"],
              ["Доставка в Правобережный район", "700 ₽"],
              ["Доставка до Ангарска", "2000 ₽"],
              ["Доставка до Шелехова", "1200 ₽"],
              ["Доставка до Усолья", "2500 ₽"],
              ["Доставка до Байкальска", "3500 ₽"],
              ["Доставка до Саянска", "4000 ₽"],
              ["Доставка по области", "от 1000 ₽"],
            ].map(([name, price], i) => (
              <div
                key={i}
                className="flex justify-between border-b border-dashed py-3"
              >
                <Typography color="text.secondary">
                  {name}
                </Typography>

                <Typography fontWeight={600}>{price}</Typography>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-[350px] h-[350px] bg-gray-100 rounded-3xl flex items-center justify-center text-[180px] text-gray-300 font-bold">
              E
            </div>
          </div>
        </div>
      )}
    </section>
  );
}