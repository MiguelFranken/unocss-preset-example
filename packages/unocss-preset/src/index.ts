import {Preset, Rule} from "@unocss/core";

const rules: Rule[] = [
  ['m-16', { margin: '4rem' }]
]

export const presetMini = (): Preset => {
  return {
    name: '@denkwerk/unocss-preset',
    rules,
  }
}
