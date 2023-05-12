interface Props {
  theme: string;
  handleTheme: () => void;
}

const Switcher = ({ theme, handleTheme }: Props): JSX.Element => {
  return (
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
          <div className={`switcher-btn-${theme} h-4 w-4 rounded-full`}></div>
        </button>
      </div>
    </div>
  );
};

export default Switcher;
