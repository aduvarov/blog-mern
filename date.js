'use strict';

function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}

const date = new Date('2023-11-09T00:00:00.000Z');

for (let i = 1; i < 53; i++) {
    const newDate = addDays(date, 1);
    const weekday = newDate.getDay();
    if (weekday === 1 || weekday === 3 || weekday === 5) {
        console.log(
            `${newDate.getFullYear()}-${
                newDate.getMonth() + 1 < 10
                    ? '0' + (newDate.getMonth() + 1)
                    : newDate.getMonth() + 1
            }-${newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()}\t${
                weekday === 1 ? 'Понедельник' : weekday === 3 ? 'Среда' : 'Пятница'
            }`
        );
    }
}
