const test = require('tape')
const mergeSorted = require('./')

test('merge sorted', function (t) {
  t.same(mergeSorted(
    [1, 3, 5],
    [],
    (a, b) => a - b
  ), [1, 3, 5])

  t.same(mergeSorted(
    [],
    [1, 3, 5],
    (a, b) => a - b
  ), [1, 3, 5])

  t.same(mergeSorted(
    [1, 3, 5],
    [1, 2, 4],
    (a, b) => a - b
  ), [1, 1, 2, 3, 4, 5])

  t.same(mergeSorted(
    ['a', 'aa', 'aaa'],
    ['aa', 'aa', 'aa'],
    (a, b) => a.length - b.length
  ), ['a', 'aa', 'aa', 'aa', 'aa', 'aaa'])

  t.same(mergeSorted(
    [{ a: 2 }, { a: 1 }, { a: -Infinity }],
    [{ a: 2944 }, { a: -10393 }],
    (a, b) => b.a - a.a
  ), [{ a: 2944 }, { a: 2 }, { a: 1 }, { a: -10393 }, { a: -Infinity }])

  t.end()
})
