import { useQuery } from "@tanstack/react-query";
import { getWeatherForStation, WeatherConditions } from "../services/weatherService";

export function useWeather(station: string) {
  return useQuery<WeatherConditions>({
    queryKey: ['weather', station],
    queryFn: () => getWeatherForStation(station)
  })
}
