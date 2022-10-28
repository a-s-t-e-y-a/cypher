import Navitem from "./navitem";
import { Infromation, Information2 } from "./constant/navitems_text";
import { brand } from "./brandname";
import { useNavigate } from "react-router-dom";
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
        <div className="text-2xl font-bold">{brand}</div>
        <div className="flex justify-center gap-12">
          {!logged
            ? info2.map((info_data) => {
                return <Navitem text={info_data.name} />;
              })
            : info2.map((info_data) => {
                
                if (info_data.name == "Cart" || info_data.name == "About") {
                  return <Navitem text={info_data.name} />;
                } else {
                  if (info_data.name == "Login") {
                    const text = "Logout";
                    return <Navitem handle={logout} text={text} />;
                  }
                }
              })}
        </div>
      </div>
    </>
  );
}
