// Dark mode functionality
const darkModeToggle = document.getElementById('darkMode');
const html = document.documentElement;
const body = document.body;

// Check for saved user preference, if any, on load of the website
const darkModePref = localStorage.getItem('darkMode');
if (darkModePref === 'dark') {
    html.classList.add('dark');
    body.classList.remove('light');
} else {
    html.classList.remove('dark');
    body.classList.add('light');
}

// Listen for toggle clicks
darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    
    // Toggle light class on body
    if (html.classList.contains('dark')) {
        body.classList.remove('light');
    } else {
        body.classList.add('light');
    }
    
    // Save user preference
    localStorage.setItem('darkMode', html.classList.contains('dark') ? 'dark' : 'light');
});
