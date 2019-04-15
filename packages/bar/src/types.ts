export interface IBarChartData {
  width: number,
  height: number,
  data: { [dataKey: string]: number },
}

export interface IBarChartState {
  barWidth: number,
  getBarHeight: (dataKey: string) => number,
  getBarXPosition: (dataKey: string) => number,
  getBarYPosition: (dataKey: string) => number,
}

export type BarChartContext = IBarChartData & IBarChartState
