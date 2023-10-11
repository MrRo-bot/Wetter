import { DotLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="grid w-screen h-screen p-0 m-0 bg-body place-items-center">
      <DotLoader
        color="#fff"
        cssOverride={{
          backgroundColor: "#000",
          borderRadius: 100 + "%",
        }}
        size={40}
      />
    </div>
  );
};

export default Spinner;
