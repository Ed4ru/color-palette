import { htmlColors } from '../assets/colors'
import { deltaE } from './deltaE'

export function findColorName(targetColor: string): string {
  const colorMappingsWithDelta = htmlColors.map(mapping => ({
    ...mapping,
    delta: deltaE(targetColor, mapping.hex),
  }))

  const nearestColor = colorMappingsWithDelta.reduce((nearest, current) =>
    current.delta < nearest.delta ? current : nearest,
  )

  return nearestColor.name
}
