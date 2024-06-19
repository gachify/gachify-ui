const components = [
  'label',
  'input',
  'textarea',
  'checkbox',
  'button',
  'chip',
  'slider',
  'card',
  'image',
  'container',
  'link',
] as const

type SelectorSuffix = (typeof components)[number]
export type SelectorWithSuffix = `${string}-${SelectorSuffix}`

type SelectorNameSuffix = (typeof components)[number]
type SelectorNameWithSuffix = `${string}${Capitalize<SelectorNameSuffix>}`

export type Selectors = Record<SelectorNameWithSuffix, SelectorWithSuffix>
