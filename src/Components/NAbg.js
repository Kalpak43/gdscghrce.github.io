export default function Nabg() {
  return (
    <div
      className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center z-[-2] bg-white"
      style={{ transform: `scale(13)` }}
    >
      <div className="md:h-5/6 h-3/6 aspect-square grid grid-cols-3 grid-rows-3">
        <div className="h-full w-full">
          <div className="blob blob-1"></div>
        </div>
        <div className="h-full w-full">
          <div className="blob blob-2"></div>
        </div>
        <div className="h-full w-full">
          <div className="blob blob-3"></div>
        </div>
        <div className="h-full w-full">
          <div className="blob blob-4"></div>
        </div>
        <div className="h-full w-full bg-white grid grid-cols-3 grid-rows-3">
          <div className="h-full w-full">
            <div className="blob blob-1"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-2"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-3"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-4"></div>
          </div>
          <div className="h-full w-full"></div>
          <div className="h-full w-full">
            <div className="blob blob-1"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-2"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-3"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-4"></div>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="blob blob-1"></div>
        </div>
        <div className="h-full w-full">
          <div className="blob blob-2"></div>
        </div>
        <div className="h-full w-full">
          <div className="blob blob-3"></div>
        </div>
        <div className="h-full w-full">
          <div className="blob blob-4"></div>
        </div>
      </div>
    </div>
  );
}
