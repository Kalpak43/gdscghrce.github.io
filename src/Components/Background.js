import "../BG/style.css"
const Background = () => {
  let cells = [];

  for (let i = 0; i <= 144; i++) {
    cells.push(
      <div className="square">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  }

  return (
    <div className="absolute h-full w-full bg-transparent grid grid-rows-12 grid-columns-12 z-0 fixed top-0 left-0 z-index-0">
        {cells}
    </div>);
};

export default Background;
