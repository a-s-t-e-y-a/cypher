/* eslint-disable eqeqeq */
import Navitem from "./navitem";
import { Infromation, Information2 } from "./constant/navitems_text";
import { brand } from "./brandname";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./cart";
import Logout from "./logout";
const info = Infromation;
const info2 = Information2;

export default function NavbarBase() {
  const logged = localStorage.getItem("token");
  const history = useNavigate();
  function logout(e) {
    console.log("logged");
    e.preventDefault();
    localStorage.removeItem("token");
    history("/serve");
  }

  return (
    <>
      <div className="flex justify-between text-sm px-8 py-4 items-center">
        <div className="flex justify-center gap-12">
          {info.map((texts) => (
            <Navitem text={texts.name} />
          ))}
        </div>
        <div className="text-2xl font-bold">
          <Link to="/serve" className="hover:no-underline hover:text-black">
            {brand}
          </Link>
        </div>

        <div className="flex justify-center gap-12">
          {!logged
            ? info2.map((info_data) => {
                return (
                  <>
                    <Navitem text={info_data.name} />
                  </>
                );
              })
            // eslint-disable-next-line array-callback-return
            : info2.map((info_data) => {
                if (info_data.name == "Cart" || info_data.name == "About") {
                  return <Navitem text={info_data.name} />;
                } else {
                  if (info_data.name == "Login") {
                    const text = "Logout";
                    return <Logout handle={logout} text={text} />;
                  }
                }
              })}
          <Cart text="Cart" />
        </div>
      </div>
    </>
  );
}
