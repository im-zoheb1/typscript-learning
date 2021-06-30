// TYPE ANNOTATIONS IN FUNCTIONS
// code we add to tell typescript what type of arguments a function will rececieve and what type of value a function will return

// TYPE INFERENCE FOR FUNCTIONS
// typescript tries to figure out what type of values a function will return

const add = (a: number, b: number): number => {
  return a + b;
};

// VOID AND NEVER
// void means that function will never return any value
const logger = (message: string): void => {
  console.log(message);
};

// never means that we are never going to reach the end of this function, and we never expect the function to return anything ever
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// destructuring
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeatherES5 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
