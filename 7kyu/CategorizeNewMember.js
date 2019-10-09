function openOrSenior(data){
    let newArr = [];
    data.forEach(person => {
    if (person[0] >=55 && person[1] > 7) {
    newArr.push('Senior')
  } else {
    newArr.push('Open')
        }
    }
    )
    
    return newArr
}