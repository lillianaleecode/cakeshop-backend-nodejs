const { generateText } = require('./util');
//import { generateText } from './util'; //this syntax is not supported by jest

test('should output name and age', () => {
    const text = generateText('Lilly', 26);
    expect(text).toBe('Lilly (26 years old)');
});