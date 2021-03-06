import { Matrix } from '.';

describe('Matrix', () => {
  it('constructor', () => {
    let matrix = new Matrix();
    expect(matrix.a).toBe(1);
    expect(matrix.b).toBe(0);
    expect(matrix.c).toBe(0);
    expect(matrix.d).toBe(1);
    expect(matrix.e).toBe(0);
    expect(matrix.f).toBe(0);

    matrix = new Matrix(1, 2, 3, 4, 5, 6);
    expect(matrix.a).toBe(1);
    expect(matrix.b).toBe(2);
    expect(matrix.c).toBe(3);
    expect(matrix.d).toBe(4);
    expect(matrix.e).toBe(5);
    expect(matrix.f).toBe(6);
  });

  it('invert', () => {
    expect(new Matrix().invert()).toEqual(new Matrix());
    expect(new Matrix(1, 2, 2, 3, 3, 4).invert()).toEqual(new Matrix(-3, 2, 2, -1, 1, -2));
  });

  it('dot product', () => {
    expect(new Matrix().dot(new Matrix())).toEqual(new Matrix());
    expect(new Matrix(1, 2, 2, 3, 3, 4).dot(new Matrix(2, 1, 3, 2, 4, 3)))
      .toEqual(new Matrix(4, 7, 7, 12, 13, 21));
  });
});
