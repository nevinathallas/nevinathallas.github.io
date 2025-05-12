// Dark mode functionality
const darkModeToggle = document.getElementById('darkMode');
const html = document.documentElement;

// Check for saved user preference, if any, on load of the website
const darkModePref = localStorage.getItem('darkMode');
if (darkModePref === 'dark') {
    html.classList.add('dark');
}

// Listen for toggle clicks
darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    // Save user preference
    localStorage.setItem('darkMode', html.classList.contains('dark') ? 'dark' : 'light');
});
