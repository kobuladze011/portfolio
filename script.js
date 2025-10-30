// JavaScript for The Developer Chronicle Portfolio

// Projects Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectsModal');
    const openBtn = document.querySelector('.portfolio-archive-btn');
    const closeBtn = document.querySelector('.close-modal');
    
    // Open modal
    openBtn.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on background
    });
    
    // Close modal when clicking X button
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal on ESC key press
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Smooth scroll for project links (optional enhancement)
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you can add your project link logic
            console.log('Project link clicked:', this.textContent);
        });
    });
});
