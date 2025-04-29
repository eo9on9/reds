const step = {
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  40: '40px',
}

const semantic = {
  none: '0px',
  auto: 'auto',
  full: '100%',
}

export const spacingTokens = {
  ...step,
  ...semantic,
}

export type SpacingTokens = keyof typeof spacingTokens
