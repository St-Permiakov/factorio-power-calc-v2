import { PowerGeneratorType, Preset } from "src/types";

export const DefaultPreset: Preset = {
  id: "41ebc287-fc06-477f-9e53-a3bbc0178443",
  name: "Default",
  description: "Vanilla game values.",
  game: {
    dayLength: 208.33,
    nightLength: 41.66,
    dawnLength: 83.33,
  },
  entities: {
    accumulators: [
      { name: "Accumulator", capacity: 5 }
    ],
    fuels: [
      { name: "Wood", value: 2 },
      { name: "Coal", value: 4 },
      { name: "Solid Fuel", value: 12 },
      { name: "Nuclear Fuel", value: 1210 },
    ],
    generators: [
      { name: "Steam Engine", output: 900, type: PowerGeneratorType.FUEL },
      { name: "Steam Turbine", output: 5820, type: PowerGeneratorType.FUEL },
      { name: "Solar Panel", output: 60, type: PowerGeneratorType.SOLAR },
    ],
    miners: [
      { name: "Burner Drill", speed: 0.25, powerConsumption: 150 },
      { name: "Electric Drill", speed: 0.5, powerConsumption: 90 },
      { name: "Pumpjack", speed: 1, powerConsumption: 90 },
    ]
  }
}
