import NavbarBase from "../navbar/navbarbase";
import HeaderBase from "../Header/headerbase";
import Girls_final from "../girls_display_index_page/girls_item_final";
import Boys_final from "../boys_display_index_page/boys_item_final";
import Highlight from "../highlight/highlight_final";
import { useLocation, useParams } from "react-router-dom";

function Index() {
  // const { state } = this.props.location
  // const { state } = useParams();

  // console.log(state);  
  return (
    <>
      <NavbarBase />      
      <HeaderBase />
      <Girls_final />
      <Highlight />
      <Boys_final />
    </>
  );
}
export default Index;
