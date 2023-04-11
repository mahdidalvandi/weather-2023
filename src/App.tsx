import { useState, ChangeEvent, useEffect } from "react";
import { inputTypes } from "./types";
import Search from "./components/Search";
import Result from "./components/Result";
function App() {
  const key = "93d57e27458699ed36f48d010c619d5d";
  // key haye mohem behtare az env estefade beshe :)
  const [options, setOptions] = useState<[]>([]);
  const [term, setTerm] = useState<string>("");
  const [city, setcity] = useState<inputTypes | null>(null);
  const [info, setInfo] = useState<null>(null);
  const [checkedInput, setCheckedInput] = useState<boolean>(false);
  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=10&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === "") return;
    getSearchOptions(value);
  };
  const onOptionSelect = (input: inputTypes) => {
    setcity(input);
  };
  const getInfo = (city: inputTypes) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        const dataInfo = { ...data.city, list: data.list.slice(0, 17) };
        setInfo(dataInfo);
      });
    setTerm("");
  };
  const onSubmit = () => {
    if (!city) return setCheckedInput(true);
    getInfo(city);
  };

  var historyObj = { Hcity: [] };

  function onLoad() {
    if (localStorage.getItem("history") || "") {
      if (historyObj !== null)
        historyObj = JSON.parse(localStorage.getItem("history") || "");
    }
  }
  onLoad();

  useEffect(() => {
    function addHistory() {
      if (city) {
        setTerm(city.name);
        setOptions([]);
        //@ts-ignore
        historyObj.Hcity.push(city?.name);
        localStorage.setItem("history", JSON.stringify(historyObj));
      }
    }
    addHistory();
  }, [city]);

  return (
    <main className=" flex relative justify-center items-center bg-gradient-to-tr from-blue-500 via-blue-600 h-full w-full ">
      {info ? (
        <Result info={info} />
      ) : (
        <Search
          term={term}
          options={options}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
          onInputChange={onInputChange}
          checkedInput={checkedInput}
          historyObj={historyObj}
        />
      )}
    </main>
  );
}

export default App;
