
import './App.css';
import Accordian from './Component/Acordian/Accordian';
import Loadmore from './Component/LoadMore_btn/Loadmore';
import RandomColor from './Component/RandomColorCodeChange/RandomColor';
import Recurcive from './Component/Recursive_Navigatio/Recursive';
import StarRating from './Component/star_rating/StarRating';
import { menus } from './Component/Recursive_Navigatio/data';
function App() {
  return (
    <div className="App">
    {/* <Accordian/> */}
    {/* <RandomColor/> */}
    {/* <StarRating/> */}
    {/* <Loadmore/> */}
    <Recurcive menus={menus}/>

    </div>
  );
}

export default App;
