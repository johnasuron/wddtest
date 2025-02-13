// Function to update the copyright year and last modified date
function updateFooterDates() {
    // Update the copyright year
    const copyrightYear = document.getElementById('copyrightYear');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Update the last modified date and time
    const lastModified = document.getElementById('lastModified');
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateFooterDates);