import { ChangeEvent } from "react";
import { historyObjTypes, inputTypes } from "../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
type Props = {
  term: string;
  historyobj: historyObjTypes;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (input: inputTypes) => void;
  onSubmit: () => void;
  checkedInput: boolean;
};
const Search = ({
  term,
  historyobj,
  checkedInput,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => {
  const notify = () => toast.error("You should select from list Below!");
  return (
    <main className=" flex bg-gradient-to-tr from-blue-500 via-blue-600 h-full w-full ">
      <section className="w-full lg:p-28 lg:h-[100] h-full p-4 flex flex-col justify-center md:px-10 md:h-screen md:max-w-4xl ">
        <h1 className="text-2xl font-semibold p-2 text-yellow-200 ">
          Weather
          <span className="font-extralight text-xl text-yellow-300">
            (beta)
          </span>
        </h1>
        <div className="flex space-x-4 relative mt-10 md:mt-4 items-center ">
          <input
            placeholder="Check Your City"
            type="text"
            value={term}
            autoFocus
            className=" block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onInputChange}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 "
            onClick={onSubmit}
          >
            Search
          </button>
          <motion.div
            initial={{ opacity: 0, x: "100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="pl-2 flex-col"
          >
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              Recent:
            </p>
            {historyobj.Hcity.map((item: string) => {
              return (
                <section className="flex">
                  <ul className=" list-disc list-inside">
                    <li>{item}</li>
                  </ul>
                </section>
              );
            })}
          </motion.div>
          <ul className="absolute top-12 bg-white ml-1 rounded-sm ">
            {options.map((input: inputTypes, index: number) => (
              <li key={index}>
                <button
                  className="text-left  text-sm w-full hover:bg-gray-600 px-2 py-1 cursor-pointer"
                  onClick={() => onOptionSelect(input)}
                >
                  {input.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ToastContainer limit={1} />
      <div> {checkedInput && notify()}</div>
    </main>
  );
};

export default Search;
