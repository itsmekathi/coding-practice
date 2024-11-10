class SparseArray {
  constructor(size) {
    this.size = size;
    this.elements = {};
  }

  set(index, value) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of range");
    }
    if (value !== 0) {
      this.elements[index] = value;
    } else {
      delete this.elements[index];
    }
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of range.");
    }
    return this.elements[index] || 0;
  }

  toString() {
    return `SparseArray(size=${this.size}, elements=${JSON.stringify(
      this.elements
    )})`;
  }
}

const sparseArray = new SparseArray(10);
sparseArray.set(3, 5);
sparseArray.set(8, 0);
sparseArray.set(9, 1);

console.log(sparseArray);
