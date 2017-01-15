import coolorsToHex from '../src'

test('coolorsToHex', () => {
  expect(coolorsToHex('https://coolors.co/d32f2f-f44336-f8877f-ffcdd2-ffffff'))
    .toEqual(['#d32f2f', '#f44336', '#f8877f', '#ffcdd2', '#ffffff'])
})
