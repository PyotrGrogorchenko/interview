import { getDefaultFormat } from './getDefaultFormat'

test('function getDefaultFormat', () => {
  expect(getDefaultFormat('date')).toEqual('DD.MM.YYYY')
  expect(getDefaultFormat('number')).toEqual('0.000')
  expect(getDefaultFormat('text')).toEqual('')
  expect(getDefaultFormat('random')).toEqual('')
})
