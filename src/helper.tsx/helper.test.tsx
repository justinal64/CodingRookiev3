import * as Helpers from "./helper"; // talk about why I imported it this way

describe("Testing Calculator logic functions", () => {
  describe("Add function", () => {
    it("With positive numbers", () => {
      expect(Helpers.Add(1, 2)).toBe(3);
    });

    it("With negative numbers", () => {
      const spyOnAdd = jest.spyOn(Helpers, "Add");
      expect(Helpers.Add(-1, -2)).toBe(-3);
      expect(spyOnAdd).toHaveBeenCalledTimes(1); // This is more useful when using state management
    });

    it("With decimal", () => {
      expect(Helpers.Add(2.2, 3.2)).toBe(5.4);
    });
  });

  describe("Subtract function", () => {
    it("With positive numbers", () => {
      expect(Helpers.Subtract(1, 2)).toBe(-1);
    });

    it("With negative numbers", () => {
      expect(Helpers.Subtract(-1, -2)).toBe(1);
    });

    it("With decimal", () => {
      expect(Helpers.Subtract(2.2, 3.2)).toBe(-1);
    });
  });

  describe("Multiply function", () => {
    it("With positive numbers", () => {
      expect(Helpers.Multiply(1, 2)).toBe(2);
    });

    it("With negative numbers", () => {
      expect(Helpers.Multiply(-1, -2)).toBe(2);
    });

    it("With decimal", () => {
      expect(Helpers.Multiply(2.2, 3.3)).toBe(7.26);
    });
  });

  describe("Divide function", () => {
    it("With positive numbers", () => {
      expect(Helpers.Divide(1, 2)).toBe(0.5);
    });

    it("With negative numbers", () => {
      expect(Helpers.Divide(-1, -2)).toBe(0.5);
    });

    it("With decimal", () => {
      expect(Helpers.Divide(2.2, 3.2)).toBe(0.6875);
    });
  });
});
