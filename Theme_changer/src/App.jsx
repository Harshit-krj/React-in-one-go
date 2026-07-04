import { useState, useEffect } from "react";
import ThemeBtn from "./component/ThemeBtn";
import Card from "./component/Card";
import { Provider } from "./context/ThemeContext";

function App() {
  const [theme, settheme] = useState("light");
  const darktheme = () => {
    settheme("dark");
  };
  const lightheme = () => {
    settheme("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark","light");
    document.querySelector("html").classList.add(theme);
  },[theme]);
  return (
    <Provider value={{ theme, darktheme, lightheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
