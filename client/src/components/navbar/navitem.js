import { Link } from "react-router-dom";
export default function Navitem({ text, handle }) {
  return (
    <Link
      to={'/serve/'+text}
      className=" hover:bg-white hover:text-purple-500 hover:no-underline "
    >
      {text}
    </Link>
  );
}
