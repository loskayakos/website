export const basePx = 16
const pxToRem = px => `${px / basePx}rem`

const deviceSize = {
  tablet: 580,
  tabletXL: 991,
  laptop: 1280,
  desktop: 1540,
}

export default {
  pxToRem,

  size: {
    tablet: `${deviceSize.tablet}px`,
    tabletXL: `${deviceSize.tabletXL}px`,
    laptop: `${deviceSize.laptop}px`,
    desktop: `${deviceSize.desktop}px`,
  },

  device: {
    tablet: `screen and (min-width: ${deviceSize.tablet + 1}px)`,
    tabletXL: `screen and (min-width: ${deviceSize.tabletXL + 1}px)`,
    laptop: `screen and (min-width: ${deviceSize.laptop + 1}px)`,
    desktop: `screen and (min-width: ${deviceSize.desktop + 1}px)`,
  },

  color: {
    primary: '#2764AB',
    text: '#000000',
    button: '#52782C',
    headerButton: '#52782C',
    black: '#000000',
    heading: ' #101213',
  },
}
