import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { useState } from "react";

function App2() {
  const [step, setStep] = useState(1);
  const increment = () => {
    setStep(prev => prev + 1)
  }
  const decrement = () => {
      setStep(prev => prev - 1);
  };
  return (
    <section className="step px-6 py-5 rounded-2xl  mt-10 border-2 shadow mx-auto">
      <h2 className="text-center text-black mb-4 font-semibold text-2xl">
        User Registration wizard - Step
      </h2>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      <div className="flex justify-left items-center gap-3 mt-3">
        {step !== 1 && (
          <button className="px-3 py-2 bg-blue-600 text-lg rounded-2xl text-white block w-28" onClick={decrement}>
            Prev
          </button>
        )}
        {step !== 3 ? (
          <button className="px-3 py-2 bg-blue-600 text-lg rounded-2xl text-white block w-28" onClick={increment}>
            Next
          </button>
        ) : (
          <button className="px-3 py-2 bg-blue-600 text-lg rounded-2xl text-white block w-28">
            Submit
          </button>
        )}
      </div>
    </section>
  );
}

export default App2;
