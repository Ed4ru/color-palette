import type { ColorPalette, ColorShade } from '../types'
import chromaJs from 'chroma-js'
import { palettes } from '../assets/palettes'
import { deltaE } from './deltaE'

export function findClosestPalette(targetColor: string): ColorPalette {
  const _shadeIndexMap = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
  const _palettes = palettes.map((palette) => {
    const _shades = palette.shades.map((_shade, index) => {
      return {
        shade: _shadeIndexMap[index],
        hex: _shade,
        delta: deltaE(targetColor, _shade),
      } satisfies ColorShade
    })
    const _closestShade = _shades.reduce((closest, current) => {
      return (current.delta < closest.delta ? current : closest) satisfies ColorShade
    })
    return {
      name: palette.name,
      shades: _shades,
      closestShade: _closestShade,
    }
  })

  const _closestPalette: ColorPalette = _palettes.reduce((closest, current) => {
    return current.closestShade.delta < closest.closestShade.delta
      ? current
      : closest
  })

  const targetLightness = chromaJs(targetColor).get('hsl.l')

  const _closestPaletteShades = (_closestPalette.shades as ColorShade[]).map(shade => ({
    ...shade,
    lightnessDiff: Math.abs(chromaJs(shade.hex).get('hsl.l') - targetLightness),
  })) satisfies ColorShade[]

  _closestPalette.shades = _closestPaletteShades

  const closestPaletteLightness = _closestPaletteShades.reduce(
    (closest, current) => {
      if (!current.lightnessDiff || !closest.lightnessDiff)
        return closest
      return current.lightnessDiff < closest.lightnessDiff ? current : closest
    },
  )

  _closestPalette.closestShadeLightness = closestPaletteLightness

  return _closestPalette satisfies ColorPalette
}
