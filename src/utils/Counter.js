class Counter {
  // Allow to use ES2020 private properties and methods
  #count = 0
  get getCount() {
    return this.#count
  }
  increment() {
    this.#count += 1
  }
}

module.exports = Counter