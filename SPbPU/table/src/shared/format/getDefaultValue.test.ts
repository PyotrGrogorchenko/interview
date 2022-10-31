import { getDefaultValue } from './getDefaultValue'

test('function getDefaultValue: text', () => {
  expect(getDefaultValue('text', '0')).toEqual('')
  expect(getDefaultValue('text', '')).toEqual('')
  expect(getDefaultValue('text', 'random')).toEqual('')
})

test('function getDefaultValue: number', () => {
  expect(getDefaultValue('number', '0')).toEqual('0')
  expect(getDefaultValue('number', '0.')).toEqual('0.')
  expect(getDefaultValue('number', '0.0')).toEqual('0.0')
  expect(getDefaultValue('number', '0.00')).toEqual('0.00')
  expect(getDefaultValue('number', '0.000')).toEqual('0.000')
})

