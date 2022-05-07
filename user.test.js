const userName = require('./user');

describe('user service', () => {
  test('does nothing if separation is already correct', () => {
    const { fName, mNames, lName } = userName.separateNames(
      'Lilly Leech',
      'Lee',
      'Chung'
    );

    expect(fName).toEqual('Lilly');
    expect(mNames).toEqual('Leech Lee');
    expect(lName).toEqual('Chung');
  });

  test('separates firstName', () => {
    const { fName, mNames, lName } = userName.separateNames(
      'Lilly',
      'Leech Lee',
      'Chung'
    );

    expect(fName).toEqual('Lilly');
    expect(mNames).toEqual('Leech Lee');
    expect(lName).toEqual('Chung');
  });
});