import "./App.css";
import Feed from "./Components/Feed/Feed.jsx";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [menuBar, setMenuBar] = useState("sidebar");
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 841) {
        setMenuBar("sidebar");
      }
    };

    window.addEventListener("resize", handleScroll);

    //  Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Sidebar setMenuBar={setMenuBar} menuBar={menuBar} />

        <div className="contents">
          <Navbar setMenuBar={setMenuBar} />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
