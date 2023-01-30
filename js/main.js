const bthDarkMode = document.querySelector(".dark-node-bth");



// 1. Проверка темной темы в LocalStorage
if (localStorage.getItem('darkMode') === 'dark') {
    bthDarkMode.classList.add('dark-node-bth--active');
    document.body.classList.add('dark');
}

// 2.Проверка темной темы на уровне системных настроек

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    bthDarkMode.classList.add('dark-node-bth--active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'Light'){
    bthDarkMode.classList.remove('dark-node-bth--active');
    document.body.classList.remove('dark');

}

// Если меняются системные настройки, меняем тему 

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
const newColorScheme = event.matches ? 'dark': 'light';


    if (newColorScheme === 'dark'){
        bthDarkMode.classList.add('dark-node-bth--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    } else {
        bthDarkMode.classList.remove('dark-node-bth--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'Light');

    }
})

// включения ночного режима по кнопке
bthDarkMode.onclick = function () {
    bthDarkMode.classList.toggle("dark-node-bth--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark){
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'Light');
    }

}

