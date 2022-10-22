import Navitem from "./navitem";
import { Infromation, Information2 } from "./constant/navitems_text";
import { brand } from "./brandname";
const info = Infromation;
const info2 = Information2;
export default function NavbarBase() {
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
          {info2.map((texts) => (
            <Navitem text={texts.name} />
          ))}
        </div>
      </div>
    </>
  );
}
