const palette = {
  olive: '#606c38',
  forest: '#283618',
  cream: '#fefae0',
  apricot: '#dda15e',
  orange: '#bc6c25',
}

const semantic = {
  primary: palette.olive,
  secondary: palette.forest,
  negative: palette.orange,
}

export const colorTokens = {
  ...palette,
  ...semantic,
}

export type ColorTokens = keyof typeof colorTokens
