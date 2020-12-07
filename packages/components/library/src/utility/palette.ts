export type Color = string

export type BaseColor = {
  main: Color
}

export type PaletteColor = BaseColor & {
  light: Color
}

export type StatusColor = BaseColor & {
  background: Color
}

type GetColorVariant<T extends AnyColor> = T extends PaletteKey
  ? keyof PaletteColor
  : T extends StatusKey
  ? keyof StatusColor
  : keyof BaseColor

export type AnyColor =
  | keyof typeof common
  | keyof typeof grey
  | keyof typeof mainColors
  | keyof typeof others
  | keyof typeof status
  | 'textPrimary'

export type PaletteKey = 'primary' | 'secondary' | 'tertiary'

export type StatusKey = 'success' | 'info' | 'warning' | 'alert'

export type Palette = {
  getColor: (key: AnyColor, variant?: GetColorVariant<typeof key>) => string
  primary: PaletteColor
  secondary: PaletteColor
  tertiary: PaletteColor
  common: {
    white: Color
    black: Color
  }
  status: {
    success: StatusColor
    info: StatusColor
    warning: StatusColor
    alert: StatusColor
  }
  text: {
    primary: BaseColor
  }
  others: {
    [key: string]: Color
  }
  grey: {
    60: Color
    50: Color
    30: Color
    10: Color
    5: Color
  }
}

const GREEN = '#00B96F'
const DARK_BLUE = '#252E54'
const DARK_YELLOW = '#DBA20C'
const LIGHT_BLUE = '#EBF2FA'
const LIGHT_YELLOW = '#FFF4D7'
const LIGHT_GREEN = '#E4F3ED'

const mainColors = {
  primary: {
    main: GREEN,
    light: LIGHT_GREEN,
  },
  secondary: {
    main: DARK_BLUE,
    light: LIGHT_BLUE,
  },
  tertiary: {
    main: DARK_YELLOW,
    light: LIGHT_YELLOW,
  },
}

const common = {
  white: '#FFFFFF',
  black: '#000000',
}

const others = {
  albaster: '#F3F1EA',
}

const status = {
  success: {
    main: GREEN,
    background: LIGHT_GREEN,
  },
  info: {
    main: '#4A90E2',
    background: LIGHT_BLUE,
  },
  warning: {
    main: DARK_YELLOW,
    background: LIGHT_YELLOW,
  },
  alert: {
    main: '#BE2E36',
    background: '#F9EAEB',
  },
}

const grey = {
  60: '#676767',
  50: '#808080',
  30: '#B4B4B4',
  10: '#E7E7E7',
  5: '#F3F3F3',
}

const text = {
  primary: {
    main: DARK_BLUE,
  },
}

export const paletteColors = {
  ...mainColors,
  common: common,
  others,
  status,
  text,
  grey,
}

const isMainColor = (color: AnyColor): color is PaletteKey => !!mainColors[color as keyof typeof mainColors]

const isStatusColor = (color: AnyColor): color is StatusKey => !!status[color as keyof typeof status]

export const palette: Palette = {
  ...paletteColors,
  getColor: (key: AnyColor, variant: 'light' | 'main' | 'background' = 'main'): string => {
    if (!key) return

    if (isMainColor(key)) {
      return mainColors[key][variant as keyof PaletteColor]
    }

    if (isStatusColor(key)) {
      return status[key][variant as keyof StatusColor]
    }

    if (key.toString().startsWith('text')) {
      if (key === 'textPrimary') {
        return text.primary[variant as keyof BaseColor]
      }
    }

    if (grey[key as keyof typeof grey]) {
      return grey[key as keyof typeof grey]
    }

    if (others[key as keyof typeof others]) {
      return others[key as keyof typeof others]
    }

    if (common[key as keyof typeof common]) {
      return common[key as keyof typeof common]
    }

    return
  },
}
