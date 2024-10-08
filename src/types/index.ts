export type HtmlColor = [string, string]

export interface ColorShade {
  shade: number
  hex: string
  delta?: number
  lightnessDiff?: number
}

export type ColorShades = [
  string, // hex code for the shade 50
  string, // ... 100
  string, // ... 200
  string, // ... 300
  string, // ... 400
  string, // ... 500
  string, // ... 600
  string, // ... 700
  string, // ... 800
  string, // ... 900
  string, // ... 950
]

export type BaseColorPalette = [string, ColorShades]

export interface ColorPalette {
  name: string
  shades: ColorShade[] | ColorShades
  closestShade?: ColorShade
  closestShadeLightness?: ColorShade
}
