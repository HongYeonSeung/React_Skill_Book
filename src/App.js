import "./App.css";
import Banner from "./component/Banner";
import Chapter1 from "./chapter/Chapter1/Chapter1";
import { Route, Routes } from "react-router-dom";
import List from "./component/List";

function App() {
  return (
    <div>
      <Banner></Banner>
      <Chapter1></Chapter1>
    </div>
  );
}

export default App;
