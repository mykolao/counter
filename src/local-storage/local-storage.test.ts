test("LocalStorage should be clean", () => {
  localStorage.clear();
  expect(localStorage.length).toBe(0);
});

test("LocalStorage should have one key", () => {
  localStorage.setItem("key", "value");
  expect(localStorage.length).toBe(1);
  
})
