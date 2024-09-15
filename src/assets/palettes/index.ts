import type { ColorPalette } from '../../types'

// colors
import { amber } from './amber'
import { blue } from './blue'
import { cyan } from './cyan'
import { emerald } from './emerald'
import { fuchsia } from './fuchsia'
import { green } from './green'
import { indigo } from './indigo'
import { lime } from './lime'
import { orange } from './orange'
import { pink } from './pink'
import { purple } from './purple'
import { red } from './red'
import { rose } from './rose'
import { sky } from './sky'
import { teal } from './teal'
import { violet } from './violet'

import { yellow } from './yellow'
// grayscale
import { gray } from './gray'
import { neutral } from './neutral'
import { slate } from './slate'
import { stone } from './stone'
import { zinc } from './zinc'

export const palettes = [
  { name: 'amber', shades: amber },
  { name: 'blue', shades: blue },
  { name: 'cyan', shades: cyan },
  { name: 'emerald', shades: emerald },
  { name: 'fuchsia', shades: fuchsia },
  { name: 'green', shades: green },
  { name: 'indigo', shades: indigo },
  { name: 'lime', shades: lime },
  { name: 'orange', shades: orange },
  { name: 'pink', shades: pink },
  { name: 'purple', shades: purple },
  { name: 'red', shades: red },
  { name: 'rose', shades: rose },
  { name: 'sky', shades: sky },
  { name: 'teal', shades: teal },
  { name: 'violet', shades: violet },
  { name: 'yellow', shades: yellow },
  { name: 'gray', shades: gray },
  { name: 'neutral', shades: neutral },
  { name: 'slate', shades: slate },
  { name: 'stone', shades: stone },
  { name: 'zinc', shades: zinc },
] satisfies ColorPalette[]
