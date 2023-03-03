//!Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

const { join } = require("path")

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

//? rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// ?rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// ?rot13("SERR YBIR?") should decode to the string FREE LOVE?
// ?rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

        function rot13(str) {
            const splittedStr = str.split(" ")
            for (let i in splittedStr) {
                splittedStr[i] = splittedStr[i]
                .split("")
                .map(item =>
                    (65<=item.charCodeAt(0) && item.charCodeAt(0)<=90)
                    ? asciUpper(item.charCodeAt(0)+13) 
                    : item.charCodeAt(0)
                    )
                }
            const strCode= splittedStr
            .map((items) => items
            .map((item) => String.fromCharCode(item)))
            const strJoinCode = strCode.map((items) => items.join(""))
            
            str = strJoinCode.join(" ");
            return str
        }
        function asciUpper(asciNum){
            if (asciNum>90){
            const more = asciNum % 90
            const cipNum = 64 + more
                return (cipNum)
            }else{
                return (asciNum)
            }
        }
        rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
        rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
        
        rot13("SERR YBIR?")

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")









