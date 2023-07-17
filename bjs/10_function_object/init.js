
document.addEventListener('DOMContentLoaded', function() {
    const clearButton = document.getElementById('clear');
    const generateButton = document.getElementById('generate');
    const surnameOutput = document.getElementById('surnameOutput');
    const firstNameOutput = document.getElementById('firstNameOutput');
    const genderOutput = document.getElementById('genderOutput');
    const birthYearOutput = document.getElementById('birthYearOutput');

    function generatePersonData() {
        const gender = Math.random() < 0.5 ? personGenerator.GENDER_MALE : personGenerator.GENDER_FEMALE;
        const person = personGenerator.generatePerson(gender);
        const birthYear = Math.floor(Math.random() * (2003 - 1950 + 1)) + 1950;

        surnameOutput.innerText = person.lastName;
        firstNameOutput.innerText = person.firstName;
        genderOutput.innerText = person.gender;
        birthYearOutput.innerText = birthYear;
    }

    clearButton.addEventListener('click', function() {
        surnameOutput.innerText = 'Генерация фамилии';
        firstNameOutput.innerText = 'Иван';
        genderOutput.innerText = 'Генерация пола';
        birthYearOutput.innerText = 'Генерация года рождения';
    });

    generateButton.addEventListener('click', generatePersonData);

    generatePersonData();
});
