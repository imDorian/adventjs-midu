function findNaughtyStep(original, modified) {
    // Code here
    let i = 0
     
    while (original.length > i || modified.length > i) {
      if (original[i] !== modified[i] && i < original.length && modified.length < original.length) {
              console.log(original[i], '1')
              return original[i]
        }
      if (modified[i] !== original[i] && i >= original.length) {
          if (original[i] === undefined) {
              console.log(modified[i], '2')
              return modified[i]
          }
      }
          
      
      if (modified[i] !== original[i] && modified.length > original.length) {
          console.log(modified[i])
          return modified[i]
      }
      if (modified === original) {
          console.log('son iguales')
          return ''
      }
      i++
      
    }
  }