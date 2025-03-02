import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import StationInput from "./components/StationInput";
import WeatherCard from "./components/WeatherCard"
import { useState } from "react";

const queryClient = new QueryClient();
function App() {
  const [activeStation, setActiveStation] = useState("")

  function handleStationInput(station: string) {
    setActiveStation(station)
  }

  return (

    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col w-full h-full items-center px-4 bg-gray-200">
        <div className="max-w-2xl w-full flex flex-col gap-5">
          <h1 className="mt-10 text-3xl font-bold">Simple Weather App</h1>
          <StationInput onStationSelect={handleStationInput} />
          {activeStation.length == 4 && <WeatherCard station={activeStation} />}
        </div>
      </div>

    </QueryClientProvider>
  )
}

export default App
