module.exports = function toReadable(number) {

    const primeNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const tenNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const hundreds = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let result = ''


    if(number == 20 || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90) {
        result = tenNumbers[number / 10 - 2];
        return result
    }

    if(number == 100 || number == 200 || number == 300 || number == 400 || number == 500 || number == 600 || number == 700 || number == 800 || number == 900) {
        result = `${primeNumbers[number / 100]} hundred`;
        return result
    }

    if (number < 20) {
        result = result = primeNumbers[number];
        return result;

    } else if (number > 20 && number < 100) {

        let numberStr = String(number);
        let tenNumbersStr = String(number);

        numberStr = numberStr.substring(1);
        tenNumbersStr = tenNumbersStr.slice(0, 1);

        numberStr = Number(numberStr);
        tenNumbersStr = Number(tenNumbersStr);

        result = `${tenNumbers[tenNumbersStr - 2]} ${primeNumbers[numberStr]}`;
        return result;

    } else if (number > 99 && number < 120) {

        let numberStr = String(number);
        let tenNumbersStr = String(number);
        let hundred = numberStr.slice(0, 1);

        tenNumbersStr = tenNumbersStr.slice(1, 3)

        numberStr = Number(numberStr);
        tenNumbersStr = Number(tenNumbersStr);
        hundred = Number(hundred);

        result = `${hundreds[hundred - 1]} hundred ${primeNumbers[tenNumbersStr]}`
        return result
    } else if (number > 119 && number < 1000) {

        number = String(number)

        if (number[1] == 1) {
            let numberStr = String(number);

            let firstNumber = numberStr.slice(0, 1);
            let secondNumber = numberStr.slice(1, 3);
            let thrityNumber = numberStr.slice(2, 3);

            numberStr = Number(numberStr);
            secondNumber = Number(secondNumber);
            thrityNumber = Number(thrityNumber);

            result = `${primeNumbers[firstNumber]} hundred ${primeNumbers[secondNumber]}`

        } else if (number[1] !== 1) {
            let numberStr = String(number);

            let firstNumber = numberStr.slice(0, 1);
            let secondNumber = numberStr.slice(1, 2);
            let thrityNumber = numberStr.slice(2, 3);

            numberStr = Number(numberStr);
            secondNumber = Number(secondNumber);
            thrityNumber = Number(thrityNumber);

            result = `${primeNumbers[firstNumber]} hundred ${tenNumbers[secondNumber - 2]} ${primeNumbers[thrityNumber]}`

        }

        if (result.includes('zero')) {
            result = result.replaceAll('zero', '').trimEnd();
            return result
        } else if (result.includes('undefined ')) {
            result = result.replaceAll('undefined ', '').trimEnd();
            return result
        }
        return result
    }
}
