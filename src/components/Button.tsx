interface IProps {
  label: string;
  value?: string;
  theme: string;
  display: string;
  setDisplay: (display: any) => void;
  del?: boolean;
  reset?: boolean;
  result?: boolean;
  operation?: boolean;
}

const Button = ({
  label,
  value,
  theme,
  setDisplay,
  display,
  del,
  reset,
  result,
  operation,
}: IProps): JSX.Element => {
  // Operations function
  const addSymbol = (symbol: string) => {
    if (display.slice(-1) !== " " && display.slice(-1) !== ".") {
      setDisplay(display + symbol);
    }
  };

  // Delete one character
  const handleDelete = () => {
    if (display.slice(-1) === " ") {
      setDisplay(display.substring(0, display.length - 3));
    } else if (display.slice(-2) === "0.") {
      setDisplay(display.substring(0, display.length - 2));
    } else {
      setDisplay(display.substring(0, display.length - 1));
    }
  };

  // Calculate all operations
  const calcResult = () => {
    if (display.length >= 5 && display.slice(-1) !== " ") {
      setDisplay(eval(display).toString());
    }
  };

  if (reset) {
    return (
      <button
        className={`btn-xl btn-del-${theme} btn-del-shadow-${theme}`}
        onClick={() => setDisplay("")}
      >
        {label}
      </button>
    );
  } else if (del) {
    return (
      <button
        className={`btn-xl btn-del-${theme} btn-del-shadow-${theme}`}
        onClick={handleDelete}
      >
        {label}
      </button>
    );
  } else if (result) {
    return (
      <button
        className={`btn-xl btn-result-${theme} btn-result-shadow-${theme}`}
        onClick={calcResult}
      >
        {label}
      </button>
    );
  } else if (operation) {
    return (
      <button
        className={`btn btn-${theme} btn-shadow-${theme}`}
        onClick={() => display.length >= 1 && addSymbol(` ${value} `)}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        className={`btn btn-${theme} btn-shadow-${theme}`}
        onClick={() => setDisplay(display + value)}
      >
        {label}
      </button>
    );
  }
};

export default Button;
