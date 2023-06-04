/* Gekozen Topping */
let showButtons = document.querySelectorAll('.showButton')
let showImages = document.querySelectorAll('.randomImages img')

showImages.forEach(image => {
  image.style.display = 'none'
});

showButtons.forEach(button => {
  button.addEventListener('click', function() {
    let imageId = button.getAttribute('data-image')
    let imageElement = document.getElementById(`${imageId}Image`)

    if (imageElement) {
      if (imageElement.style.display === 'none') {
        imageElement.style.display = 'block'
      } else {
        imageElement.style.display = 'none'
      }
    }
  });
});


/* Random topping */
let randomButton = document.getElementById('randomButton')
let randomImagesSection = document.querySelector('.randomImages')
let randomImages = randomImagesSection.querySelectorAll('img')

randomButton.addEventListener('click', function() {
  let selectedImages = getRandomItems(randomImages, 3)

  randomImages.forEach(image => {
    if (selectedImages.includes(image)) {
      image.style.display = 'block'
    } else {
      image.style.display = 'none'
    }
  });
});

function getRandomItems(array, count) {
  let shuffledArray = Array.from(array).sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, count)
}


/* Cook button */
let cookButton = document.getElementById('cook-button')

/* Progress bar */
let progressBarContainer = document.getElementById('progress-bar-container')
let progressBar = document.getElementById('progress-bar')
let progressBarText = document.getElementById('progress-bar-text')

/* Sections */
let sections = document.querySelectorAll('section')

cookButton.addEventListener('click', function() {
  progressBarContainer.style.visibility = 'visible'; // Show the progress bar

  sections.forEach(section => {
    if (!section.classList.contains('randomImages')) {
      section.style.display = 'none'; // Hide all sections except the loading section
    }
  });

  // Hide images in the topping section
  randomImages.forEach(image => {
    image.style.display = 'none';
  });

  let progress = 0;
  let duration = 10000; // Duration in milliseconds
  let intervalTime = duration / 100; // Interval time for smooth progression

  let interval = setInterval(updateProgressBar, intervalTime);

  function updateProgressBar() {
    if (progress >= 100) {
      clearInterval(interval);
      progressBarContainer.style.visibility = 'hidden'; // Hide the progress bar

      let klaarSection = document.querySelector('.randomImages');
      klaarSection.style.display = 'block'; // Show the "klaar" section

      // Change background image back
      document.body.style.backgroundImage = "url('images/klaar.png')";

      return;
    }

    progress += 1;
    progressBar.style.width = progress + '%';

    // Progress bar text
    progressBarText.textContent = 'Bijna klaar!';
    progressBarText.style.display = 'block';
  }

  // Change background image to loading image
  document.body.style.backgroundImage = "url('images/laden.png')";

});



/*bronnen
Miro link met alle javascript code die ik heb gegenereerd met Chatgpt: https://miro.com/app/board/uXjVMCT2apw=/?share_link_id=611492467414
*/