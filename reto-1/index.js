function findFirstRepeated(gifts) {
    let nums = new Set()
    for (let g of gifts) {
      if (nums.has(g)) {
        return g
      } else {
        nums.add(g)
      }
    }
    return -1
  }
  