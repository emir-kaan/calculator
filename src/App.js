import './App.css';
import { useState, useEffect, useRef } from 'react';
import laugh from './laugh.mp3';

function App() {

  const [isZero, setIsZero] = useState(true);
  const [activeProcess, setActiveProcess] = useState(null);
  const [theNumberBefore, setTheNumberBefore] = useState("");
  const [theSecondNumber, setTheSecondNumber] = useState("");
  const [settableComma, setSettableComma] = useState(false);
  const [equalJustPressed, setEqualJustPressed] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const keyboardRef = useRef(true);

  function reverseString(x) {
    let splitString = x.split("");
    let reverseArray = splitString.reverse();
    let backToString = reverseArray.join("");
    return backToString;
  }

  function commaControl(x) {
    let controlOfComma = false;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === ".") {
            controlOfComma = true;
        }
    }
    return controlOfComma;
  }

  const controlZ = x => {
    let newString;
    if (Number(x) !== parseInt(x) && commaControl(x) === true) {
      newString = reverseString(x);
      newString = newString.replace(".", ",");
      newString = reverseString(newString);
      return newString;
    } else {
      newString = x;
      return newString;
    }
  }

  const commaToDot = x => {
    let commaOn = false;
    let newString;
    for (let i = 0; i < x.length; i++) {
      if (x[i] === ",") {
        commaOn = true;      
      }
    }
    if (commaOn === true) {
      newString = x.replace(",", ".");
      return newString;
    } else {
      newString = x;
      return newString;
    }
  }

  const makeTheNumberDot = x => {
    if (x.includes(",") === false) {
      if (x.length === 30) {
        let theNum = `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6, 9)}.${x.slice(9, 12)}.${x.slice(12, 15)}.${x.slice(15, 18)}.${x.slice(18, 21)}.${x.slice(21, 24)}.${x.slice(24, 27)}.${x.slice(27, 30)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 27) {
        let theNum = `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6, 9)}.${x.slice(9, 12)}.${x.slice(12, 15)}.${x.slice(15, 18)}.${x.slice(18, 21)}.${x.slice(21, 24)}.${x.slice(24, 27)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 24) {
        let theNum = `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6, 9)}.${x.slice(9, 12)}.${x.slice(12, 15)}.${x.slice(15, 18)}.${x.slice(18, 21)}.${x.slice(21, 24)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 21) {
        let theNum = `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6, 9)}.${x.slice(9, 12)}.${x.slice(12, 15)}.${x.slice(15, 18)}.${x.slice(18, 21)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 18) {
        let theNum = `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6, 9)}.${x.slice(9, 12)}.${x.slice(12, 15)}.${x.slice(15, 18)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 15) {
        let theNum = `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6, 9)}.${x.slice(9, 12)}.${x.slice(12, 15)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 12) {
        let theNum = `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6, 9)}.${x.slice(9, 12)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 9) {
        let theNum = `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6, 9)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 6) {
        let theNum = `${x.slice(0, 3)}.${x.slice(3, 6)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 3) {
        let theNum = `${x.slice(0, 3)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 29) {
        let theNum = `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}.${x.slice(8, 11)}.${x.slice(11, 14)}.${x.slice(14, 17)}.${x.slice(17, 20)}.${x.slice(20, 23)}.${x.slice(23, 26)}.${x.slice(26, 29)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 26) {
        let theNum = `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}.${x.slice(8, 11)}.${x.slice(11, 14)}.${x.slice(14, 17)}.${x.slice(17, 20)}.${x.slice(20, 23)}.${x.slice(23, 26)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 23) {
        let theNum = `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}.${x.slice(8, 11)}.${x.slice(11, 14)}.${x.slice(14, 17)}.${x.slice(17, 20)}.${x.slice(20, 23)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 20) {
        let theNum = `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}.${x.slice(8, 11)}.${x.slice(11, 14)}.${x.slice(14, 17)}.${x.slice(17, 20)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 17) {
        let theNum = `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}.${x.slice(8, 11)}.${x.slice(11, 14)}.${x.slice(14, 17)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 14) {
        let theNum = `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}.${x.slice(8, 11)}.${x.slice(11, 14)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 11) {
        let theNum = `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}.${x.slice(8, 11)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 8) {
        let theNum = `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 5) {
        let theNum = `${x.slice(0, 2)}.${x.slice(2, 5)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 2) {
        let theNum = `${x.slice(0, 2)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 28) {
        let theNum = `${x.slice(0, 1)}.${x.slice(1, 4)}.${x.slice(4, 7)}.${x.slice(7, 10)}.${x.slice(10, 13)}.${x.slice(13, 16)}.${x.slice(16, 19)}.${x.slice(19, 22)}.${x.slice(22, 25)}.${x.slice(25, 28)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 25) {
        let theNum = `${x.slice(0, 1)}.${x.slice(1, 4)}.${x.slice(4, 7)}.${x.slice(7, 10)}.${x.slice(10, 13)}.${x.slice(13, 16)}.${x.slice(16, 19)}.${x.slice(19, 22)}.${x.slice(22, 25)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 22) {
        let theNum = `${x.slice(0, 1)}.${x.slice(1, 4)}.${x.slice(4, 7)}.${x.slice(7, 10)}.${x.slice(10, 13)}.${x.slice(13, 16)}.${x.slice(16, 19)}.${x.slice(19, 22)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 19) {
        let theNum = `${x.slice(0, 1)}.${x.slice(1, 4)}.${x.slice(4, 7)}.${x.slice(7, 10)}.${x.slice(10, 13)}.${x.slice(13, 16)}.${x.slice(16, 19)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 16) {
        let theNum = `${x.slice(0, 1)}.${x.slice(1, 4)}.${x.slice(4, 7)}.${x.slice(7, 10)}.${x.slice(10, 13)}.${x.slice(13, 16)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 13) {
        let theNum = `${x.slice(0, 1)}.${x.slice(1, 4)}.${x.slice(4, 7)}.${x.slice(7, 10)}.${x.slice(10, 13)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 10) {
        let theNum = `${x.slice(0, 1)}.${x.slice(1, 4)}.${x.slice(4, 7)}.${x.slice(7, 10)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 7) {
        let theNum = `${x.slice(0, 1)}.${x.slice(1, 4)}.${x.slice(4, 7)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 4) {
        let theNum = `${x.slice(0, 1)}.${x.slice(1, 4)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      } else if (x.length === 1) {
        let theNum = `${x.slice(0, 1)}`;
        if (theNum.indexOf("-") === 0 && theNum.indexOf(".") === 1) {
          theNum = theNum.replace(".", "");
          return theNum;
        } else {
          return theNum;
        }
      }
    } else {
      const myArray = x.split(",");
      if (myArray[0].length === 30) {
        let theNum = `${myArray[0].slice(0, 3)}.${myArray[0].slice(3, 6)}.${myArray[0].slice(6, 9)}.${myArray[0].slice(9, 12)}.${myArray[0].slice(12, 15)}.${myArray[0].slice(15, 18)}.${myArray[0].slice(18, 21)}.${myArray[0].slice(21, 24)}.${myArray[0].slice(24, 27)}.${myArray[0].slice(27, 30)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 27) {
        let theNum = `${myArray[0].slice(0, 3)}.${myArray[0].slice(3, 6)}.${myArray[0].slice(6, 9)}.${myArray[0].slice(9, 12)}.${myArray[0].slice(12, 15)}.${myArray[0].slice(15, 18)}.${myArray[0].slice(18, 21)}.${myArray[0].slice(21, 24)}.${myArray[0].slice(24, 27)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 24) {
        let theNum = `${myArray[0].slice(0, 3)}.${myArray[0].slice(3, 6)}.${myArray[0].slice(6, 9)}.${myArray[0].slice(9, 12)}.${myArray[0].slice(12, 15)}.${myArray[0].slice(15, 18)}.${myArray[0].slice(18, 21)}.${myArray[0].slice(21, 24)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 21) {
        let theNum = `${myArray[0].slice(0, 3)}.${myArray[0].slice(3, 6)}.${myArray[0].slice(6, 9)}.${myArray[0].slice(9, 12)}.${myArray[0].slice(12, 15)}.${myArray[0].slice(15, 18)}.${myArray[0].slice(18, 21)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 18) {
        let theNum = `${myArray[0].slice(0, 3)}.${myArray[0].slice(3, 6)}.${myArray[0].slice(6, 9)}.${myArray[0].slice(9, 12)}.${myArray[0].slice(12, 15)}.${myArray[0].slice(15, 18)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 15) {
        let theNum = `${myArray[0].slice(0, 3)}.${myArray[0].slice(3, 6)}.${myArray[0].slice(6, 9)}.${myArray[0].slice(9, 12)}.${myArray[0].slice(12, 15)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 12) {
        let theNum = `${myArray[0].slice(0, 3)}.${myArray[0].slice(3, 6)}.${myArray[0].slice(6, 9)}.${myArray[0].slice(9, 12)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 9) {
        let theNum = `${myArray[0].slice(0, 3)}.${myArray[0].slice(3, 6)}.${myArray[0].slice(6, 9)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 6) {
        let theNum = `${myArray[0].slice(0, 3)}.${myArray[0].slice(3, 6)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 3) {
        let theNum = `${myArray[0].slice(0, 3)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 29) {
        let theNum = `${myArray[0].slice(0, 2)}.${myArray[0].slice(2, 5)}.${myArray[0].slice(5, 8)}.${myArray[0].slice(8, 11)}.${myArray[0].slice(11, 14)}.${myArray[0].slice(14, 17)}.${myArray[0].slice(17, 20)}.${myArray[0].slice(20, 23)}.${myArray[0].slice(23, 26)}.${myArray[0].slice(26, 29)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 26) {
        let theNum = `${myArray[0].slice(0, 2)}.${myArray[0].slice(2, 5)}.${myArray[0].slice(5, 8)}.${myArray[0].slice(8, 11)}.${myArray[0].slice(11, 14)}.${myArray[0].slice(14, 17)}.${myArray[0].slice(17, 20)}.${myArray[0].slice(20, 23)}.${myArray[0].slice(23, 26)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 23) {
        let theNum = `${myArray[0].slice(0, 2)}.${myArray[0].slice(2, 5)}.${myArray[0].slice(5, 8)}.${myArray[0].slice(8, 11)}.${myArray[0].slice(11, 14)}.${myArray[0].slice(14, 17)}.${myArray[0].slice(17, 20)}.${myArray[0].slice(20, 23)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 20) {
        let theNum = `${myArray[0].slice(0, 2)}.${myArray[0].slice(2, 5)}.${myArray[0].slice(5, 8)}.${myArray[0].slice(8, 11)}.${myArray[0].slice(11, 14)}.${myArray[0].slice(14, 17)}.${myArray[0].slice(17, 20)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 17) {
        let theNum = `${myArray[0].slice(0, 2)}.${myArray[0].slice(2, 5)}.${myArray[0].slice(5, 8)}.${myArray[0].slice(8, 11)}.${myArray[0].slice(11, 14)}.${myArray[0].slice(14, 17)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 14) {
        let theNum = `${myArray[0].slice(0, 2)}.${myArray[0].slice(2, 5)}.${myArray[0].slice(5, 8)}.${myArray[0].slice(8, 11)}.${myArray[0].slice(11, 14)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 11) {
        let theNum = `${myArray[0].slice(0, 2)}.${myArray[0].slice(2, 5)}.${myArray[0].slice(5, 8)}.${myArray[0].slice(8, 11)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 8) {
        let theNum = `${myArray[0].slice(0, 2)}.${myArray[0].slice(2, 5)}.${myArray[0].slice(5, 8)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 5) {
        let theNum = `${myArray[0].slice(0, 2)}.${myArray[0].slice(2, 5)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 2) {
        let theNum = `${myArray[0].slice(0, 2)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 28) {
        let theNum = `${myArray[0].slice(0, 1)}.${myArray[0].slice(1, 4)}.${myArray[0].slice(4, 7)}.${myArray[0].slice(7, 10)}.${myArray[0].slice(10, 13)}.${myArray[0].slice(13, 16)}.${myArray[0].slice(16, 19)}.${myArray[0].slice(19, 22)}.${myArray[0].slice(22, 25)}.${myArray[0].slice(25, 28)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 25) {
        let theNum = `${myArray[0].slice(0, 1)}.${myArray[0].slice(1, 4)}.${myArray[0].slice(4, 7)}.${myArray[0].slice(7, 10)}.${myArray[0].slice(10, 13)}.${myArray[0].slice(13, 16)}.${myArray[0].slice(16, 19)}.${myArray[0].slice(19, 22)}.${myArray[0].slice(22, 25)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 22) {
        let theNum = `${myArray[0].slice(0, 1)}.${myArray[0].slice(1, 4)}.${myArray[0].slice(4, 7)}.${myArray[0].slice(7, 10)}.${myArray[0].slice(10, 13)}.${myArray[0].slice(13, 16)}.${myArray[0].slice(16, 19)}.${myArray[0].slice(19, 22)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 19) {
        let theNum = `${myArray[0].slice(0, 1)}.${myArray[0].slice(1, 4)}.${myArray[0].slice(4, 7)}.${myArray[0].slice(7, 10)}.${myArray[0].slice(10, 13)}.${myArray[0].slice(13, 16)}.${myArray[0].slice(16, 19)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 16) {
        let theNum = `${myArray[0].slice(0, 1)}.${myArray[0].slice(1, 4)}.${myArray[0].slice(4, 7)}.${myArray[0].slice(7, 10)}.${myArray[0].slice(10, 13)}.${myArray[0].slice(13, 16)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 13) {
        let theNum = `${myArray[0].slice(0, 1)}.${myArray[0].slice(1, 4)}.${myArray[0].slice(4, 7)}.${myArray[0].slice(7, 10)}.${myArray[0].slice(10, 13)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 10) {
        let theNum = `${myArray[0].slice(0, 1)}.${myArray[0].slice(1, 4)}.${myArray[0].slice(4, 7)}.${myArray[0].slice(7, 10)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 7) {
        let theNum = `${myArray[0].slice(0, 1)}.${myArray[0].slice(1, 4)}.${myArray[0].slice(4, 7)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 4) {
        let theNum = `${myArray[0].slice(0, 1)}.${myArray[0].slice(1, 4)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      } else if (myArray[0].length === 1) {
        let theNum = `${myArray[0].slice(0, 1)}`;
        if (`${theNum},${myArray[1]}`.indexOf("-") === 0 && `${theNum},${myArray[1]}`.indexOf(".") === 1) {
          let newNum = `${theNum},${myArray[1]}`.replace(".", "");
          return newNum;
        } else {
          let newNum = `${theNum},${myArray[1]}`;
          return newNum;
        }
      }
    }
     
  }

  const removeDots = x => {
    let myArray = x.split(".");
    if (myArray.length === 10) {
      let theNum = `${myArray[0]}${myArray[1]}${myArray[2]}${myArray[3]}${myArray[4]}${myArray[5]}${myArray[6]}${myArray[7]}${myArray[8]}${myArray[9]}`;
      return theNum;
    } else if (myArray.length === 9) {
      let theNum = `${myArray[0]}${myArray[1]}${myArray[2]}${myArray[3]}${myArray[4]}${myArray[5]}${myArray[6]}${myArray[7]}${myArray[8]}`;
      return theNum;
    } else if (myArray.length === 8) {
      let theNum = `${myArray[0]}${myArray[1]}${myArray[2]}${myArray[3]}${myArray[4]}${myArray[5]}${myArray[6]}${myArray[7]}`;
      return theNum;
    } else if (myArray.length === 7) {
      let theNum = `${myArray[0]}${myArray[1]}${myArray[2]}${myArray[3]}${myArray[4]}${myArray[5]}${myArray[6]}`;
      return theNum;
    } else if (myArray.length === 6) {
      let theNum = `${myArray[0]}${myArray[1]}${myArray[2]}${myArray[3]}${myArray[4]}${myArray[5]}`;
      return theNum;
    } else if (myArray.length === 5) {
      let theNum = `${myArray[0]}${myArray[1]}${myArray[2]}${myArray[3]}${myArray[4]}`;
      return theNum;
    } else if (myArray.length === 4) {
      let theNum = `${myArray[0]}${myArray[1]}${myArray[2]}${myArray[3]}`;
      return theNum;
    } else if (myArray.length === 3) {
      let theNum = `${myArray[0]}${myArray[1]}${myArray[2]}`;
      return theNum;
    } else if (myArray.length === 2) {
      let theNum = `${myArray[0]}${myArray[1]}`;
      return theNum;
    } else if (myArray.length === 1) {
      let theNum = `${myArray[0]}`;
      return theNum;
    } 
  }

  const OrangeButton = props => {
    return (
      <button className="btn" style={
        {backgroundColor: "#f79806", color: "#fff"}
      } 
      onClick={() => {
        setClickCount(clickCount + 1);
        if (props.indexValue === "+") {
          setEqualJustPressed(false);
          if (activeProcess !== null) {
            setActiveProcess("plus");
            if (activeProcess === "plus") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "minus") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "multiply") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "division") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
              setTheSecondNumber("");
            }
          } else {
            setActiveProcess("plus");
          }
        } else if (props.indexValue === "-") {
          setEqualJustPressed(false);
          if (activeProcess !== null) {
            setActiveProcess("minus");
            if (activeProcess === "plus") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "minus") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "multiply") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "division") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
              setTheSecondNumber("");
            }
          } else {
            setActiveProcess("minus");
          }
        } else if (props.indexValue === "×") {
          setEqualJustPressed(false);
          if (activeProcess !== null) {
            setActiveProcess("multiply");
            if (activeProcess === "plus") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "minus") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "multiply") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "division") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
              setTheSecondNumber("");
            }
          } else {
            setActiveProcess("multiply");
          }
        } else if (props.indexValue === "÷") {
          setEqualJustPressed(false);
          if (activeProcess !== null) {
            setActiveProcess("division");
            if (activeProcess === "plus") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "minus") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "multiply") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
              setTheSecondNumber("");
            } else if (activeProcess === "division") {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
              setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
              setTheSecondNumber("");
            }
          } else {
            // This web app was made by Emir Kaan Ayar.
            setActiveProcess("division");
          }
        } else if (props.indexValue === "=") {
          setActiveProcess(null);
          if (activeProcess === "plus") {
            if (Number(String(Number(theNumberBefore) + Number(theSecondNumber))) === 31) {
              document.querySelector('.laugh-voice').currentTime = 0;
              document.querySelector('.laugh-voice').play();
            }
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "minus") {
            if (Number(String(Number(theNumberBefore) - Number(theSecondNumber))) === 31) {
              document.querySelector('.laugh-voice').currentTime = 0;
              document.querySelector('.laugh-voice').play();
            }
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "multiply") {
            if (Number(String(Number(theNumberBefore) * Number(theSecondNumber))) === 31) {
              document.querySelector('.laugh-voice').currentTime = 0;
              document.querySelector('.laugh-voice').play();
            }
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "division") {
            if (Number(String(Number(theNumberBefore) / Number(theSecondNumber))) === 31) {
              document.querySelector('.laugh-voice').currentTime = 0;
              document.querySelector('.laugh-voice').play();
            }
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
            setTheSecondNumber("");
          }
          setEqualJustPressed(true);
          setSettableComma(false);
        }
      }
      }>{props.indexValue}</button>
    );
  }

  const DarkGrayButton = props => {
    return (
      <button className="btn" style={
        props.indexValue === "0" ? 
        {backgroundColor: "#313131", color: "#fff", width: "calc((100% * 0.5) - 18.5px)"} :
        {backgroundColor: "#313131", color: "#fff"}
      }
      onClick={() => {
        setClickCount(clickCount + 1);
        if (window.matchMedia("(min-width: 993px)").matches) {
          if (document.querySelector('.result-text').textContent.length < 30) {
            if (props.indexValue === "0" || props.indexValue === "1" || props.indexValue === "2" || props.indexValue === "3" || props.indexValue === "4" || props.indexValue === "5" || props.indexValue === "6" || props.indexValue === "7" || props.indexValue === "8" || props.indexValue === "9") {
              if (document.querySelector('.result-text').textContent === "0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore(theNumberBefore + props.indexValue);
                }
              } else if (document.querySelector('.result-text').textContent === "-0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots("-" + document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber("-" + theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore("-" + theNumberBefore + props.indexValue);
                }
              } else {
                if (theSecondNumber === "" && activeProcess !== null) {
                  setSettableComma(true);
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else if (equalJustPressed === true) {
                  setEqualJustPressed(false);
                  document.querySelector('.laugh-voice').pause();
                  document.querySelector('.laugh-voice').currentTime = 0;
                  setActiveProcess(null);
                  setTheNumberBefore("");
                  setTheSecondNumber("");
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = props.indexValue;
                  setTheNumberBefore(props.indexValue);
                  setSettableComma(true);
                  setEqualJustPressed(false);
                } else {
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  if (activeProcess !== null) {
                    setTheSecondNumber(theSecondNumber + props.indexValue);
                  } else {
                    setTheNumberBefore(theNumberBefore + props.indexValue);
                  }
                }
              }
            } else if (props.indexValue === ",") {
              if (activeProcess === null) {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theNumberBefore.includes(".") === true) {
                  setSettableComma(false);
                }
              } else {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theSecondNumber.includes(".") === true) {
                  setSettableComma(false);
                }
              }
              if (settableComma === true) {
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + ","));
                if (activeProcess === null) {
                  setTheNumberBefore(theNumberBefore + ".");
                } else {
                  setTheSecondNumber(theSecondNumber + ".");
                }
                setSettableComma(false);
              }
            }
          }
        } else if (window.matchMedia("(max-width: 992px) and (min-width: 656px)").matches) {
          if (document.querySelector('.result-text').textContent.length < 19) {
            if (props.indexValue === "0" || props.indexValue === "1" || props.indexValue === "2" || props.indexValue === "3" || props.indexValue === "4" || props.indexValue === "5" || props.indexValue === "6" || props.indexValue === "7" || props.indexValue === "8" || props.indexValue === "9") {
              if (document.querySelector('.result-text').textContent === "0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore(theNumberBefore + props.indexValue);
                }
              } else if (document.querySelector('.result-text').textContent === "-0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots("-" + document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber("-" + theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore("-" + theNumberBefore + props.indexValue);
                }
              } else {
                if (theSecondNumber === "" && activeProcess !== null) {
                  setSettableComma(true);
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else if (equalJustPressed === true) {
                  setEqualJustPressed(false);
                  document.querySelector('.laugh-voice').pause();
                  document.querySelector('.laugh-voice').currentTime = 0;
                  setActiveProcess(null);
                  setTheNumberBefore("");
                  setTheSecondNumber("");
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = props.indexValue;
                  setTheNumberBefore(props.indexValue);
                  setSettableComma(true);
                  setEqualJustPressed(false);
                } else {
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  if (activeProcess !== null) {
                    setTheSecondNumber(theSecondNumber + props.indexValue);
                  } else {
                    setTheNumberBefore(theNumberBefore + props.indexValue);
                  }
                }
              }
            } else if (props.indexValue === ",") {
              if (activeProcess === null) {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theNumberBefore.includes(".") === true) {
                  setSettableComma(false);
                }
              } else {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theSecondNumber.includes(".") === true) {
                  setSettableComma(false);
                }
              }
              if (settableComma === true) {
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + ","));
                if (activeProcess === null) {
                  setTheNumberBefore(theNumberBefore + ".");
                } else {
                  setTheSecondNumber(theSecondNumber + ".");
                }
                setSettableComma(false);
              }
            }
          }
        } else if (window.matchMedia("(max-width: 655px) and (min-width: 491px)").matches) {
          if (document.querySelector('.result-text').textContent.length < 15) {
            if (props.indexValue === "0" || props.indexValue === "1" || props.indexValue === "2" || props.indexValue === "3" || props.indexValue === "4" || props.indexValue === "5" || props.indexValue === "6" || props.indexValue === "7" || props.indexValue === "8" || props.indexValue === "9") {
              if (document.querySelector('.result-text').textContent === "0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore(theNumberBefore + props.indexValue);
                }
              } else if (document.querySelector('.result-text').textContent === "-0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots("-" + document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber("-" + theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore("-" + theNumberBefore + props.indexValue);
                }
              } else {
                if (theSecondNumber === "" && activeProcess !== null) {
                  setSettableComma(true);
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else if (equalJustPressed === true) {
                  setEqualJustPressed(false);
                  document.querySelector('.laugh-voice').pause();
                  document.querySelector('.laugh-voice').currentTime = 0;
                  setActiveProcess(null);
                  setTheNumberBefore("");
                  setTheSecondNumber("");
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = props.indexValue;
                  setTheNumberBefore(props.indexValue);
                  setSettableComma(true);
                  setEqualJustPressed(false);
                } else {
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  if (activeProcess !== null) {
                    setTheSecondNumber(theSecondNumber + props.indexValue);
                  } else {
                    setTheNumberBefore(theNumberBefore + props.indexValue);
                  }
                }
              }
            } else if (props.indexValue === ",") {
              if (activeProcess === null) {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theNumberBefore.includes(".") === true) {
                  setSettableComma(false);
                }
              } else {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theSecondNumber.includes(".") === true) {
                  setSettableComma(false);
                }
              }
              if (settableComma === true) {
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + ","));
                if (activeProcess === null) {
                  setTheNumberBefore(theNumberBefore + ".");
                } else {
                  setTheSecondNumber(theSecondNumber + ".");
                }
                setSettableComma(false);
              }
            }
          }
        } else if (window.matchMedia("(max-width: 490px) and (min-height: 701px)").matches) {
          if (document.querySelector('.result-text').textContent.length < 12) {
            if (props.indexValue === "0" || props.indexValue === "1" || props.indexValue === "2" || props.indexValue === "3" || props.indexValue === "4" || props.indexValue === "5" || props.indexValue === "6" || props.indexValue === "7" || props.indexValue === "8" || props.indexValue === "9") {
              if (document.querySelector('.result-text').textContent === "0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore(theNumberBefore + props.indexValue);
                }
              } else if (document.querySelector('.result-text').textContent === "-0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots("-" + document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber("-" + theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore("-" + theNumberBefore + props.indexValue);
                }
              } else {
                if (theSecondNumber === "" && activeProcess !== null) {
                  setSettableComma(true);
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else if (equalJustPressed === true) {
                  setEqualJustPressed(false);
                  document.querySelector('.laugh-voice').pause();
                  document.querySelector('.laugh-voice').currentTime = 0;
                  setActiveProcess(null);
                  setTheNumberBefore("");
                  setTheSecondNumber("");
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = props.indexValue;
                  setTheNumberBefore(props.indexValue);
                  setSettableComma(true);
                  setEqualJustPressed(false);
                } else {
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  if (activeProcess !== null) {
                    setTheSecondNumber(theSecondNumber + props.indexValue);
                  } else {
                    setTheNumberBefore(theNumberBefore + props.indexValue);
                  }
                }
              }
            } else if (props.indexValue === ",") {
              if (activeProcess === null) {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theNumberBefore.includes(".") === true) {
                  setSettableComma(false);
                }
              } else {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theSecondNumber.includes(".") === true) {
                  setSettableComma(false);
                }
              }
              if (settableComma === true) {
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + ","));
                if (activeProcess === null) {
                  setTheNumberBefore(theNumberBefore + ".");
                } else {
                  setTheSecondNumber(theSecondNumber + ".");
                }
                setSettableComma(false);
              }
            }
          }
        } else if (window.matchMedia("(max-width: 490px) and (min-height: 775px)").matches || window.matchMedia("(max-width: 490px) and (min-height: 800px)").matches) {
          if (document.querySelector('.result-text').textContent.length < 12) {
            if (props.indexValue === "0" || props.indexValue === "1" || props.indexValue === "2" || props.indexValue === "3" || props.indexValue === "4" || props.indexValue === "5" || props.indexValue === "6" || props.indexValue === "7" || props.indexValue === "8" || props.indexValue === "9") {
              if (document.querySelector('.result-text').textContent === "0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore(theNumberBefore + props.indexValue);
                }
              } else if (document.querySelector('.result-text').textContent === "-0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots("-" + document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber("-" + theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore("-" + theNumberBefore + props.indexValue);
                }
              } else {
                if (theSecondNumber === "" && activeProcess !== null) {
                  setSettableComma(true);
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else if (equalJustPressed === true) {
                  setEqualJustPressed(false);
                  document.querySelector('.laugh-voice').pause();
                  document.querySelector('.laugh-voice').currentTime = 0;
                  setActiveProcess(null);
                  setTheNumberBefore("");
                  setTheSecondNumber("");
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = props.indexValue;
                  setTheNumberBefore(props.indexValue);
                  setSettableComma(true);
                  setEqualJustPressed(false);
                } else {
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  if (activeProcess !== null) {
                    setTheSecondNumber(theSecondNumber + props.indexValue);
                  } else {
                    setTheNumberBefore(theNumberBefore + props.indexValue);
                  }
                }
              }
            } else if (props.indexValue === ",") {
              if (activeProcess === null) {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theNumberBefore.includes(".") === true) {
                  setSettableComma(false);
                }
              } else {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theSecondNumber.includes(".") === true) {
                  setSettableComma(false);
                }
              }
              if (settableComma === true) {
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + ","));
                if (activeProcess === null) {
                  setTheNumberBefore(theNumberBefore + ".");
                } else {
                  setTheSecondNumber(theSecondNumber + ".");
                }
                setSettableComma(false);
              }
            }
          }
        } else if (window.matchMedia("(max-width: 400px) and (max-height: 700px)").matches) {
          if (document.querySelector('.result-text').textContent.length < 11) {
            if (props.indexValue === "0" || props.indexValue === "1" || props.indexValue === "2" || props.indexValue === "3" || props.indexValue === "4" || props.indexValue === "5" || props.indexValue === "6" || props.indexValue === "7" || props.indexValue === "8" || props.indexValue === "9") {
              if (document.querySelector('.result-text').textContent === "0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore(theNumberBefore + props.indexValue);
                }
              } else if (document.querySelector('.result-text').textContent === "-0") {
                document.querySelector('.result-text').innerHTML = "";
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots("-" + document.querySelector('.result-text').textContent + props.indexValue));
                setSettableComma(true);
                setIsZero(false);
                if (activeProcess !== null) {
                  setSettableComma(true);
                  setTheSecondNumber("-" + theSecondNumber + props.indexValue);
                } else {
                  setTheNumberBefore("-" + theNumberBefore + props.indexValue);
                }
              } else {
                if (theSecondNumber === "" && activeProcess !== null) {
                  setSettableComma(true);
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  setTheSecondNumber(theSecondNumber + props.indexValue);
                } else if (equalJustPressed === true) {
                  setEqualJustPressed(false);
                  document.querySelector('.laugh-voice').pause();
                  document.querySelector('.laugh-voice').currentTime = 0;
                  setActiveProcess(null);
                  setTheNumberBefore("");
                  setTheSecondNumber("");
                  document.querySelector('.result-text').innerHTML = "";
                  document.querySelector('.result-text').innerHTML = props.indexValue;
                  setTheNumberBefore(props.indexValue);
                  setSettableComma(true);
                  setEqualJustPressed(false);
                } else {
                  document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + props.indexValue));
                  if (activeProcess !== null) {
                    setTheSecondNumber(theSecondNumber + props.indexValue);
                  } else {
                    setTheNumberBefore(theNumberBefore + props.indexValue);
                  }
                }
              }
            } else if (props.indexValue === ",") {
              if (activeProcess === null) {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theNumberBefore.includes(".") === true) {
                  setSettableComma(false);
                }
              } else {
                if (document.querySelector('.result-text').textContent.includes(",") === true || theSecondNumber.includes(".") === true) {
                  setSettableComma(false);
                }
              }
              if (settableComma === true) {
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + ","));
                if (activeProcess === null) {
                  setTheNumberBefore(theNumberBefore + ".");
                } else {
                  setTheSecondNumber(theSecondNumber + ".");
                }
                setSettableComma(false);
              }
            }
          }
        }
      }}
      >{props.indexValue}</button>
    );
  }

  const WhiteGrayButton = props => {
    return (
      <button className="btn" style={
        {backgroundColor: "#9d9d9d", color: "#000"}
      }
      onClick={() => {
        setClickCount(clickCount + 1);
        if (props.indexValue === "AC" || props.indexValue === "C") {
          setEqualJustPressed(false);
          document.querySelector('.laugh-voice').pause();
          document.querySelector('.laugh-voice').currentTime = 0;
          setActiveProcess(null);
          setTheNumberBefore("");
          setTheSecondNumber("");
          document.querySelector('.result-text').innerHTML = "0";
          setIsZero(true);
          setSettableComma(false);
        } else if (props.indexValue === "+/-") {
          if (document.querySelector('.result-text').textContent !== "0") {
            if (activeProcess === null) {            
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(commaToDot(String(Number(theNumberBefore) * -1)))));
              setTheNumberBefore(String(Number(theNumberBefore) * -1));
            } else {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(commaToDot(String(Number(theSecondNumber) * -1)))));
              setTheSecondNumber(String(Number(theSecondNumber) * -1));
            }
          } else if (isZero) {
            if (document.querySelector('.result-text').textContent.includes("-")) {
              if (activeProcess === null) {
                document.querySelector('.result-text').innerHTML = "0";
              }
            } else {
              if (activeProcess === null) {
                document.querySelector('.result-text').innerHTML = "-0";
              }
            }

          }
        } else if (props.indexValue === "%") {
          if (activeProcess === null) {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(commaToDot(String(Number(theNumberBefore) / 100)))));
            setTheNumberBefore(String(Number(theNumberBefore) / 100));
          } else {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(commaToDot(String(Number(theSecondNumber) / 100)))));
            setTheSecondNumber(String(Number(theSecondNumber) / 100));
          }
        }
      }}
      >{props.indexValue}</button>
    );
  }

  useEffect(() => {
    keyboardRef.current.focus();
  }, [clickCount]);








  return (
    <div className="based-container" onKeyDown={e => {
      if (document.querySelector('.result-text').textContent.length <= 30) {
        if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9") {
          if (document.querySelector('.result-text').textContent === "0") {
            document.querySelector('.result-text').innerHTML = "";
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + e.key));
            setSettableComma(true);
            setIsZero(false);
            if (activeProcess !== null) {
              setSettableComma(true);
              setTheSecondNumber(theSecondNumber + e.key);
            } else {
              setTheNumberBefore(theNumberBefore + e.key);
            }
          } else if (document.querySelector('.result-text').textContent === "-0") {
            document.querySelector('.result-text').innerHTML = "";
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots("-" + document.querySelector('.result-text').textContent + e.key));
            setSettableComma(true);
            setIsZero(false);
            if (activeProcess !== null) {
              setSettableComma(true);
              setTheSecondNumber("-" + theSecondNumber + e.key);
            } else {
              setTheNumberBefore("-" + theNumberBefore + e.key);
            }
          } else {
            if (theSecondNumber === "" && activeProcess !== null) {
              setSettableComma(true);
              document.querySelector('.result-text').innerHTML = "";
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + e.key));
              setTheSecondNumber(theSecondNumber + e.key);
            } else if (equalJustPressed === true) {
              setEqualJustPressed(false);
              document.querySelector('.laugh-voice').pause();
              document.querySelector('.laugh-voice').currentTime = 0;
              setActiveProcess(null);
              setTheNumberBefore("");
              setTheSecondNumber("");
              document.querySelector('.result-text').innerHTML = "";
              document.querySelector('.result-text').innerHTML = e.key;
              setTheNumberBefore(e.key);
              setSettableComma(true);
              setEqualJustPressed(false);
            } else {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + e.key));
              if (activeProcess !== null) {
                setTheSecondNumber(theSecondNumber + e.key);
              } else {
                setTheNumberBefore(theNumberBefore + e.key);
              }
            }
          }
        } else if (e.key === "," || e.key === ".") {
          if (activeProcess === null) {
            if (document.querySelector('.result-text').textContent.includes(",") === true || theNumberBefore.includes(".") === true) {
              setSettableComma(false);
            }
          } else {
            if (document.querySelector('.result-text').textContent.includes(",") === true || theSecondNumber.includes(".") === true) {
              setSettableComma(false);
            }
          }
          if (settableComma === true) {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(document.querySelector('.result-text').textContent + ","));
            if (activeProcess === null) {
              setTheNumberBefore(theNumberBefore + ".");
            } else {
              setTheSecondNumber(theSecondNumber + ".");
            }
            setSettableComma(false);
          }
        } 
      } 
      if (e.key === "Backspace") {
        if (activeProcess === null) {
          if (theNumberBefore.length > 0 && isZero !== true) {
            let a = document.querySelector('.result-text').textContent.slice(0, document.querySelector('.result-text').textContent.length - 1);
            if (document.querySelector('.result-text').textContent[document.querySelector('.result-text').textContent.length - 1] === ",") {
              setSettableComma(true);
            }
            if (a.length === 0) {
              document.querySelector('.result-text').innerHTML = "0";
            } else {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(a));
            }
          }
        } else {
          if (theSecondNumber.length > 0 && isZero !== true) {
            if (document.querySelector('.result-text').textContent[document.querySelector('.result-text').textContent.length - 1] === ",") {
              setSettableComma(true);
            }
            let a = document.querySelector('.result-text').textContent.slice(0, document.querySelector('.result-text').textContent.length - 1);
            if (a.length === 0) {
              document.querySelector('.result-text').innerHTML = "0";
            } else {
              document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(a)); 
            } 
          }
        }
        if (activeProcess === null) {
          if (theNumberBefore.length > 0 && isZero !== true) {
            setTheNumberBefore(theNumberBefore.slice(0, theNumberBefore.length - 1));
          }
        } else {
          if (theSecondNumber.length > 0 && isZero !== true) {
            setTheSecondNumber(theSecondNumber.slice(0, theSecondNumber.length - 1));
          }
        }
      } else if (e.key === "Escape") {
        setEqualJustPressed(false);
        document.querySelector('.laugh-voice').pause();
        document.querySelector('.laugh-voice').currentTime = 0;
        setActiveProcess(null);
        setTheNumberBefore("");
        setTheSecondNumber("");
        document.querySelector('.result-text').innerHTML = "0";
        setIsZero(true);
        setSettableComma(false); 
      } else if (e.key === "+") {
        setEqualJustPressed(false);
        if (activeProcess !== null) {
          setActiveProcess("plus");
          if (activeProcess === "plus") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "minus") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "multiply") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "division") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
            setTheSecondNumber("");
          }
        } else {
          setActiveProcess("plus");
        }
      } else if (e.key === "-") {
        setEqualJustPressed(false);
        if (activeProcess !== null) {
          setActiveProcess("minus");
          if (activeProcess === "plus") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "minus") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "multiply") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "division") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
            setTheSecondNumber("");
          }
        } else {
          setActiveProcess("minus");
        }
      } else if (e.key === "*") {
        setEqualJustPressed(false);
        if (activeProcess !== null) {
          setActiveProcess("multiply");
          if (activeProcess === "plus") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "minus") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "multiply") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "division") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
            setTheSecondNumber("");
          }
        } else {
          setActiveProcess("multiply");
        }
      } else if (e.key === "/") {
        setEqualJustPressed(false);
        if (activeProcess !== null) {
          setActiveProcess("division");
          if (activeProcess === "plus") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "minus") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "multiply") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
            setTheSecondNumber("");
          } else if (activeProcess === "division") {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
            setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
            setTheSecondNumber("");
          }
        } else {
          setActiveProcess("division");
        }
      } else if (e.key === "Enter") {
        setActiveProcess(null);
        if (activeProcess === "plus") {
          if (Number(String(Number(theNumberBefore) + Number(theSecondNumber))) === 31) {
            document.querySelector('.laugh-voice').currentTime = 0;
            document.querySelector('.laugh-voice').play();
          }
          document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) + Number(theSecondNumber)))));
          setTheNumberBefore(String(Number(theNumberBefore) + Number(theSecondNumber)));
          setTheSecondNumber("");
        } else if (activeProcess === "minus") {
          if (Number(String(Number(theNumberBefore) - Number(theSecondNumber))) === 31) {
            document.querySelector('.laugh-voice').currentTime = 0;
            document.querySelector('.laugh-voice').play();
          }
          document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) - Number(theSecondNumber)))));
          setTheNumberBefore(String(Number(theNumberBefore) - Number(theSecondNumber)));
          setTheSecondNumber("");
        } else if (activeProcess === "multiply") {
          if (Number(String(Number(theNumberBefore) * Number(theSecondNumber))) === 31) {
            document.querySelector('.laugh-voice').currentTime = 0;
            document.querySelector('.laugh-voice').play();
          }
          document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) * Number(theSecondNumber)))));
          setTheNumberBefore(String(Number(theNumberBefore) * Number(theSecondNumber)));
          setTheSecondNumber("");
        } else if (activeProcess === "division") {
          if (Number(String(Number(theNumberBefore) / Number(theSecondNumber))) === 31) {
            document.querySelector('.laugh-voice').currentTime = 0;
            document.querySelector('.laugh-voice').play();
          }
          document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(String(Number(theNumberBefore) / Number(theSecondNumber)))));
          setTheNumberBefore(String(Number(theNumberBefore) / Number(theSecondNumber)));
          setTheSecondNumber("");
        }
        setEqualJustPressed(true);
        setSettableComma(false);
      } else if (e.key === "%") {
        if (activeProcess === null) {
          document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(commaToDot(String(Number(theNumberBefore) / 100)))));
          setTheNumberBefore(String(Number(theNumberBefore) / 100));
        } else {
          document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(commaToDot(String(Number(theSecondNumber) / 100)))));
          setTheSecondNumber(String(Number(theSecondNumber) / 100));
        }
      } else if (e.ctrlKey && e.key.toLowerCase() === "m") {
        if (document.querySelector('.result-text').textContent !== "0") {
          if (activeProcess === null) {            
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(commaToDot(String(Number(theNumberBefore) * -1)))));
            setTheNumberBefore(String(Number(theNumberBefore) * -1));
          } else {
            document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(controlZ(commaToDot(String(Number(theSecondNumber) * -1)))));
            setTheSecondNumber(String(Number(theSecondNumber) * -1));
          }
        } else if (isZero) {
          if (document.querySelector('.result-text').textContent.includes("-")) {
            if (activeProcess === null) {
              document.querySelector('.result-text').innerHTML = "0";
            }
          } else {
            if (activeProcess === null) {
              document.querySelector('.result-text').innerHTML = "-0";
            }
          }
      
        }
      }
    }}>
      <audio src={laugh} controls className='laugh-voice'></audio>
      <div className="result-part">
        <button className='unactive-btn' ref={keyboardRef}></button>
        <button className='del-btn'
        onClick={() => {
          if (activeProcess === null) {
            if (theNumberBefore.length > 0 && isZero !== true) {
              let a = document.querySelector('.result-text').textContent.slice(0, document.querySelector('.result-text').textContent.length - 1);
              if (document.querySelector('.result-text').textContent[document.querySelector('.result-text').textContent.length - 1] === ",") {
                setSettableComma(true);
              }
              if (a.length === 0) {
                document.querySelector('.result-text').innerHTML = "0";
              } else {
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(a));
              }
            }
          } else {
            if (theSecondNumber.length > 0 && isZero !== true) {
              if (document.querySelector('.result-text').textContent[document.querySelector('.result-text').textContent.length - 1] === ",") {
                setSettableComma(true);
              }
              let a = document.querySelector('.result-text').textContent.slice(0, document.querySelector('.result-text').textContent.length - 1);
              if (a.length === 0) {
                document.querySelector('.result-text').innerHTML = "0";
              } else {
                document.querySelector('.result-text').innerHTML = makeTheNumberDot(removeDots(a)); 
              } 
            }
          }
          if (activeProcess === null) {
            if (theNumberBefore.length > 0 && isZero !== true) {
              setTheNumberBefore(theNumberBefore.slice(0, theNumberBefore.length - 1));
            }
          } else {
            if (theSecondNumber.length > 0 && isZero !== true) {
              setTheSecondNumber(theSecondNumber.slice(0, theSecondNumber.length - 1));
            }
          }
        }}
        ></button>
        <p className="result-text">0</p>
      </div>
      <div className="buttons-part">
        <div className="buttons-container">
          {
            isZero ? 
            <WhiteGrayButton indexValue="AC"></WhiteGrayButton>
            : 
            <WhiteGrayButton indexValue="C"></WhiteGrayButton>
          }
          <WhiteGrayButton indexValue="+/-"></WhiteGrayButton>
          <WhiteGrayButton indexValue="%"></WhiteGrayButton>
          <OrangeButton indexValue="÷"></OrangeButton>
          <DarkGrayButton indexValue="7"></DarkGrayButton>
          <DarkGrayButton indexValue="8"></DarkGrayButton>
          <DarkGrayButton indexValue="9"></DarkGrayButton>
          <OrangeButton indexValue="×"></OrangeButton>
          <DarkGrayButton indexValue="4"></DarkGrayButton>
          <DarkGrayButton indexValue="5"></DarkGrayButton>
          <DarkGrayButton indexValue="6"></DarkGrayButton>
          <OrangeButton indexValue="-"></OrangeButton>
          <DarkGrayButton indexValue="1"></DarkGrayButton>
          <DarkGrayButton indexValue="2"></DarkGrayButton>
          <DarkGrayButton indexValue="3"></DarkGrayButton>
          <OrangeButton indexValue="+"></OrangeButton>
          <DarkGrayButton indexValue="0"></DarkGrayButton>
          <DarkGrayButton indexValue=","></DarkGrayButton>
          <OrangeButton indexValue="="></OrangeButton>
        </div>
      </div>
    </div>
  );
}

export default App;