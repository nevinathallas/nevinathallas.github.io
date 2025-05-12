// Create src/js/loader-animation.js
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const progressCircle = document.querySelector('.progress');
    const checkmark = document.querySelector('.checkmark');
    
    // Simulate loading progress
    let progress = 0;
    const circumference = 326.56; // 2πr (r=52)
    
    const interval = setInterval(() => {
        progress += 1;
        const offset = circumference - (progress / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
        
        if(progress >= 100) {
            clearInterval(interval);
            // Show checkmark
            checkmark.classList.remove('hidden');
            // Hide loading screen
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }, 800);
        }
    }, 25);
});