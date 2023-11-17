let score = 0;

const correct = 10;

let isPlus, isSun, isDivide, isSky, isAnswer;

const isGame = prompt("Ви згодні пройти опитування?")

if (isGame == "Так") {
    alert("Почнемо!");
    isPlus = prompt("Скільки буде 2+2?");
    if (isPlus == "4") {
        score += (correct);
        console.log(score);
    };
    isSun = prompt("Сонце встає на сході?");
    if (isSun == "Так") {
        score += (correct);
        console.log(score);
    };
    isDivide = prompt("Скільки буде 5 / 0??");
    if (isDivide == "Не можна") {
        score += (correct);
        console.log(score);
    };
    isSky = prompt("Якого кольору небо?");
    if (isSky == "Синє") {
        score += (correct);
        console.log(score);
    };
    isSky = prompt("Яка правильна відповідь на головне питання життя, всесвіту та всього такого?");
    if (isSky == "42") {
        score += (correct);
        console.log(score);
    }; //one of my favorite books :)
}

alert(`Ваш результат: ${score}`);