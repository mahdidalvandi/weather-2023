export type inputTypes = {
  name: string;
  lat: number;
  lon: number;
};
export type historyObjTypes = {
  Hcity: [name: string];
};
export type weatherTypes = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  list: [
    {
      dt: number;
      dt_txt: string;
      main: {
        feels_like: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          main: string;
          icon: string;
          description: string;
        }
      ];
      wind: {
        speed: number;
        gust: number;
        deg: number;
      };
      clouds: {
        all: number;
      };
      pop: number;
      visibility: number;
    }
  ];
};
