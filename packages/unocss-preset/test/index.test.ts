import { describe, expect, it } from 'vitest'
import echo from '../src'

describe('packageName', () => {
  it('pass', () => {
    expect(echo('Hello World')).toBe('Hello World')
  })
})
