import * as Helpers from "./helper"; // talk about why I imported it this way

describe("Testing Calculator logic functions", () => {
  describe("Add function", () => {
    it("With positive numbers", () => {
      expect(Helpers.Add(1, 2)).toBe(3);
    });

    it("With negative numbers", () => {
      const spyOnAdd = jest.spyOn(Helpers, "Add");
      expect(Helpers.Add(-1, -2)).toBe(-3);
      expect(spyOnAdd).toHaveBeenCalledTimes(1);
    });

    it("With strings", () => {
      expect(Helpers.Add("1", "2")).toBe("12");
    });

    // Because false = 0 and True = 1
    it("With boolean", () => {
      expect(Helpers.Add(false, true)).toBe(1);
    });

    it("With decimal", () => {
      expect(Helpers.Add(2.2, 3.2)).toBe(5.4);
    });

    it("With empty strings", () => {
      expect(Helpers.Add("", "")).toBe("");
    });
  });

  describe("Subtract function", () => {
    it("With positive numbers", () => {
      expect(Helpers.Subtract(1, 2)).toBe(-1);
    });

    it("With negative numbers", () => {
      expect(Helpers.Subtract(-1, -2)).toBe(1);
    });

    // Talk about this
    it("With strings", () => {
      expect(Helpers.Subtract("1", "2")).toBe(-1);
    });

    // Because false = 0 and True = 1
    it("With boolean", () => {
      expect(Helpers.Subtract(false, true)).toBe(-1);
    });

    it("With decimal", () => {
      expect(Helpers.Subtract(2.2, 3.2)).toBe(-1);
    });

    // Talk about this
    it("With empty strings", () => {
      expect(Helpers.Subtract("", "")).toBe(0);
    });
  });

  describe("Multiply function", () => {
    it("With positive numbers", () => {
      expect(Helpers.Multiply(1, 2)).toBe(2);
    });

    it("With negative numbers", () => {
      expect(Helpers.Multiply(-1, -2)).toBe(2);
    });

    // Talk about this
    it("With strings", () => {
      expect(Helpers.Multiply("1", "2")).toBe(2);
    });

    // Because false = 0 and True = 1
    it("With boolean", () => {
      expect(Helpers.Multiply(false, true)).toBe(0);
    });

    it("With decimal", () => {
      expect(Helpers.Multiply(2.2, 3.3)).toBe(7.26);
    });

    // Talk about this
    it("With empty strings", () => {
      expect(Helpers.Multiply("", "")).toBe(0);
    });
  });

  describe("Divide function", () => {
    it("With positive numbers", () => {
      expect(Helpers.Divide(1, 2)).toBe(0.5);
    });

    it("With negative numbers", () => {
      expect(Helpers.Divide(-1, -2)).toBe(0.5);
    });

    // Talk about this
    it("With strings", () => {
      expect(Helpers.Divide("1", "2")).toBe(0.5);
    });

    // Because false = 0 and True = 1
    it("With boolean", () => {
      expect(Helpers.Divide(false, true)).toBe(0);
    });

    it("With decimal", () => {
      expect(Helpers.Divide(2.2, 3.2)).toBe(0.6875);
    });

    // Talk about this
    it("With empty strings", () => {
      expect(Helpers.Divide("", "")).toBeNaN();
    });
  });

  describe("IsNumber function", () => {
    it("With positive numbers", () => {
      expect(Helpers.IsNumber(1, 2)).toBe(true);
    });

    it("With negative numbers", () => {
      expect(Helpers.IsNumber(-1, -2)).toBe(true);
    });

    // Talk about this
    it("With strings", () => {
      expect(Helpers.IsNumber("1", "2")).toBe(true);
    });

    // Because false = 0 and True = 1
    it("With boolean", () => {
      expect(Helpers.IsNumber(false, true)).toBe(true);
    });

    it("With decimal", () => {
      expect(Helpers.IsNumber(2.2, 3.2)).toBe(true);
    });

    // Talk about this
    it("With empty strings", () => {
      expect(Helpers.IsNumber("", "")).toBe(true);
    });
  });
});
