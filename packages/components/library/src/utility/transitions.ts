export interface Easing {
  easeInOut: string
  easeOut: string
  easeIn: string
  sharp: string
}

export interface Duration {
  shortest: number
  shorter: number
  short: number
  standard: number
  complex: number
  enteringScreen: number
  leavingScreen: number
}

const easing: Easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
}

const duration: Duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
}

const formatMs = (milliseconds: number): string => {
  return `${Math.round(milliseconds)}ms`
}

type Props = string
type Option = { duration?: number; easing?: string; delay?: number }

export const create = (props: Props | Props[] = 'all', options: Option = {}) => {
  const { duration: durationOption = duration.standard, easing: easingOption = easing.easeInOut, delay = 0 } = options

  return (Array.isArray(props) ? props : [props])
    .map(animatedProp => `${animatedProp} ${formatMs(durationOption)} ${easingOption} ${formatMs(delay)}`)
    .join(',')
}

export const transitions = {
  create,
  duration,
  easing,
}
