import {mathOperation} from './MathFunction';

test("Adding 6 + 3 equals 9", () => {
    expect(mathOperation(6, 3, 'sum')).toBe(9)
  })
  test("Multiplying 6 * 3 equals 18", () => {
    expect(mathOperation(6, 3, 'mul')).toBe(18)
  })
  test("Subtracting 6 - 3 equals 3", () => {
    expect(mathOperation(6, 3, 'dif')).toBe(3)
  })
  test("Dividing 6 / 3 equals 2", () => {
    expect(mathOperation(6, 3, 'div')).toBe(2)
  })
  test("Function is able to throw correct type exception", () => {
    expect(mathOperation).toThrow(Error)
  })
  test("Passing wrong data throws exception", () => {
    expect(function() {
      mathOperation(10, 2, 'divide');
    }).toThrow()
  })
  test("Passing wrong data throws exception", () => {
    expect(() => {
      mathOperation(10, 2, 'divide');
    }).toThrow()
  })

  // test("Passing wrong data returns null", () => {
  //   expect(mathOperation(10, 2, 'divide')).toThrow()
  // })

  // test("Passing wrong data returns null", () => {
  //   expect(mathOperation(10, 2, 'divide')).toBe(null)
  // })
  
  // run test with npm test