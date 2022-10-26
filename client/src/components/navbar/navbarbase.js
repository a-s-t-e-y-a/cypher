import Navitem from "./navitem";
import { Infromation, Information2 } from "./constant/navitems_text";
import { brand } from "./brandname";
const info = Infromation;
const info2 = Information2;
export default function NavbarBase() {
  const logged = localStorage.getItem("token");
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
                <Navitem text={info_data.name} />;
              })
            : info2.map((info_data) => {
                console.log(info_data.name == "Cart");
                if (info_data.name == "Cart" || info_data.name == "About") {
                  return <Navitem text={info_data.name} />;
                } else {
                  if (info_data.name == "Login") {
                    const text = "Logout";
                    return <Navitem text={text} />;
                  }
                }
              })}
        </div>
      </div>
    </>
  );
}
