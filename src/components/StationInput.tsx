import { useState } from "react";

type Props = {
  onStationSelect: (station: string) => void
}

export default function StationInput(props: Props) {
  return <div className="flex gap-2 w-full">
    <input
      placeholder="Enter a station code like KDCA"
      className="bg-slate-100 border-2 border-slate-400 px-2 grow rounded-md"
      type="text" value={} onChange={} />
    <button
      className="bg-sky-500 hover:bg-sky-400 border-sky-400 transition active:bg-sky-600 active:border-sky-600 cursor-pointer border-2 font-bold rounded-md text-white p-2"
      onClick={}
    >
      Get Weather!
    </button>
  </div>
}
