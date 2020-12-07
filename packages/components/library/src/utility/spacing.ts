export type Spacing = (value: number) => number

const SPACING_UNIT = 8

export const spacing = (value: number) => value * SPACING_UNIT
