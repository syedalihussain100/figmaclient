function my_toogle(){
  var toogle = document.querySelector(".toogle");
  toogle.classList.toggle('active');
  var navigation = document.querySelector(".navigation");
  navigation.classList.toggle('active');
}

// text typing 



const textToType = "Art can never exist without naked beauty displayed";
const typedTextElement = document.querySelector(".typed-text");

function typeText() {
    let index = 0;

    function typeCharacter() {
        if (index < textToType.length) {
            typedTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeCharacter, 100); // Adjust typing speed (in milliseconds)
        } else {
            setTimeout(eraseText, 1000); // Pause before erasing text
        }
    }

    function eraseText() {
        const currentText = typedTextElement.textContent;
        if (currentText.length > 0) {
            typedTextElement.textContent = currentText.slice(0, -1);
            setTimeout(eraseText, 50); // Adjust erasing speed (in milliseconds)
        } else {
            index = 0;
            setTimeout(typeCharacter, 1000); // Pause before typing again
        }
    }

    setTimeout(typeCharacter, 1000); // Start typing after a delay
}

window.addEventListener("load", typeText);

// bottom

window.addEventListener('load', function () {
    const animatedElement = document.querySelector('.animated-element');
    animatedElement.style.animation = 'none';
    // Triggering the animation by changing the animation name
    setTimeout(() => {
        animatedElement.style.animation = 'slideFromBottom 2s ease-in-out forwards';
    }, 100);
});

// top
window.addEventListener('load', function () {
    const animatedElement = document.querySelector('.animated-element');
    animatedElement.style.animation = 'none';
    // Triggering the animation by changing the animation name
    setTimeout(() => {
        animatedElement.style.animation = 'slideFromTop 2s ease-in-out forwards';
    }, 100);
});


