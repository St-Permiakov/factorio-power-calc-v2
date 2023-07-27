// formula source: https://wiki.factorio.com/Power_production#Optimal_ratio
type TProps = {
  dayLength: number,
  nightLength: number,
  dawnLength: number,
  solarPanelOutput: number,
  accumulatorCapacity: number,
}

export const calcNumberOfAccPerSolarPanel = (props: TProps): number => {
  const { dayLength, nightLength, dawnLength, solarPanelOutput, accumulatorCapacity } = props
  const totalDayLength = dayLength + nightLength + dawnLength * 2;

  return (dayLength + dawnLength) * (nightLength + dawnLength * (dayLength + dawnLength) / totalDayLength) / totalDayLength * solarPanelOutput / accumulatorCapacity;
}
