const bthDarkMode = document.querySelector(".dark-node-bth");




if (localStorage.getItem('darkMode') === 'dark') {
    bthDarkMode.classList.add('dark-node-bth--active');
    document.body.classList.add('dark');
}



if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    bthDarkMode.classList.add('dark-node-bth--active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'Light'){
    bthDarkMode.classList.remove('dark-node-bth--active');
    document.body.classList.remove('dark');

}



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


bthDarkMode.onclick = function () {
    bthDarkMode.classList.toggle("dark-node-bth--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark){
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'Light');
    }

}

