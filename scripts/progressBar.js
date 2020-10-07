const numbJS = document.querySelector(".language__javascript .numb");
const numbHtmlCss = document.querySelector(".language__html-css .numb");
const numbReactRedux = document.querySelector(".language__react-redux .numb");

let counter = 0;
setInterval(() => {
  if(counter == 80){
    clearInterval();
  } else if (counter <= 80) {
    counter+= 1;
    numbHtmlCss.textContent = counter + "%";
    if (counter <= 70) {
      numbJS.textContent = counter + "%";
    };
    if (counter <= 50) {
      numbReactRedux.textContent = counter + "%";
    }
  }
}, 80);




