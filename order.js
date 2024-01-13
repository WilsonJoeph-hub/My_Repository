/* document.addEventListener("DOMContentLoaded", function() {
    const formSections = document.querySelectorAll('.form');
    const nextButtons = document.querySelectorAll('.nextBtn');
    const backButtons = document.querySelectorAll('.backBtn');
    let currentIndex = 0;

    // Function to show the current form section
    function showFormSection(index) {
        formSections.forEach((section, i) => {
            if (i === index) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Initialize by showing the first form section
    showFormSection(currentIndex);

    // Add click event listeners for the "Next" buttons
    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Hide the current form section
            formSections[currentIndex].style.display = 'none';

            // Increment the index to move to the next form section
            currentIndex++;

            // Show the next form section
            showFormSection(currentIndex);

            // Hide or show "Back" and "Submit" buttons based on the current index
            if (currentIndex > 0) {
                backButtons[index].style.display = 'inline-block';
            } else {
                backButtons[index].style.display = 'none';
            }

            if (currentIndex === formSections.length - 1) {
                nextButtons[index].style.display = 'none';
            }
        });
    });

    // Add click event listeners for the "Back" buttons
    backButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Hide the current form section
            formSections[currentIndex].style.display = 'none';

            // Decrement the index to move to the previous form section
            currentIndex--;

            // Show the previous form section
            showFormSection(currentIndex);

            // Hide or show "Back" and "Submit" buttons based on the current index
            if (currentIndex === 0) {
                backButtons[index].style.display = 'none';
            } else {
                backButtons[index].style.display = 'inline-block';
            }

            if (currentIndex < formSections.length - 1) {
                nextButtons[index].style.display = 'inline-block';
            }
        });
    });
});
 */

/* function nextStage(next) {
  document.getElementById("stage-" + next).style.display = "block";
  document
    .getElementById("orderform")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });
}

function prevStage(prev) {
  document.getElementById("stage-" + prev).style.display = "block";
} */
/* const from = document.querySelector("form")
    nextBtn = document.querySelector(".nextBtn")
    backBtn = document.querySelector(".backBtn")
    allinput = document.querySelector(".first")


nextBtn.addEventListener("click", ()=> {
    allinput.array.forEach(input => {
        if(input.value !=""){
            from.classList.add('seActive');
        }else{
            from.classList.remove('seActive');
            alert("input is empty")
        }
        
    });
}) */

/* document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.getElementByClass("nextBtn");

    nextBtn.addEventListener("click", function() {
        // Find the currently visible section
        const currentSection = document.querySelector(".form:in vieweport");
        
        // Find the next section
        const nextSection = currentSection.nextElementSibling;

        // Scroll to the next section
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Helper function to check if an element is in the viewport
Element.prototype.inViewport = function() {
    const rect = this.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}; */

//Accessing form value
const formEl = document.forms.orderform;
const btnEl = document.querySelector("form button");

const handleSubmit = (event) => {
  event.preventDefault();

  //gettng the data

  const formData = new FormData(formEl);

  // formatting the data
  const data = Object.fromEntries(formData);

  fetch("https://jrsflavorfusion.neocities.org/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  //Backend
};
formEl.addEventListener("submit", handleSubmit);
