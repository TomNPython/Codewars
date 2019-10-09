function descendingOrder(n){
    
    let newN = n.toString().split('').sort((a, b) => b-a).join('')
    return parseInt(newN)
  }