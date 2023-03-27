import {Preset, Rule} from "@unocss/core";

const rules: Rule[] = [
  [/^m-(\d+)$/, ([, d]) => ({ margin: `${+d / 4}rem` })],
  [/^p-(\d+)$/, ([, d]) => ({ padding: `${+d / 4}rem` })],
]

export const presetMini = (): Preset => {
  return {
    name: '@denkwerk/unocss-preset',
    rules,
  }
}
