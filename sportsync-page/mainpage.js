document.addEventListener("DOMContentLoaded", function() {
    const profile = document.querySelector('.profile');
    const menu = document.querySelector('.menu');

    profile.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Close the menu if clicked outside
    document.addEventListener('click', function(event) {
        const isClickInsideProfile = profile.contains(event.target);
        const isClickInsideMenu = menu.contains(event.target);
        
        if (!isClickInsideProfile && !isClickInsideMenu) {
            menu.classList.remove('active');
        }
    });
});
 
// Dummy event data for demonstration
const dummyEventData = [
    { name: "Football Match", status: "active", date: "2024-03-15" },
    { name: "Basketball Tournament", status: "upcoming", date: "2024-03-20" },
    { name: "Soccer Game", status: "active", date: "2024-03-17" }
    // Add more dummy event data as needed
  ];

  // Function to display events based on their status
  function displayEvents() {
    const activeEventsContainer = document.getElementById('activeEvents');
    const upcomingEventsContainer = document.getElementById('upcomingEvents');
    activeEventsContainer.innerHTML = ''; // Clear previous active events
    upcomingEventsContainer.innerHTML = ''; // Clear previous upcoming events

    dummyEventData.forEach(event => {
      const eventListItem = document.createElement('li');
      eventListItem.classList.add('event-list-item');
      eventListItem.innerHTML = `
        <strong>${event.name}</strong> - ${event.date}
      `;

      if (event.status === 'active') {
        activeEventsContainer.appendChild(eventListItem);
      } else if (event.status === 'upcoming') {
        upcomingEventsContainer.appendChild(eventListItem);
      }
    });
  }

  // Initial display of events
  displayEvents();

  function filterEvents() {
    // Get filter values
    const distance = document.getElementById('distance').value;
    const sports = document.getElementById('sports').value;
    const availability = document.getElementById('availability').value;

    // Perform filtering (dummy data for demonstration)
    const filteredEvents = dummyEventData.filter(event => {
      // Dummy conditions - replace with your actual filtering logic
      return event.distance <= distance &&
             event.sports.includes(sports) &&
             event.availability >= availability;
    });

    // Display filtered events
    displayEvents(filteredEvents);
  }

  // Dummy event data for demonstration
  const dummpEventData = [
    { name: "Football Match", distance: 5, sports: ["football"], availability: "2024-03-15" },
    { name: "Basketball Tournament", distance: 10, sports: ["basketball"], availability: "2024-03-20" },
    { name: "Soccer Game", distance: 3, sports: ["soccer"], availability: "2024-03-17" }
    // Add more dummy event data as needed
  ];

  // Function to display filtered events
  function displayEvents(events) {
    const eventResultsContainer = document.getElementById('eventResults');
    eventResultsContainer.innerHTML = ''; // Clear previous results

    events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.classList.add('event-card');
      eventCard.innerHTML = `
        <h3>${event.name}</h3>
        <p>Distance: ${event.distance} miles</p>
        <p>Sports: ${event.sports.join(', ')}</p>
        <p>Availability: ${event.availability}</p>
      `;
      eventResultsContainer.appendChild(eventCard);
    });
  }
 