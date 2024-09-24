import { htmlColors } from '../assets/colors'
import { deltaE } from './deltaE'

export function findColorName(targetColor: string): string {
  let nearestDelta = Infinity
  let nearestName = ''

  for (const { name, hex } of htmlColors) {
    const delta = deltaE(targetColor, hex)

    if (delta < nearestDelta) {
      nearestDelta = delta
      nearestName = name
    }

    if (delta === 0)
      break // exits if perfect match is found
  }
  return nearestName
}
