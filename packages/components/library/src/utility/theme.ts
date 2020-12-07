import { breakpoints, Breakpoints } from './breakpoints'
import { dimensions } from './dimensions'
import { palette, Palette } from './palette'
import { shadows, Shadows } from './shadows'
import { spacing, Spacing } from './spacing'
import { transitions } from './transitions'
import { typography, ThemeTypography } from './typography'

export interface Theme {
  breakpoints: Breakpoints
  dimensions: typeof dimensions
  palette: Palette
  shadows: Shadows
  typography: ThemeTypography
  spacing: Spacing
  transitions: typeof transitions
}

export const theme: Theme = {
  breakpoints,
  palette,
  shadows,
  typography,
  spacing,
  transitions,
  dimensions,
}
