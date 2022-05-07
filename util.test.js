//examples of unit testing 

const { generateText } = require('./util');
//import { generateText } from './util'; //this syntax is not supported by jest

const orderTotal = require('./order-total')

test('should output name and age', () => {
    const text = generateText('Lilly', 26);
    expect(text).toBe('Lilly (26 years old)');
});

//checking the opposite to avoid false positives
test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});



test('Quantity', () =>
  expect(orderTotal({
    items: [
      { 'name': 'Catsicles', price: 2, quantity: 3 }
    ]
  })).toBe(6))

test('No quantity specified', () =>
  expect(orderTotal({
    items: [
      { 'name': 'Catsicles', price: 3 }
    ]
  })).toBe(3)
)
