
module.exports = function (a, b, compare) {
  a = a.slice()
  b = b.slice()
  let merged = []
  while (a.length && b.length) {
    while (compare(a[0], b[0]) < 0) {
      merged.push(a.shift())
    }

    merged.push(b.shift())
  }

  return merged.concat(a.length ? a : b)
}
