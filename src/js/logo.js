// Update logo colors based on dark mode
const updateLogoColors = () => {
    const logo = document.querySelector('#logo-svg');
    const isDark = document.documentElement.classList.contains('dark');
    
    // Get all rectangles in the logo
    const rects = logo.querySelectorAll('rect');
    
    if (isDark) {
        // Background
        rects[0].setAttribute('fill', '#1f2937'); // dark:bg-gray-800 to match navbar
        // Center rectangle
        rects[1].setAttribute('fill', '#F9F6EE'); // primary color
        // Diagonal lines
        rects[2].setAttribute('fill', '#1f2937');
        rects[3].setAttribute('fill', '#1f2937');
    } else {
        // Light mode colors
        rects[0].setAttribute('fill', '#F9F6EE');
        rects[1].setAttribute('fill', '#1C1C1C');
        rects[2].setAttribute('fill', '#F9F6EE');
        rects[3].setAttribute('fill', '#F9F6EE');
    }
};

// Update colors when dark mode changes
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkMode');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            // Small delay to ensure dark mode class is applied
            setTimeout(updateLogoColors, 50);
        });
    }
    // Initial color setup
    updateLogoColors();
});
