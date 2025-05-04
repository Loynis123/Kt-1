const felineCompanions = [
    {
        "name": "Лара",
        "imageUrl": "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg",
        "years": 8,
        "score": 7,
        "isFavorite": false,
        "details": "Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.",
        "identifier": 1
    },
    {
        "name": "Базиль",
        "imageUrl": "https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
        "years": 2,
        "score": 10,
        "isFavorite": false,
        "details": "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт.",
        "identifier": 2
    },
    {
        "name": "Риш",
        "imageUrl": "https://www.friendforpet.ru/api/sites/default/files/2022-01/_DM34706.JPG",
        "years": 1,
        "score": 10,
        "isFavorite": true,
        "details": "Риш любит лесенки, канаты. Очень активный и дружелюбный кот. Риш полностью здоров, привит, кастрирован. Использует лоточек и очень аккуратен.",
        "identifier": 3
    },
    {
        "name": "Элли",
        "imageUrl": "https://www.friendforpet.ru/api/sites/default/files/2022-01/1_25.jpg",
        "years": 4,
        "score": 8,
        "isFavorite": false,
        "details": "Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать. Не доверяет людям, потребуется время, чтобы стать ей другом. Приучена к лотку и когтеточке",
        "identifier": 4
    },
    {
        "name": "Чарли",
        "imageUrl": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D0%B5%D0%B2%D0%B83_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "years": 1,
        "score": 8,
        "isFavorite": false,
        "details": "Чёрно-белый юный котофилософ очень любит размышлять и быть наедине. Пока что не доверяет людям, не агрессивный. Ладит с другими животными, приучен к лотку и когтеточке",
        "identifier": 5
    },
    {
        "name": "Стефани",
        "imageUrl": "https://www.friendforpet.ru/api/sites/default/files/2022-01/4_30.jpg",
        "years": 6,
        "score": 9,
        "isFavorite": false,
        "details": "Прелестная Стефани – трогательная, добродушная и очень-очень общительная девочка как никто другой нуждается в заботе и любви. Приучена к лотку и когтеточке",
        "identifier": 6
    },
    {
        "name": "Дуся",
        "imageUrl": "https://www.friendforpet.ru/api/sites/default/files/2022-02/B1444207-6EE3-4BA4-97F7-2F9666AE2F63.jpeg",
        "years": 1,
        "score": 9,
        "isFavorite": false,
        "details": "Дусеньке около 1 года с небольшим, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно. Очень общительная и нежная, хочет постоянного внимания.",
        "identifier": 7
    },
    {
        "name": "Бруно",
        "imageUrl": "https://www.friendforpet.ru/api/sites/default/files/2022-01/IMG-20211223-WA0049.jpg",
        "years": 1,
        "score": 10,
        "isFavorite": false,
        "details": "Очаровательный активный кот Бруно, находится в постоянном движении! Очаровательный и ласковый кот. Приучен к лотку, ладит с другими котами, привит.",
        "identifier": 8
    },
    {
        "name": "Лара",
        "imageUrl": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8F%D1%87%D0%BE%D0%BA4_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "years": 1,
        "score": 9,
        "isFavorite": true,
        "details": "Немного боязливый, но очень добрый и нежный кот Светлячок. Приучен к лотку и когтеточке, ладит с детьми, привит. Станет вам хорошим другом",
        "identifier": 9
    }
];

const gridContainer = document.createElement('div');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
gridContainer.style.gap = '15px';
gridContainer.style.padding = '20px';

function generateCatCard(cat) {
    const cardElement = document.createElement('div');
    cardElement.style.border = '2px solid rgba(255, 0, 0, 0.5)';
    cardElement.style.borderRadius = '8px';
    cardElement.style.padding = '10px';
    cardElement.style.backgroundColor = cat.isFavorite ? '#ffe4b5' : '#ffffff';

    const image = document.createElement('img');
    image.src = cat.imageUrl;
    image.alt = cat.name;
    image.style.width = '100%';
    image.style.height = '230px';
    image.style.objectFit = 'cover';
    cardElement.appendChild(image);

    const heading = document.createElement('h3');
    heading.textContent = cat.name;
    heading.style.textAlign = 'center';
    cardElement.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Возраст: ${cat.years}<br>${cat.details}<br>Рейтинг:<br>${'⭐️'.repeat(cat.score)}`;
    cardElement.appendChild(paragraph);

    return cardElement;
}

felineCompanions.forEach(cat => {
    const catCard = generateCatCard(cat);
    gridContainer.appendChild(catCard);
});

document.body.appendChild(gridContainer);
