import { add, capitaliseFirst, reverseString, subtract, divide, multiply, caesarCipher } from "..";

test("capitalise first letter", () => {
  expect(capitaliseFirst("hello")).toBe("Hello");
});

test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

describe("calculator features", () => {
  test("add", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("subtract", () => {
    expect(subtract(2, 3)).toBe(-1);
  });
  test("divide", () => {
    expect(divide(2, 3)).toBe(0.6666666666666666);
  });
  test("multiply", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe("caesar cipher", () => {
  test("shift 1", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("shift 2", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("shift 3", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("analyze array", () => {
  const object = anaylzeArray([1, 8, 3, 4, 2, 6]);

  test("get average", () => {
    expect(object.average).toBe(4);
  });
  test("get min", () => {
    expect(object.min).toBe(1);
  });
  test("get max", () => {
    expect(object.max).toBe(8);
  });
  test("get length", () => {
    expect(object.length).toBe(6);
  });
});
