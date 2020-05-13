const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be false", () => {
  expect(functions.checkValue(null)).toBeFalsy(); //0, null, undefined, '', NaN, false
});

test("User should be Ingrid Amaral object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Ingrid",
    lastName: "Amaral",
  });
  //toBe matcher is for basically primitive types such as: number, string, boolean, null, undefined, symbol
  //so for objects and arrays the matcher should be toEqual instead
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("There is no I in team", () => {
  expect("team").not.toMatch(/i/i);
});

test("Admin should be in usernames", () => {
  const userNames = ["John", "Karen", "Admin"];
  expect(userNames).toContain("Admin");
});

//Promise
describe("Async tests", () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });

  test("User fetched name should be Leanne Graham", async () => {
    functions.fetchUser().then((data) => {
      expect(data.name).toEqual("Leanne Graham");
    });
  });
});

//Async Await
// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
// })
