const personGenerator = {
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    surnames: [
        "Иванов",
        "Смирнов",
        "Кузнецов",
        "Попов",
        "Васильев",
        "Петров",
        "Соколов",
        "Михайлов",
        "Новиков",
        "Федоров",
        "Морозов",
        "Волков",
        "Алексеев",
        "Лебедев",
        "Семенов",
        "Егоров",
        "Павлов",
        "Козлов",
        "Степанов",
        "Николаев"
    ],

    maleNames: [
        "Александр",
        "Андрей",
        "Антон",
        "Артем",
        "Даниил",
        "Денис",
        "Дмитрий",
        "Егор",
        "Иван",
        "Кирилл",
        "Максим",
        "Матвей",
        "Михаил",
        "Никита",
        "Олег",
        "Павел",
        "Роман",
        "Сергей",
        "Станислав",
        "Тимофей"
    ],

    femaleNames: [
        "Александра",
        "Анастасия",
        "Анна",
        "Валерия",
        "Дарья",
        "Екатерина",
        "Елена",
        "Ирина",
        "Ксения",
        "Любовь",
        "Маргарита",
        "Мария",
        "Надежда",
        "Наталья",
        "Оксана",
        "Ольга",
        "Светлана",
        "Татьяна",
        "Юлия",
        "Яна"
    ],

    generatePerson: function(gender) {
        let surname = this.surnames[Math.floor(Math.random() * this.surnames.length)];
        let firstName;
        
        
        if (gender === this.GENDER_MALE) {
            firstName = this.maleNames[Math.floor(Math.random() * this.maleNames.length)];
        } else {
            firstName = this.femaleNames[Math.floor(Math.random() * this.femaleNames.length)];
            if (Math.random() < 0.5) {
                surname += 'а';
            }
        }

        return {
            lastName: surname,
            firstName: firstName,
            gender: gender
        };
    }
};
