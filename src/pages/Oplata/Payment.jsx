import {
  Box,
  Typography,
  Divider,
} from "@mui/material";

import {
  BsQrCode,
  BsWallet2,
} from "react-icons/bs";

import {
  HiOutlineDocumentText,
} from "react-icons/hi2";

export default function Payment() {
  return (
    <Box className="w-full bg-white py-14 px-5">
      <Box className="max-w-[1200px] mx-auto">

        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 6,
            fontSize: {
              xs: "34px",
              md: "48px",
            },
          }}
        >
          Оплата
        </Typography>

        <Box className="grid lg:grid-cols-3 gap-12">

      

          <Box className="space-y-10">

     

            <Box className="flex gap-5">
              <BsQrCode
                size={48}
                className="text-blue-600 mt-1"
              />

              <Box>
                <Typography
                  fontWeight={700}
                  fontSize={22}
                  mb={1}
                >
                  QR-кодом
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: 15,
                  }}
                >
                  Оплата моментально поступает на счёт продавца и
                  позволяет избежать кассовых разрывов.
                </Typography>
              </Box>
            </Box>


            <Box className="flex gap-5">
              <BsWallet2
                size={48}
                className="text-blue-600 mt-1"
              />

              <Box>
                <Typography
                  fontWeight={700}
                  fontSize={22}
                  mb={1}
                >
                  Наличными
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: 15,
                  }}
                >
                  Прямая передача денег продавцу «из рук в руки».
                </Typography>
              </Box>
            </Box>


            <Box className="flex gap-5">
              <HiOutlineDocumentText
                size={48}
                className="text-blue-600 mt-1"
              />

              <Box>
                <Typography
                  fontWeight={700}
                  fontSize={22}
                  mb={1}
                >
                  Безналичный расчет
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: 15,
                  }}
                >
                  Перевод осуществляется на основании указанных в
                  реквизитах данных организации.
                </Typography>
              </Box>
            </Box>

          </Box>



          <Box
            className="space-y-8"
            sx={{
              color: "#666",
              fontSize: "15px",
              lineHeight: 2,
            }}
          >
            <Typography>
              Мы любим животных и стараемся поддерживать тех из них,
              кому не посчастливилось иметь ласковых хозяев и тёплый
              кров. Одни из проверенных способов это сделать —
              пожертвование благотворительному фонду «Луч Добра».
              Благодаря их труду уже ещё сотни питомцев находят
              свой новый дом.
            </Typography>

            <Divider />

            <Typography>
              Противоположная точка зрения подразумевает, что
              независимые государства лишь добавляют фракционных
              разногласий и представлены исключительно в
              положительном свете.
            </Typography>
          </Box>


          <Box>

            <Typography
              fontWeight={700}
              fontSize={24}
              mb={3}
            >
              Платежные реквизиты:
            </Typography>

            <Box
              sx={{
                color: "#666",
                lineHeight: 2.3,
                fontSize: "15px",
              }}
            >
              <Typography>ООО "Поставщик"</Typography>

              <Typography>
                ИНН 7713522570 / КПП 771301001
              </Typography>

              <Typography>
                Расчетный счёт № 40702810400180000662
              </Typography>

              <Typography>
                ОАО «Отп банк» г. Москва
              </Typography>

              <Typography>
                Кор. Счет № 30101810000000000311
              </Typography>

              <Typography>
                БИК 044525311.
              </Typography>
            </Box>

          </Box>

        </Box>

      </Box>
    </Box>
  );
}