function manufacture(gifts, materials) {
    let permitedGifts = []
      const setMaterials = new Set(materials)
  
      
      for (const gift of gifts) {
          if (gift.split('').every(letter => setMaterials.has(letter))) {
              permitedGifts.push(gift)
          }
      }
      return permitedGifts
  }