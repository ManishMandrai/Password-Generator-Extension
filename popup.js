document.getElementById('generatePassword').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('passwordOutput').value = password;
});

document.getElementById('copyPassword').addEventListener('click', function() {
    const password = document.getElementById('passwordOutput');
    password.select();
    document.execCommand('copy');
    document.getElementById('statusMessage').textContent = "Whoosh! Your password has been copied,superhero!👍  ";
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercaseChars = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    const lowercaseChars = 'zxcvbnmasdfghjklpoiuytrewq';
    const numberChars = '1234567890';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allChars = '';
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}
