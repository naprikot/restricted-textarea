document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('message');
  const currentCountSpan = document.getElementById('current-count');
  const counterContainer = document.getElementById('counter');
  
  // Dynamically grab the limit from the HTML attribute
  const maxLimit = parseInt(textarea.getAttribute('maxlength'), 10);

  textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    
    // Update the visual counter
    currentCountSpan.textContent = currentLength;

    // Toggle error state classes when limit is reached
    if (currentLength >= maxLimit) {
      textarea.classList.add('is-at-limit');
      counterContainer.classList.add('is-at-limit');
    } else {
      textarea.classList.remove('is-at-limit');
      counterContainer.classList.remove('is-at-limit');
    }
  });
});
