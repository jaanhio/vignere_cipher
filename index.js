const ciper = (str, key) => {
  // reference alphabets to check indexes
  let ref = 'abcdefghijklmnopqrstuvwxyz';
  let refArr = ref.split('');
  let refArrLength = refArr.length;

  // break inputstr into array and get length and convert into numbers arr
  let inputArr = str.split('');
  let inputArrLength = inputArr.length;
  let inputNumArr = inputArr.map(alphabet => {
    return refArr.findIndex(e => {
      return e === alphabet;
    });
  });

  // break keystr into array
  let keyArr = key.split('');
  let keyArrLength = keyArr.length;
  let repeatedKeyArr = [];

  const pushRepeatKey = () => {
    for (let i = 0; i < keyArrLength; i++) {
      repeatedKeyArr.push(keyArr[i]);
      if (inputArrLength === repeatedKeyArr.length) {
        return;
      }
    }
  }

  while (inputArrLength > repeatedKeyArr.length) {
    pushRepeatKey();
  }


  let repeatedKeyNum = repeatedKeyArr.map(alphabet => {
    return refArr.findIndex(e => {
      return e === alphabet;
    });
  });

  console.log(repeatedKeyArr);
  console.log(repeatedKeyNum);

  // encrypt the input
  for (let i = 0; i < inputNumArr; i ++) {
    inputNumArr[i] = inputNumArr[i] + repeatedKeyNum[i];
  } 

  let encryptedNumInput = inputNumArr.map((e,i) => {
    return e + repeatedKeyNum[i] > refArrLength ? e + repeatedKeyNum[i] - refArrLength : e + repeatedKeyNum[i];
  });

  console.log(encryptedNumInput);
  
  // converted the encrypted numbers to alphabets
  let encryptedLetterInput = encryptedNumInput.map(e => {
    return refArr[e];
  }).join('');
  console.log(encryptedLetterInput);
}

ciper('attackatdawn', 'lemon');

