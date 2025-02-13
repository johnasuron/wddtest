document.addEventListener('DOMContentLoaded', function () {
  fetch('links.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched data:', data); // Debug: Log fetched data
      const learningActivitiesContainer = document.getElementById('learning-activities');
      if (!learningActivitiesContainer) {
        console.error('Learning activities container not found');
        return;
      }

      data.weeks.forEach(week => {
        const weekParagraph = document.createElement('p');
        weekParagraph.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
          const linkElement = document.createElement('a');
          linkElement.href = link.url;
          linkElement.textContent = link.title;
          linkElement.target = "_blank"; // Open links in a new tab

          weekParagraph.appendChild(linkElement);

          // Add a separator if it's not the last link
          if (index < week.links.length - 1) {
            weekParagraph.appendChild(document.createTextNode(' | '));
          }
        });

        learningActivitiesContainer.appendChild(weekParagraph);
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error); // Debug: Log any errors
    });
});