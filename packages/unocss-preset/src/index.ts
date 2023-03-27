import {Preset, Rule} from "@unocss/core";

const rules: Rule[] = []

export const presetMini = (): Preset => {
  return {
    name: '@denkwerk/unocss-preset',
    rules,
  }
}
