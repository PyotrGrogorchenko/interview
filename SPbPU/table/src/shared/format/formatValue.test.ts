import { formatValue } from './formatValue'

test('function checkValue: text', () => {
  expect(formatValue('text', '', '')).toEqual('')
  expect(formatValue('text', '', 'text')).toEqual('text')
})

test('function checkValue: number', () => {
  expect(formatValue('number', '0', '1.2')).toEqual(null)
  expect(formatValue('number', '0', 'a')).toEqual(null)
  expect(formatValue('number', '0', '1')).toEqual('1')
  expect(formatValue('number', '0', '01')).toEqual('01')

  expect(formatValue('number', '0.', 'a')).toEqual(null)
  expect(formatValue('number', '0.', '1')).toEqual(null)
  expect(formatValue('number', '0.', '1.2')).toEqual('1.')
  expect(formatValue('number', '0.', '01.2')).toEqual('01.')
  expect(formatValue('number', '0.', '1.')).toEqual('1.')
  expect(formatValue('number', '0.', '01.')).toEqual('01.')

  expect(formatValue('number', '0.0', '0.')).toEqual('0.0')
  expect(formatValue('number', '0.0', '1')).toEqual(null)
  expect(formatValue('number', '0.0', '1.2')).toEqual('1.2')
  expect(formatValue('number', '0.0', '01.2')).toEqual('01.2')
  expect(formatValue('number', '0.0', '1.')).toEqual('1.0')
  expect(formatValue('number', '0.0', '01.')).toEqual('01.0')
  expect(formatValue('number', '0.0', '01.2')).toEqual('01.2')
  expect(formatValue('number', '0.0', '01.22')).toEqual('01.2')

  expect(formatValue('number', '0.00', '0.')).toEqual('0.00')
  expect(formatValue('number', '0.00', '1')).toEqual(null)
  expect(formatValue('number', '0.00', '1.2')).toEqual('1.20')
  expect(formatValue('number', '0.00', '01.2')).toEqual('01.20')
  expect(formatValue('number', '0.00', '1.')).toEqual('1.00')
  expect(formatValue('number', '0.00', '01.')).toEqual('01.00')
  expect(formatValue('number', '0.00', '01.2')).toEqual('01.20')
  expect(formatValue('number', '0.00', '01.22')).toEqual('01.22')

  expect(formatValue('number', '0.000', '0.')).toEqual('0.000')
})

test('function checkValue: date', () => {
  expect(formatValue('date', '..', '1.1.1')).toEqual('')
  expect(formatValue('date', 'yy.mm.dd', '22.25.45')).toEqual('22.12.31')
  expect(formatValue('date', 'DD.MM.YYYY', '31.2.2022')).toEqual('28.2.2022')
  expect(formatValue('date', 'YYYY.DD.MM', '2022.31.2')).toEqual('2022.28.2')
  expect(formatValue('date', 'MM.YYYY.DD', '2.2022.31')).toEqual('2.2022.28')
  expect(formatValue('date', 'DD.MM.YYYY', '13.9.2022')).toEqual('13.9.2022')
  expect(formatValue('date', 'YYYY.DD.MM', '2022.13.9')).toEqual('2022.13.9')
  expect(formatValue('date', 'MM.YYYY.DD', '9.2022.13')).toEqual('9.2022.13')
})

