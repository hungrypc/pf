export const keys = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export type BreakpointKey = typeof keys[number]

export type BreakpointValues = {
  [key in BreakpointKey]: number
}

export const breakpointValues: BreakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

const unit = 'px'
const step = 5

export const up = (key: BreakpointKey) => {
  const value = typeof breakpointValues[key] === 'number' ? breakpointValues[key] : key
  return `@media (min-width:${value}${unit})`
}

export const down = (key: BreakpointKey): string => {
  const endIndex = keys.indexOf(key) + 1
  const upperbound = breakpointValues[keys[endIndex]]

  if (endIndex === keys.length) {
    return up('xs')
  }

  const value = endIndex > 0 ? upperbound : breakpointValues[keys[0]]
  return `@media (max-width:${value - step / 100}${unit})`
}

export const between = (start: BreakpointKey, end: BreakpointKey): string => {
  const endIndex = keys.indexOf(end)

  if (endIndex === keys.length - 1) {
    return up(start)
  }

  return (
    `@media (min-width:${breakpointValues[start]}${unit}) and ` +
    `(max-width:${breakpointValues[keys[endIndex + 1]] - step / 100}${unit})`
  )
}

export type Breakpoints = {
  up: typeof up
  down: typeof down
  between: typeof between
  values: BreakpointValues
}

export const breakpoints = {
  up,
  down,
  between,
  values: breakpointValues,
}
