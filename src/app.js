import { getRandomColor } from './utils';

export function initApp() {
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Изменить цвет страницы';
    document.body.append(button);

    button.addEventListener('click', (event) => {
        document.body.style.backgroundColor = getRandomColor();
    })
}