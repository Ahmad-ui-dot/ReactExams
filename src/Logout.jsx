import { removeToken } from "../src/lib/token";
import { useNavigate } from "react-router";

export default function Logout() {
  const navigate = useNavigate();

  function logout() {
    removeToken();
    navigate("/login");
  }

  return (
    <button
      onClick={logout}
      className="bg-[#0A61DE] text-white p-[10px] rounded"
    >
      Выйти
    </button>
  );
}