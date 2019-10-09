function DNAStrand(dna){
    let dnaArr = dna.split('')
    let newArr = []
    
    for (i = 0; i < dnaArr.length; i++) {
      if (dnaArr[i] == 'A') {
        newArr.push('T')
          } 
          else if (dnaArr[i] == 'T') {
              newArr.push('A') }
              else if (dnaArr[i] == 'C') {
              newArr.push('G') }
              else if (dnaArr[i] == 'G') {
              newArr.push('C')
              }}
              
            return newArr.join('')
    
  }