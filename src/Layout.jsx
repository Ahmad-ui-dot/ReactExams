import { useState } from "react";
import image1 from "../src/assets/Group 42.png";
import image2 from "../src/assets/Group 66.png";
import Drawer from "./Drawer";
import { Outlet, NavLink } from "react-router";
import { Typography } from "@mui/material";
import Logout from "./Logout";
import Footer from "./Footer";

export default function Layout() {
  const [search, setSearch] = useState("");

  return (
    <>
      <header className="w-full">

        <div className="max-w-[1200px] mx-auto p-3 flex justify-between items-center">
          <NavLink to="/">
            <img src={image1} alt="" />
          </NavLink>

          <div className="hidden lg:flex gap-10 items-center">
            <NavLink to="/dostavka" className="text-[#0A61DE] font-bold">
              Доставка
            </NavLink>

            <NavLink to="/payment" className="text-[#0A61DE] font-bold">
              Оплата
            </NavLink>

            <NavLink to="/contacts" className="text-[#0A61DE] font-bold">
              Контакты
            </NavLink>

            <Logout />

            <Typography variant="h6">
              8-800-550-01-09
            </Typography>

            <img src={image2} alt="" />
          </div>

          <img className="lg:hidden" src={image2} alt="" />
        </div>

        <div className="bg-[#EDEDED]">
          <div className="max-w-[1200px] mx-auto flex items-center gap-4 p-3">

            <Drawer />

            <input
              type="search"
              placeholder="Поиск..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 px-4 border border-gray-400 rounded-md bg-white"
            />

          </div>
        </div>
      </header>

      <Outlet context={{ search }} />

      <Footer />
    </>
  );
}