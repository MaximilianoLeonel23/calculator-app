import { useState } from "react";
import ButtonsGrid from "./components/ButtonsGrid";
import Display from "./components/Display";
import Switcher from "./components/Switcher";

const App = (): JSX.Element => {
  const [display, setDisplay] = useState("");
  const [theme, setTheme] = useState("theme1");

  const handleTheme = (): void => {
    switch (theme) {
      case "theme1":
        setTheme("theme2");
        break;
      case "theme2":
        setTheme("theme3");
        break;
      case "theme3":
        setTheme("theme1");
        break;
    }
  };

  return (
    <div className={`background background-${theme}`}>
      <div className="container flex justify-center mx-auto w-full h-full sm:w-fit px-6 py-8">
        <div className="flex flex-col sm:justify-normal gap-y-8  sm:gap-y-4 w-full max-w-[450px]">
          <div
            id="calculator-switcher"
            className={`text-${theme} flex justify-between items-end h-auto`}
          >
            <h4 className="text-2xl">calc</h4>
            <Switcher theme={theme} handleTheme={handleTheme} />
          </div>
          <Display theme={theme} display={display} />
          <ButtonsGrid
            theme={theme}
            display={display}
            setDisplay={setDisplay}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
