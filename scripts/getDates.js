console.log("Hello from getDates.js!");

function setLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (!lastModifiedElement) {
        console.error("Error: Element with id 'lastModified' not found.");
        return; // Exit if the element doesn't exist
    }
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const formattedTime = currentDate.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    lastModifiedElement.textContent = `${formattedDate} ${formattedTime}`;
}

function setCopyrightYear() {
    const copyrightElement = document.getElementById('copyrightYear');
    if (!copyrightElement) {
        console.error("Error: Element with id 'copyrightYear' not found.");
        return; // Exit if the element doesn't exist
    }
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `©${currentYear}`;
}

// Function to call both functions after page is fully loaded
function init() {
    setLastModifiedDate();
    setCopyrightYear();
}

// Call init after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);