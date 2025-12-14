// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    let currentview = 'modules';

    // Set default view
    document.querySelector('.nav-link[data-page="modules"]').classList.add('active');
    document.getElementById('modules').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and pages
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding page
            const pageId = this.getAttribute('data-page');
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });

    // Caprai button functionality
    const capraiBtn = document.getElementById('caprai-btn');
    const capraiUrl = 'https://chatgpt.com/g/g-67c1d8d7dce48191a70ef314d384f676-caprai-capsimcore-edition';
    
    if (capraiBtn) {
        capraiBtn.addEventListener('click', function() {
            // Calculate window dimensions to dock to the right side
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const popupWidth = Math.min(600, windowWidth * 0.4);
            const popupHeight = windowHeight * 0.8;
            const left = windowWidth - popupWidth;
            const top = (windowHeight - popupHeight) / 2;
            
            // Open popup window docked to the right
            window.open(
                capraiUrl,
                'Caprai',
                `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`
            );
        });
    }

    // Investor World button functionality
    const investorWorldBtn = document.getElementById('investor-world-btn');
    const investorWorldUrl = 'https://core-100-investor-portfolio-tool-9zce1l4z5.vercel.app';
    
    if (investorWorldBtn) {
        investorWorldBtn.addEventListener('click', function() {
            // Open in a full-sized popup window
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const popupWidth = Math.min(1200, windowWidth * 0.9);
            const popupHeight = windowHeight * 0.9;
            const left = (windowWidth - popupWidth) / 2;
            const top = (windowHeight - popupHeight) / 2;
            
            window.open(
                investorWorldUrl,
                'InvestorWorld',
                `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`
            );
        });
    }
});

