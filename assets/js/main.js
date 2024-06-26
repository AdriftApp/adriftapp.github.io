const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// …

// Get the modal and trigger elements
const modal = document.getElementById('version-modal');
const trigger = document.querySelector('.pixel-button');

// Add an event listener to the trigger link
trigger.addEventListener('click', function() {
  // Show the modal
  modal.style.display = 'block';
});

// Add an event listener to the modal to close it when clicked outside
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

registerServiceWorker();
