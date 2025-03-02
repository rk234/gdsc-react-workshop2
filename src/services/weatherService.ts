import axios from "axios";

const baseURL = "https://api.weather.gov";

export type WeatherConditions = {
  station: string,
  currentConditions: string,
  iconURL: string,
  temp: number,
  humidity: number,
  dewpoint: number,
  timestamp: Date
}

export async function getWeatherForStation(stationCode: string): Promise<WeatherConditions> {
  if (stationCode.length < 4) throw new Error("Invalid station code!")

  const resp = await axios.get(`${baseURL}/stations/${stationCode.toUpperCase()}/observations/latest`)
  if (resp.status != 200) throw Error(`Failed to fetch weather conditions for ${stationCode.toUpperCase()}`)

  const data = resp.data
  if (!data) throw Error(`Failed to fetch weather conditions for ${stationCode.toUpperCase()}`)

  const conditions: WeatherConditions = {
    station: stationCode,
    currentConditions: data?.properties?.textDescription ?? "N/A",
    iconURL: data?.properties?.icon ?? "",
    temp: (9.0 / 5.0) * (data?.properties?.temperature?.value ?? 0) + 32,
    humidity: data?.properties?.relativeHumidity?.value ?? -1,
    dewpoint: (9.0 / 5.0) * (data?.properties?.relativeHumidity?.dewPoint ?? 0) + 32,
    timestamp: new Date(data?.properties?.timestamp ?? new Date())
  }

  return conditions;
}


