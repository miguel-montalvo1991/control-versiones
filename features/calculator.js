function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Los valores deben ser números");
  }

  return a + b;
}