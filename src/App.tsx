import { useState } from "react";
import Button from "./components/Button";

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
            <div className="flex gap-8 items-end">
              <p className="text-xs tracking-widest">THEME</p>
              <div className="flex flex-col justify-center items-center w-16">
                <ul className="flex gap-4 text-xs">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
                <button
                  className={`flex items-center switcher-${theme} h-5 w-full rounded-xl py-2`}
                  onClick={handleTheme}
                >
                  <div
                    className={`switcher-btn-${theme} h-4 w-4 rounded-full`}
                  ></div>
                </button>
              </div>
            </div>
          </div>
          <div id="calculator-display">
            <div className={`display-${theme} h-24 w-full rounded-md`}>
              <div className="flex items-center justify-end p-6 h-full">
                <h1 className={`text-${theme} text-5xl overflow-hidden`}>
                  {display}
                </h1>
              </div>
            </div>
          </div>
          <div id="calculator-body">
            <div
              className={`btn-container-${theme} flex flex-col gap-4 sm:gap-y-6 sm:h-fit w-full rounded-md p-6`}
            >
              <div className="grid grid-cols-4 grid-rows-4 gap-4 sm:gap-6">
                <Button
                  label="7"
                  value="7"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="8"
                  value="8"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="9"
                  value="9"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="DEL"
                  value="7"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                  del={true}
                />
                <Button
                  label="4"
                  value="4"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="5"
                  value="5"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="6"
                  value="6"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="+"
                  value="+"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                  operation={true}
                />
                <Button
                  label="1"
                  value="1"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="2"
                  value="2"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="3"
                  value="3"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="-"
                  value="-"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                  operation={true}
                />
                <Button
                  label="."
                  value="."
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="0"
                  value="0"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                />
                <Button
                  label="/"
                  value="/"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                  operation={true}
                />
                <Button
                  label="x"
                  value="*"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                  operation={true}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  label="RESET"
                  value="/"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                  reset={true}
                />
                <Button
                  label="="
                  value="*"
                  display={display}
                  setDisplay={setDisplay}
                  theme={theme}
                  result={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
