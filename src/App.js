
import './App.css';
import IDCards from './components/IDCards';
import Data from "./Data.json";


function App() {
  console.log(Data.data);
  return (
    <div className="App">
    <h1>Welcome to IDCards App!</h1>
    {/* <div className="d-flex">
    <IDCards iname="Jane" ititle="CEO" idesc="Likes mentoring,Travelling"/>
    <IDCards iname="Mike" ititle="Manager" idesc="Likes hiking,Travelling"/>
    <IDCards iname="John" ititle="Manager" idesc="Likes coding"/>
    </div> */}
    <div className="d-flex">
    {
      Data.data.map((elem)=>{
        return <IDCards iname={elem.name} idesc={elem.des} icity={elem.city} imgname={elem.imgname}/>
      })
    }
   
    </div>
    </div>
  );
}

export default App;
