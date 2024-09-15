export interface HtmlColor {
  name: string
  hex: string
}

export interface ColorShade {
  shade: number
  hex: string
  delta?: number
  lightnessDiff?: number
}

export type ColorShades = [
  string, // 50
  string, // 100
  string, // 200
  string, // 300
  string, // 400
  string, // 500
  string, // 600
  string, // 700
  string, // 800
  string, // 900
  string, // 950
]

export interface ColorPalette {
  name: string
  shades: ColorShade[] | ColorShades
  closestShade?: ColorShade
  closestShadeLightness?: ColorShade
}
