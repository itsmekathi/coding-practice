A **sparse array** is a type of data structure optimized for storing data with a large number of empty or zero elements. In a typical array, each index holds a value, even if that value is zero or null, which can lead to inefficient memory use if the array is mostly empty. Sparse arrays, on the other hand, aim to use memory efficiently by only storing the non-empty (or non-zero) values and their associated indices.

### Key Characteristics of Sparse Arrays:

1. **Memory Efficiency**: Sparse arrays store only the significant (non-zero) elements, so they use much less memory compared to a full array, especially when most elements are empty.
2. **Storage Structure**: Instead of storing every element in the array, a sparse array typically stores each non-zero element along with its index in a separate data structure, like a dictionary or list of key-value pairs.
3. **Applications**: Sparse arrays are common in fields like data science, machine learning, and scientific computing, where large matrices (or arrays) with many empty cells are often encountered.

### Example

Suppose we have a regular array with mostly zero values:

```plaintext
[0, 0, 0, 5, 0, 0, 3, 0, 0, 0, 1]
```

In a sparse array representation, it might be stored as:

```plaintext
[(3, 5), (6, 3), (10, 1)]
```

Here, each tuple represents an index and a non-zero value.

### Advantages of Sparse Arrays

- **Reduced Memory Usage**: Only non-zero elements are stored.
- **Efficiency in Large Datasets**: Particularly beneficial in applications involving large datasets with few non-zero entries.

### Implementation Techniques

Sparse arrays can be implemented using:

- **Dictionaries**: Where the keys are the indices of non-zero elements and values are the elements themselves.
- **Lists of Tuples**: Each tuple contains an index and the non-zero value, making it easy to iterate over only the stored values.

Here’s a simple JavaScript implementation of a sparse array using an object to store non-zero elements by their indices.

### Sparse Array Class Implementation

```javascript
class SparseArray {
  constructor(size) {
    this.size = size;
    this.elements = {};
  }

  set(index, value) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of range.");
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
```

### Usage Example

```javascript
// Initialize a sparse array with a size of 10
const sparseArray = new SparseArray(10);

// Set some non-zero values
sparseArray.set(3, 5);
sparseArray.set(6, 3);
sparseArray.set(9, 1);

// Retrieve values
console.log(sparseArray.get(3)); // Output: 5
console.log(sparseArray.get(6)); // Output: 3
console.log(sparseArray.get(9)); // Output: 1
console.log(sparseArray.get(4)); // Output: 0, since index 4 has no non-zero value

// Print the sparse array
console.log(sparseArray.toString());
// Output: SparseArray(size=10, elements={"3":5,"6":3,"9":1})
```

### Explanation

- **Constructor (`constructor`)**: Initializes the `size` of the array and an empty `elements` object to store non-zero values.
- **Set Method (`set`)**: Adds a non-zero value at a specific index, or deletes the entry if the value is set to zero.
- **Get Method (`get`)**: Retrieves the value at a given index, returning 0 if the index has no stored non-zero value.
- **toString Method (`toString`)**: Returns a string representation of the sparse array with the array size and stored elements.
