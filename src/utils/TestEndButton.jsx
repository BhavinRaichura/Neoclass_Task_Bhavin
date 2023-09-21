import testEndHandler from "./TestEndHandler";

const TestEndButton = ({ handler }) => {
  return (
    <div className="">
      <button
        className="border-2 border-red-500 rounded-sm px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white"
        onClick={handler}
      >
        End Test
      </button>
    </div>
  );
};

export default testEndHandler(TestEndButton);
