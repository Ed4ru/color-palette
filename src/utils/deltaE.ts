import chromaJs from 'chroma-js'

export function deltaE(color1: string, color2: string): number {
  const lab1 = chromaJs(color1).lab()
  const lab2 = chromaJs(color2).lab()

  return Math.hypot(
    lab1[0] - lab2[0],
    lab1[1] - lab2[1],
    lab1[2] - lab2[2],
  )
}
