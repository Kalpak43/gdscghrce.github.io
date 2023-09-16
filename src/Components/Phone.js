import { motion } from "framer-motion";

const Phone = () => {

  return (
    <section className="grid place-content-center md:p-24 p-12">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
      }}
      className="phone rounded-[24px] bg-blue-500"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        className="float-phone relative h-[30rem] w-[18rem] rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">

      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
        {/* <iframe src="https://gdscghrce.netlify.app/" className="h-full absolute w-full"></iframe> */}
    </div>
  );
};

export default Phone;