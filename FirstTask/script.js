'use strict';


let money   = +prompt("Ваш бюджет на месяц", " "),
    time    = prompt("YYYY-MM-DD", " ");

let firstArticle     = prompt("Введите обязательную статью расходов в этом месяце", " "),
    firstArticleSum  = +prompt("Во сколько обойдется?", " "),
    secondArticle    = prompt("Введите обязательную статью расходов в этом месяце", " "),
    secondArticleSum = +prompt("Во сколько обойдется?", " ");

let oneDay = (firstArticleSum + secondArticleSum) / 30;

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        firstArticle: firstArticleSum,
        secondArticle: secondArticleSum
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert("Сегодня "+ time + " и ваш бюджет на месяц составляет: " + money);
alert("Ваши 2 обязательные статьи на месяц это: " + firstArticle + ", " + secondArticle);
alert("Их сумма составляет: " + (firstArticleSum + secondArticleSum) + " и это означает, что в день вам придется тратить на них: " + oneDay);
