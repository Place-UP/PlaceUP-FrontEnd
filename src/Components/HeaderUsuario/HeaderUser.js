import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export function Header() {
  return (
    <>
      <h1>OI</h1>
      <li>
        <span>
          <AiOutlineHome />
        </span>
        <Link to="/HeaderUser">Teste </Link>
      </li>
    </>
  );
}
