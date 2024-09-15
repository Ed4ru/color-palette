import type { ColorShade } from './types'
import chromaJs from 'chroma-js'
import { findClosestPalette } from './utils/findClosestPalette'
import { findColorName } from './utils/findColorName'

export function generateCustomPalette(baseColor: string) {
  const closestPalette = findClosestPalette(baseColor)
  const baseChroma = chromaJs(baseColor)
  const baseHue = baseChroma.get('hsl.h')
  const baseSaturation = baseChroma.get('hsl.s')
  const closestShadeHexcode
    = closestPalette.closestShadeLightness?.hex || baseColor
  const closestShadeChroma = chromaJs(closestShadeHexcode)
  const closestShadeHue = closestShadeChroma.get('hsl.h')
  const closestShadeSaturation = closestShadeChroma.get('hsl.s')

  let hueDifference = 0
  let saturationRatio = 1

  hueDifference = ((baseHue - closestShadeHue + 540) % 360) - 180
  saturationRatio = baseSaturation / (closestShadeSaturation || 1)

  const formattedHueDifference
    = hueDifference === 0
      ? closestShadeHue.toString()
      : hueDifference > 0
        ? `+${hueDifference}`
        : hueDifference.toString()

  const nearestColorName = findColorName(baseColor)
  const generatedPalette = {
    id: `${nearestColorName}-${Math.random().toString(36).substr(2, 3)}`,
    name: nearestColorName,
    shades: (closestPalette.shades as ColorShade[]).map((shade) => {
      let adjustedColor = shade.hex
      const shadeChroma = chromaJs(adjustedColor)

      const adjustedSaturation = shadeChroma.get('hsl.s') * saturationRatio
      adjustedColor = shadeChroma
        .set('hsl.s', adjustedSaturation)
        .set('hsl.h', formattedHueDifference)
        .hex()

      if (closestPalette.closestShadeLightness?.shade === shade.shade) {
        adjustedColor = baseChroma.hex()
      }

      return {
        shade: shade.shade,
        hex: adjustedColor,
      }
    }),
  }

  return generatedPalette
}
