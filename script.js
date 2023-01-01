const result = document.querySelector('#result');
const calc = document.querySelector('#calculator');
const number = calc.querySelectorAll('button');

number.forEach((num) => {
    num.addEventListener('click', () => {
        const id = num.getAttribute('id');
        const value = num.getAttribute('value');
        console.log(value, id);

        if (id == 'number' || id == 'symbol2') {
            result.innerHTML += value;
        } else if (id == 'symbol') {
            result.innerHTML += ` ${value} `;
        } else {
            result.innerHTML = '';
        }
    });
});

