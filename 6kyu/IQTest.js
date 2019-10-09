function iqTest(numbers){

    let newArr = numbers.split(' ');
    let oddPos = [];
    let evenPos = [];
    
    for (i=0; i < newArr.length; i++) {
      if (newArr[i] % 2 == 0) {
        evenPos.push(i + 1)
        } else {
        oddPos.push(i + 1)
        }
        }
      
      if (evenPos.length == 1) {
        return evenPos[0]
        } else {
        return oddPos[0]
      }
    
   }