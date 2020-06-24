describe('toUpperCase', () => {
  it('should convert string to upper case', () => {
    // Підготовка
    const toUpperCase = info => info.toUpperCase();

    // Дія
    const result = toUpperCase('Click to modify');

    // Ствердження
    expect(result).toEqual('CLICK TO MODIFY');
  });

});

it('My first test', () => {
  expect(Math.max(1, 5, 10)).toBe(10);
});


test('toEqual with objects', () => {
  expect({ foo: 'foo', subObject: { baz: 'baz' } })
      .toEqual({ foo: 'foo', subObject: { baz: 'baz' } });  // Ок
  expect({ foo: 'foo', subObject: { num: 0 } })
      .toEqual({ foo: 'foo', subObject: { baz: 'baz' } });  // А вот так ошибка.
});