# merge-sorted

Merge two sorted arrays using a custom comparator

The comparator should be the same one that was used to sort the two input arrays

## Usage

```js
const mergeSorted = require('./')
const a = [{ age: 2 }, { age: 1 }, { age: -Infinity }]
const b = [{ age: 2944 }, { age: -10393 }]
const compareByAgeDescending = (a, b) => b.age - a.age
const merged = mergeSorted(a, b, compareByAgeDescending)
// [{ age: 2944 }, { age: 2 }, { age: 1 }, { age: -10393 }, { age: -Infinity }]
```
