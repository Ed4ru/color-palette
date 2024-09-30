import type { ColorPalette, ColorShade } from '../types'
import chromaJs from 'chroma-js'
import { palettes } from '../assets/palettes'
import { deltaE } from './deltaE'

const _shadeIndexMap = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export function findClosestPalette(targetColor: string): ColorPalette {
  const targetLightness = chromaJs(targetColor).get('hsl.l')

  const _palettes = palettes.map(([name, shades]) => {
    const _shades = shades.map((hex, index) => ({
      shade: _shadeIndexMap[index],
      hex,
      delta: deltaE(targetColor, hex),
      lightnessDiff: Math.abs(chromaJs(hex).get('hsl.l') - targetLightness),
    }))

    const closestShade = _shades.reduce((closest, current) =>
      current.delta < closest.delta ? current : closest,
    )

    const closestShadeLightness = _shades.reduce((closest, current) =>
      current.lightnessDiff < closest.lightnessDiff ? current : closest,
    )

    return {
      name,
      shades: _shades,
      closestShade,
      closestShadeLightness,
    }
  })

  return _palettes.reduce((closest, current) =>
    current.closestShade.delta < closest.closestShade.delta ? current : closest,
  )
}
