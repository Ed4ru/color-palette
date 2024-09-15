import chromaJs from 'chroma-js'

export function deltaE(color1: string, color2: string): number {
  const labColor1 = chromaJs(color1).lab()
  const labColor2 = chromaJs(color2).lab()

  const lightnessDifference = labColor1[0] - labColor2[0]
  const aAxisDifference = labColor1[1] - labColor2[1]
  const bAxisDifference = labColor1[2] - labColor2[2]

  return Math.sqrt(
    lightnessDifference * lightnessDifference
    + aAxisDifference * aAxisDifference
    + bAxisDifference * bAxisDifference,
  )
}
