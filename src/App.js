import "./App.css";
import Accordian from "./Component/Acordian/Accordian";
import Loadmore from "./Component/LoadMore_btn/Loadmore";
import RandomColor from "./Component/RandomColorCodeChange/RandomColor";
import Recurcive from "./Component/Recursive_Navigatio/Recursive";
import StarRating from "./Component/star_rating/StarRating";
import { menus } from "./Component/Recursive_Navigatio/data";
import Tabs_test from "./Component/Custom_tabs/Tabs_test";
import Board from "./Component/TicTakTio/Board";
import Reacticon from "./Component/practicle/Reacticon";
import ReactTostyfy from "./Component/practicle/ReactTostyfy";
import ReactModal from "./Component/practicle/ReactModel";
import ReactToolTip from "./Component/practicle/ReactToolTip";
import ReactCountUp from "./Component/practicle/ReactCountUp";

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
      {/* <Loadmore/> */}
      {/* <Recurcive menus={menus}/> */}
      {/* <Tabs_test/> */}
      {/* <Todo/> */}
      {/* <Board/> */}
      {/* <Reacticon/> */}
      {/* <ReactTostyfy/> */}
      {/* <ReactModal/> */}
      {/* <ReactToolTip/> */}
      <ReactCountUp/>
    </div>
  );
}

export default App;
