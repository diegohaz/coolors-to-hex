// @flow

/**
 * Returns an array of hexadecimal string colors.
 */
const coolorsToHex = (url: string): Array<string> =>
  url.replace(/^.+\/([^/]+)$/, '$1').split('-').map(hex => `#${hex}`)

export default coolorsToHex
