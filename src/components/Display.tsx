interface Props {
  theme: string;
  display: string;
}

const Display = ({ theme, display }: Props): JSX.Element => {
  return (
    <div>
      <div className={`display-${theme} h-24 w-full rounded-md`}>
        <div className="flex items-center justify-end p-6 h-full">
          <h1 className={`text-${theme} text-5xl overflow-hidden`}>
            {display}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Display;
