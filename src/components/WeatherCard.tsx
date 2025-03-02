import { useWeather } from "../hooks/useWeather"

type Props = {
  station: string
}
export default function WeatherCard(props: Props) {
  const { data: weather, isLoading, isError, error } = useWeather(props.station);

  if (isLoading) {
    return <div className="rounded-md bg-slate-100 p-4 border-slate-400 border-2">
      <p>Loading...</p>
    </div>
  }

  if (isError) {
    return <div className="rounded-md bg-slate-100 p-4 border-slate-400 border-2">
      <p className="text-red-500">Something went wrong: {error.message}</p>
    </div>
  }

  return <div className="flex flex-col gap-4 rounded-md bg-slate-100 p-4 border-slate-400 border-2">
    <div className="flex items-center">
      <div className="grow">
        <p className="text-sm">Current Conditions for {weather!.station}</p>
        <p className="font-bold text-lg ">{weather!.currentConditions}</p>
        <p>{weather!.timestamp.toLocaleString('en-us', {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric"
        })}</p>
      </div>
      <img className="size-16 rounded-md" src={weather!.iconURL} />
    </div>
    <div>
      <p>Temperature: {Math.round(weather!.temp)}&deg;F</p>
      <p>Dew Point: {Math.round(weather!.dewpoint)}&deg;F</p>
      <p>Relative Humidity: {Math.round(weather!.humidity)}%</p>
    </div>
  </div>
}
