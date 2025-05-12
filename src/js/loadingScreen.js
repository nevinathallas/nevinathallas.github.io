document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove the loading screen from DOM after animation
        setTimeout(() => {
            loadingScreen.remove();
            
            // Add show class to all animated elements
            document.querySelectorAll('.animate-landing').forEach(element => {
                element.classList.add('show');
            });
        }, 500);
    }, 2000);
});
