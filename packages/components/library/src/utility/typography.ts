export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'bolder' | 'lighter'

export interface FontFamilyVariants {
  bold?: string
  normal?: string
}

export interface FontFamilies {
  header: FontFamilyVariants
  body: FontFamilyVariants
}

export interface FontStyle {
  fontFamily?: React.CSSProperties['fontFamily']
  fontSize?: React.CSSProperties['fontSize']
  lineHeight?: React.CSSProperties['lineHeight']
  letterSpacing?: React.CSSProperties['letterSpacing']
  fontWeight?: Weight
  textTransform?: React.CSSProperties['textTransform']
}

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'quote'
  | 'body'
  | 'bodyBig'
  | 'bodySmall'
  | 'caption'
  | 'button'
  | 'bodyBold'
  | 'tag'

export interface ThemeTypography {
  fontFamilies: FontFamilies
  variants: { [key in TypographyVariants]: FontStyle }
}

const fontFamilies = {
  header: {
    bold: 'Gilroy-Bold',
    normal: 'Gilroy-Bold',
  },
  body: {
    normal: 'Inter',
  },
}

const body = {
  fontFamily: fontFamilies.body.normal,
  fontStyle: 'normal',
  fontWeight: 'normal' as const,
  fontSize: '16px',
  lineHeight: '28px',
}

const header = {
  fontFamily: fontFamilies.header.bold,
}

const formatPx = (milliseconds: number): string => {
  return `${Math.round(milliseconds)}px`
}

export const typography: ThemeTypography = {
  fontFamilies,
  variants: {
    h1: {
      ...header,
      fontSize: formatPx(70),
      lineHeight: '108.92%',
      letterSpacing: -1,
    },
    h2: {
      ...header,
      fontSize: formatPx(52),
      lineHeight: formatPx(61),
      letterSpacing: -1,
    },
    h3: {
      ...header,
      fontSize: formatPx(34),
      lineHeight: formatPx(40),
      letterSpacing: -0.5,
    },
    h4: {
      ...header,
      fontSize: formatPx(22),
      lineHeight: '145.23%',
    },
    quote: {
      ...header,
      fontSize: formatPx(26),
      lineHeight: formatPx(36),
      fontWeight: 500,
    },
    bodyBig: {
      ...body,
      fontSize: formatPx(22),
      lineHeight: formatPx(32),
    },
    body,
    bodySmall: {
      ...body,
      fontSize: formatPx(14),
      lineHeight: formatPx(24),
    },
    bodyBold: {
      ...body,
      fontWeight: 'bold',
    },
    button: {
      ...body,
      fontWeight: 600,
      fontSize: formatPx(18),
      lineHeight: formatPx(22),
    },
    caption: {
      ...body,
      fontSize: formatPx(12),
      lineHeight: formatPx(24),
    },
    tag: {
      ...body,
      fontSize: formatPx(12),
      lineHeight: formatPx(15),
      fontWeight: 600,
      letterSpacing: 0.5,
      textTransform: 'uppercase',
    },
  },
}
