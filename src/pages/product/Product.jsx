import { useEffect, useState } from "react";
import { axiosRequest } from "../../lib/axiosRequest";
import { useOutletContext, useNavigate } from "react-router";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  InputBase,
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CloseIcon from "@mui/icons-material/Close"; // Импорт иконки закрытия

// Компонент шагомера количества
function QtyStepper({ value, onChange }) {
  return (
    <Box className="flex items-center border border-gray-300 rounded-lg overflow-hidden flex-1">
      <IconButton
        size="small"
        onClick={(e) => {
          e.stopPropagation(); // Останавливаем всплытие клика, чтобы не открывалась модалка карточки
          onChange(Math.max(1, value - 1));
        }}
      >
        <RemoveIcon fontSize="small" />
      </IconButton>

      <InputBase
        value={value}
        onClick={(e) => e.stopPropagation()} // Защита инпута от клика
        onChange={(e) =>
          onChange(Math.max(1, Number(e.target.value) || 1))
        }
        inputProps={{
          className: "text-center text-sm",
        }}
        className="border-x border-gray-300 h-[35px] w-[45px]"
      />

      <IconButton
        size="small"
        onClick={(e) => {
          e.stopPropagation(); // Останавливаем всплытие клика
          onChange(value + 1);
        }}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default function Product() {
  const { search } = useOutletContext();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState({});
  
  // Состояние для хранения выбранного продукта (для модалки)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  async function getProducts() {
    try {
      const { data } = await axiosRequest.get("/products", {
        params: {
          catalogId: 1,
          page: 1,
          limit: 8,
        },
      });

      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  // Функция закрытия модального окна
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Box className="max-w-[1200px] mx-auto p-4">

      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h5" fontWeight="bold">
          Популярные товары
        </Typography>

        <Button variant="contained">
          Смотреть все
        </Button>
      </Box>

      {filteredProducts.length > 0 ? (
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-evenly" }}
        >
          {filteredProducts.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={item.id}
            >
              <Card
                onClick={() => setSelectedProduct(item)} // Открываем модалку при клике на карточку
                sx={{
                  maxWidth: 300,
                  mx: "auto",
                  borderRadius: "14px",
                  transition: ".3s",
                  height: "100%",
                  cursor: "pointer", // Курсор-палец при наведении
                  "&:hover": {
                    boxShadow: 8,
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Box>

                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#555",
                      height: 45,
                      overflow: "hidden",
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#287FE8",
                      fontWeight: "bold",
                      fontSize: 22,
                      mt: 1,
                    }}
                  >
                    {item.price.toLocaleString("ru-RU")} ₽/{item.unit}
                  </Typography>

                  <Box className="flex items-center gap-2 mt-3">
                    <QtyStepper
                      value={qty[item.id] || 1}
                      onChange={(value) =>
                        setQty((prev) => ({
                          ...prev,
                          [item.id]: value,
                        }))
                      }
                    />

                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation(); // Чтобы модалка НЕ открывалась при клике на корзину
                        console.log("Добавлено в корзину:", item.id, qty[item.id] || 1);
                      }}
                      sx={{
                        background: "#287FE8",
                        color: "#fff",
                        borderRadius: "8px",
                        width: 42,
                        height: 36,
                        "&:hover": {
                          background: "#1565C0",
                        },
                      }}
                    >
                      <ShoppingCartIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            borderTop: "4px solid #1976d2",
            minHeight: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#fff",
          }}
        >
          <Box className="text-center">
            <HighlightOffIcon
              sx={{
                fontSize: 80,
                color: "#1976d2",
                mb: 2,
              }}
            />

            <Typography
              sx={{
                fontSize: 64,
                fontWeight: "bold",
                lineHeight: 1,
              }}
            >
              404
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 28,
                mt: 1,
              }}
            >
              Ошибка
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#777",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Возможно, вы пытались найти товар <b>"{search}"</b>.
              <br />
              Мы не нашли ни одного совпадения. Попробуйте изменить запрос.
            </Typography>

            <Button onClick={() => {navigate("/");}} variant="contained" sx={{mt: 5, px: 6, py: 1.5,}}>НА ГЛАВНУЮ</Button>
          </Box>
        </Box>
      )}

      {/* --- МОДАЛЬНОЕ ОКНО ТОВАРА (MUI DIALOG) --- */}
      <Dialog
        open={Boolean(selectedProduct)}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: "16px", p: 1 },
        }}
      >
        {selectedProduct && (
          <>
            {/* Шапка модалки */}
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", pb: 0 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ maxWidth: "85%" }}>
                {selectedProduct.name}
              </Typography>
              <IconButton onClick={handleCloseModal} size="small" sx={{ ml: "auto" }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            {/* Содержимое модалки */}
            <DialogContent sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                
                {/* Левая колонка: Фото товара */}
                <Grid item xs={12} sm={6}>
                  <Box sx={{ 
                    aspectRatio: "1/1", 
                    overflow: "hidden", 
                    borderRadius: "12px", 
                    border: "1px solid #e5e7eb" 
                  }}>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>
                </Grid>

                {/* Правая колонка: Цена, описание, счетчик и кнопка */}
                <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Box>
                    <Typography
                      sx={{
                        color: "#287FE8",
                        fontWeight: "bold",
                        fontSize: 28,
                        mb: 2,
                      }}
                    >
                      {selectedProduct.price.toLocaleString("ru-RU")} ₽/{selectedProduct.unit}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                      Детальная информация о товаре. Здесь вы можете отобразить описание, артикул, бренд или другие характеристики из вашей базы данных.
                    </Typography>
                  </Box>

                  {/* Блок управления количеством и кнопка покупки */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 4 }}>
                    <QtyStepper
                      value={qty[selectedProduct.id] || 1}
                      onChange={(value) =>
                        setQty((prev) => ({
                          ...prev,
                          [selectedProduct.id]: value,
                        }))
                      }
                    />

                    <Button
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                      onClick={() => {
                        console.log("Добавлено из модалки:", selectedProduct.id, qty[selectedProduct.id] || 1);
                      }}
                      sx={{
                        background: "#287FE8",
                        textTransform: "none",
                        borderRadius: "8px",
                        height: 38,
                        whiteSpace: "nowrap",
                        "&:hover": {
                          background: "#1565C0",
                        },
                      }}
                    >
                      В корзину
                    </Button>
                  </Box>
                  
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}