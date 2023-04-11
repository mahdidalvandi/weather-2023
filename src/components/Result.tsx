import { weatherTypes } from "../types";
import { motion } from "framer-motion";
type Props = {
  info: weatherTypes;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp} <sup>°</sup>
  </span>
);

const Result = ({ info }: Props) => {
  const today = info.list[0];
  console.log(today);
  const tomorrow = info.list[8];
  console.log(tomorrow);
  const third: any = info.list[16];
  console.log(third);
  const K_TO_F = (): number => {
    const F = ((Math.round(today.main.temp) - 273.15) * 9) / 5 + 32;
    return F;
  };
  const Day2_K_TO_F = (): number => {
    const F = ((Math.round(tomorrow.main.temp) - 273.15) * 9) / 5 + 32;
    return F;
  };
  const Third_K_TO_F = (): number => {
    const F = ((Math.round(third.main.temp) - 273.15) * 9) / 5 + 32;
    return F;
  };
  const K_TO_S = () => {
    const S = (Math.round(today.main.temp) - 273.15).toFixed(2);
    return S;
  };
  const Day2_K_TO_S = () => {
    const S = (Math.round(tomorrow.main.temp) - 273.15).toFixed(2);
    return S;
  };
  const Third_K_TO_S = () => {
    const S = (Math.round(third.main.temp) - 273.15).toFixed(2);
    return S;
  };
  return (
    <div className="w-full h-full py-4 lg:px-24 lg:h-auto bg-opacity-20 md:py-4 md:px-10 ">
      <div className=" mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {info.name} <span className="font-thin">{info.country}</span>
          </h2>
          <h1 className="text-4pl font-extrabold ">Centigrad: {K_TO_S()}</h1>
          <h2 className="text-3pl font-bold ">
            Kelvin: <Degree temp={Math.round(today.main.temp)} />
          </h2>
          <h3 className="text-2pl font-semibold pb-3">
            Fahrenheit :{K_TO_F().toFixed(2)}
          </h3>
          <p className="text-sm">
            {today.weather[0].main}
            {today.weather[0].description}
          </p>
          <p className="text-sm">
            H: <Degree temp={Math.ceil(today.main.temp_max)} />
            L: <Degree temp={Math.floor(today.main.temp_min)} />
          </p>
        </section>
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
            {info.list.map((item, index) => (
              <div
                key={index}
                className="inline-block text-center w-[50px] flex-shrink-0"
              >
                <p>
                  {index === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="icon"
                />
                <p className="text-sm font-bold">
                  <Degree temp={Math.round(item.main.temp)} />
                </p>
              </div>
            ))}
          </section>
        </motion.div>
      </div>
      <div className="flex justify-center gap-20 py-3">
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <section className="text-center">
            <p>{info.list[8].dt_txt.split(" ")[0]}</p>
            <h2 className="text-2xl font-black">
              {info.name} <span className="font-thin">{info.country}</span>
            </h2>
            <h1 className="text-4pl font-extrabold ">
              Centigrad: {Day2_K_TO_S()}
            </h1>
            <h2 className="text-3pl font-bold ">
              Kelvin: <Degree temp={Math.round(tomorrow.main.temp)} />
            </h2>
            <h3 className="text-2pl font-semibold pb-3">
              Fahrenheit :{Day2_K_TO_F().toFixed(2)}
            </h3>
            <p className="text-sm">
              {tomorrow.weather[0].main}
              {tomorrow.weather[0].description}
            </p>
            <p className="text-sm">
              H: <Degree temp={Math.ceil(tomorrow.main.temp_max)} />
              L: <Degree temp={Math.floor(tomorrow.main.temp_min)} />
            </p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <section className="text-center">
            <p>{info.list[16].dt_txt.split(" ")[0]}</p>
            <h2 className="text-2xl font-black">
              {info.name} <span className="font-thin">{info.country}</span>
            </h2>
            <h1 className="text-4pl font-extrabold ">
              Centigrad: {Third_K_TO_S()}
            </h1>
            <h2 className="text-3pl font-bold ">
              Kelvin: <Degree temp={Math.round(third.main.temp)} />
            </h2>
            <h3 className="text-2pl font-semibold pb-3">
              Fahrenheit :{Third_K_TO_F().toFixed(2)}
            </h3>
            <p className="text-sm">
              {third.weather[0].main}
              {third.weather[0].description}
            </p>
            <p className="text-sm">
              H: <Degree temp={Math.ceil(third.main.temp_max)} />
              L: <Degree temp={Math.floor(third.main.temp_min)} />
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Result;
