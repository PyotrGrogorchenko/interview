import { chekFormat } from './chekFormat'

test('function getDefaultFormat: text', () => {
  expect(chekFormat('text', '')).toEqual(true)
  expect(chekFormat('text', 'text')).toEqual(true)
})

test('function getDefaultFormat: number', () => {
  expect(chekFormat('number', '0')).toEqual(true)
  expect(chekFormat('number', '0.0')).toEqual(true)
  expect(chekFormat('number', '0.00')).toEqual(true)
  expect(chekFormat('number', '0.000')).toEqual(true)
  expect(chekFormat('number', '')).toEqual(false)
  expect(chekFormat('number', '00.0')).toEqual(false)
  expect(chekFormat('number', '0.0000')).toEqual(false)
  expect(chekFormat('number', '00')).toEqual(false)
})

test('function getDefaultFormat: date', () => {
  expect(chekFormat('date', '')).toEqual(false)
  expect(chekFormat('date', 'DD.MMM.YYYY')).toEqual(false)
  expect(chekFormat('date', 'DDD.MM.YYYY')).toEqual(false)
  expect(chekFormat('date', 'DD.MM.YYYYY')).toEqual(false)
  expect(chekFormat('date', '..')).toEqual(true)
  expect(chekFormat('date', 'D.M.YY')).toEqual(true)
  expect(chekFormat('date', 'DD.M.')).toEqual(true)
  expect(chekFormat('date', '..YY')).toEqual(true)
  expect(chekFormat('date', 'MM.DD.YYYY')).toEqual(true)
  expect(chekFormat('date', 'YYYY.DD.MM')).toEqual(true)
  expect(chekFormat('date', 'DD.YYYY.MM')).toEqual(true)
})
