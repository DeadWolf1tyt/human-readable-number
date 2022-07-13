module.exports = function toReadable (number) {
  let str = String(number);
				let string = number;
				let arrayStr = str.split('');
				let arrayStr2 = '';
				if (number < 21) {
								switch(string) {
												case 0: string = 'zero'; break;
												case 1: string = 'one'; break;
												case 2: string = 'two'; break;
												case 3: string = 'three'; break;
												case 4: string = 'four'; break;
												case 5: string = 'five'; break;
												case 6: string = 'six'; break;
												case 7: string = 'seven'; break;
												case 8: string = 'eight'; break;
												case 9: string = 'nine'; break;
												case 10: string = 'ten'; break;
												case 11: string = 'eleven'; break;
												case 12: string = 'twelve'; break;
												case 13: string = 'thirteen'; break;
												case 14: string = 'fourteen'; break;
												case 15: string = 'fifteen'; break;
												case 16: string = 'sixteen'; break;
												case 17: string = 'seventeen'; break;
												case 18: string = 'eighteen'; break;
												case 19: string = 'nineteen'; break;
												case 20: string = 'twenty'; break;
								}
								return string;
				} else if (arrayStr.length === 2 && number > 20) {
								switch(arrayStr[0]) {
												case "2": arrayStr2 += 'twenty'; break;
												case "3": arrayStr2 += 'thirty'; break;
												case "4": arrayStr2 += 'forty'; break;
												case "5": arrayStr2 += 'fifty'; break;
												case "6": arrayStr2 += 'sixty'; break;
												case "7": arrayStr2 += 'seventy'; break;
												case "8": arrayStr2 += 'eighty'; break;
												case "9": arrayStr2 += 'ninety'; break;
								}
								switch(arrayStr[1]) {
												case "1": arrayStr2 += ' one'; break;
												case "2": arrayStr2 += ' two'; break;
												case "3": arrayStr2 += ' three'; break;
												case "4": arrayStr2 += ' four'; break;
												case "5": arrayStr2 += ' five'; break;
												case "6": arrayStr2 += ' six'; break;
												case "7": arrayStr2 += ' seven'; break;
												case "8": arrayStr2 += ' eight'; break;
												case "9": arrayStr2 += ' nine'; break;
												case "0": break;
								}
								return arrayStr2;
				} else if ((number > 99 && number < 111) || (number > 119 && number < 211) || (number > 219 && number < 311) || (number > 319 && number < 411) || (number > 419 && number < 511) || (number > 519 && number < 611) || (number > 619 && number < 711) || (number > 719 && number < 811) || (number > 819 && number < 911) || (number > 919 && number < 1000)) {
								switch(arrayStr[0]) {
												case "1": arrayStr2 += 'one hundred'; break;
												case "2": arrayStr2 += 'two hundred'; break;
												case "3": arrayStr2 += 'three hundred'; break;
												case "4": arrayStr2 += 'four hundred'; break;
												case "5": arrayStr2 += 'five hundred'; break;
												case "6": arrayStr2 += 'six hundred'; break;
												case "7": arrayStr2 += 'seven hundred'; break;
												case "8": arrayStr2 += 'eight hundred'; break;
												case "9": arrayStr2 += 'nine hundred'; break;
								}
								switch(arrayStr[1]) {
												case "1": arrayStr2 += ' ten'; break;
												case "2": arrayStr2 += ' twenty'; break;
												case "3": arrayStr2 += ' thirty'; break;
												case "4": arrayStr2 += ' forty'; break;
												case "5": arrayStr2 += ' fifty'; break;
												case "6": arrayStr2 += ' sixty'; break;
												case "7": arrayStr2 += ' seventy'; break;
												case "8": arrayStr2 += ' eighty'; break;
												case "9": arrayStr2 += ' ninety'; break;
												case "0": break;
								}
								switch(arrayStr[2]) {
												case "1": arrayStr2 += ' one'; break;
												case "2": arrayStr2 += ' two'; break;
												case "3": arrayStr2 += ' three'; break;
												case "4": arrayStr2 += ' four'; break;
												case "5": arrayStr2 += ' five'; break;
												case "6": arrayStr2 += ' six'; break;
												case "7": arrayStr2 += ' seven'; break;
												case "8": arrayStr2 += ' eight'; break;
												case "9": arrayStr2 += ' nine'; break;
												case "0": break;
								}
								return arrayStr2;
				} else {
							 switch(arrayStr[0]){
												case "1": arrayStr2 += 'one hundred'; break;
												case "2": arrayStr2 += 'two hundred'; break;
												case "3": arrayStr2 += 'three hundred'; break;
												case "4": arrayStr2 += 'four hundred'; break;
												case "5": arrayStr2 += 'five hundred'; break;
												case "6": arrayStr2 += 'six hundred'; break;
												case "7": arrayStr2 += 'seven hundred'; break;
												case "8": arrayStr2 += 'eight hundred'; break;
												case "9": arrayStr2 += 'nine hundred'; break;
								}
								switch(arrayStr[2]) {
												case "1": arrayStr2 += ' eleven'; break;
												case "2": arrayStr2 += ' twelve'; break;
												case "3": arrayStr2 += ' thirteen'; break;
												case "4": arrayStr2 += ' fourteen'; break;
												case "5": arrayStr2 += ' fifteen'; break;
												case "6": arrayStr2 += ' sixteen'; break;
												case "7": arrayStr2 += ' seventeen'; break;
												case "8": arrayStr2 += ' eighteen'; break;
												case "9": arrayStr2 += ' nineteen'; break;
								}
								return arrayStr2;
				}
}
