document.addEventListener('DOMContentLoaded', function() {
    const selectInput = document.querySelector('.select-input');
    const optionsContainer = document.querySelector('.options-container');
  
    selectInput.addEventListener('click', function() {
      optionsContainer.style.display = 'block';
    });
  
    optionsContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('option')) {
        selectInput.value = event.target.textContent;
        optionsContainer.style.display = 'none';
      }
    });
  
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.main__content__custom__select')) {
        optionsContainer.style.display = 'none';
      }
    });
  });
  