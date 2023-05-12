import Button from "./Button";
interface Props {
  theme: string;
  display: string;
  setDisplay: (display: string) => void;
}

const ButtonsGrid = ({ theme, display, setDisplay }: Props): JSX.Element => {
  return (
    <div>
      <div
        className={`btn-container-${theme} flex flex-col gap-4 sm:gap-y-6 sm:h-fit w-full rounded-md p-6`}
      >
        <div className="grid grid-cols-4 grid-rows-4 gap-4 sm:gap-6">
          <Button label="7" value="7" {...{ theme, display, setDisplay }} />
          <Button label="8" value="8" {...{ theme, display, setDisplay }} />
          <Button label="9" value="9" {...{ theme, display, setDisplay }} />
          <Button
            label="DEL"
            value="7"
            {...{ theme, display, setDisplay }}
            del={true}
          />
          <Button label="4" value="4" {...{ theme, display, setDisplay }} />
          <Button label="5" value="5" {...{ theme, display, setDisplay }} />
          <Button label="6" value="6" {...{ theme, display, setDisplay }} />
          <Button
            label="+"
            value="+"
            {...{ theme, display, setDisplay }}
            operation={true}
          />
          <Button label="1" value="1" {...{ theme, display, setDisplay }} />
          <Button label="2" value="2" {...{ theme, display, setDisplay }} />
          <Button label="3" value="3" {...{ theme, display, setDisplay }} />
          <Button
            label="-"
            value="-"
            {...{ theme, display, setDisplay }}
            operation={true}
          />
          <Button label="." value="." {...{ theme, display, setDisplay }} />
          <Button label="0" value="0" {...{ theme, display, setDisplay }} />
          <Button
            label="/"
            value="/"
            {...{ theme, display, setDisplay }}
            operation={true}
          />
          <Button
            label="x"
            value="*"
            {...{ theme, display, setDisplay }}
            operation={true}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button
            label="RESET"
            value="/"
            {...{ theme, display, setDisplay }}
            reset={true}
          />
          <Button
            label="="
            value="*"
            {...{ theme, display, setDisplay }}
            result={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonsGrid;
