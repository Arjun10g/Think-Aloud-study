function clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
    const root = document.querySelector( "html" );
    const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );
  
    const minWidth = minWidthPx / pixelsPerRem;
    const maxWidth = maxWidthPx / pixelsPerRem;
  
    const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
    const yAxisIntersection = -minWidth * slope + minFontSize
  
    return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
  }

function randomLetters(element, speed) {
    let tempeL = document.querySelector(element);
    let interval = null;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let iteration = 0;

    interval = setInterval(() => {
        tempeL.innerText = tempeL.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return tempeL.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= tempeL.dataset.value.length) {
            clearInterval(interval); // stop the loop when value is reached 
            tempeL.classList.add('glow');
        }

        iteration += 1 / 3; // increment the loop by 1/3 each time 

    }, speed); // interval of 30 milliseconds 

    // end of function randomLetters() 
}

let intro = document.querySelector(".intro");
let word = document.querySelectorAll(".word");


function rand(){
    return Math.floor(Math.random()*201 + 50)
    }
    
    function color(){
     return "rgb(" + rand() + "," + rand() + "," + rand() + ")"
    }
    
    let cont = document.querySelectorAll('.cont')
    let text = document.querySelector('.cont h1')
    
    
    
    function colorpicker(x){
      
      let cont = x
      
      let color1 = color()
      let color2 = color()
      let color3 = color()
      
      cont.style.borderImage = "linear-gradient(var(--angle)," + color1 + "," + color2 + "," + color3 + ") 1"
      
    }
    
    // colorpicker(cont)
    
    console.log(cont.length)
    
    for(let i = 0; i<cont.length;i++){
      colorpicker(cont[i])
    }

let tl = gsap.timeline();

tl.from(".word:first-child", {opacity: 0, duration: 1, ease: "power2.out", onComplete: randomLetters(".word:first-child",25)})
tl.from(".word:nth-child(2)", {opacity: 0, duration: 1, ease: "power2.out", onComplete: randomLetters(".word:nth-child(2)",50)}, '<')
tl.from(".word:nth-child(3)", {opacity: 0, duration: 1, ease: "power2.out", onComplete: randomLetters(".word:last-child",50)},"<")
tl.to('.intro', {background: 'floralwhite', duration: 0.4, ease: "power2.out"},"=+0.1")
tl.to('.word', {color: 'black', stagger:1, duration:3, ease: "power2.out"})
tl.to('.intro', {opacity: 0, duration: 0.4, ease: "power2.out"})
tl.set('.intro', {display: 'none'})
tl.set('.grid', {display: 'flex'})
tl.from('.cont', {opacity: 0, duration: 2, ease: "power2.out"})
let contLength = cont.length;
let content = document.querySelector('.content')
let c1 = document.querySelectorAll('.c1')
let cross = document.querySelector('.cross')
c1 = Array.from(c1)

Array.from(cont).forEach((element,index) => {
    let otherConts = Array.from(cont).filter((el) => el !== element);
    element.addEventListener('click', () => {
        otherConts.forEach((el) => {
            let tl2 = gsap.timeline();

            tl2.to(el, {opacity: 0, duration: 1, ease: "power2.out"})
            .set(el, {display: 'none'})
            .to(element, {opacity:0 , duration: 1, ease: "power2.out"})
            .to(element.children, {opacity:0 , duration: 1, ease: "power2.out"}, '<')
        });
        let tl3 = gsap.timeline();
        tl3.set(element, {display: 'none'})
        .set('.grid', {display: 'none'})
        .set(content, {display: 'block'})
        .to(content, {opacity: 1, duration: 1, ease: "power2.out"})
        .set(c1[index], {display: 'block'})
        .to(c1[index], {opacity: 1, duration: 1, ease: "power2.out"}, '<')

        cross.addEventListener('click', () => {

            c1.forEach((el) => {
                let tl5 = gsap.timeline();
    
                tl5.to(el, {opacity: 0, duration: 1, ease: "power2.out"})
                .set(el, {display: 'none'})
            });
            let tl6 = gsap.timeline();
            tl6.set(content, {display: 'none'})
            .set('.grid', {display: 'flex'})
            .set(element, {display: 'flex'})
            .to(element, {opacity: 1, duration: 1, ease: "power2.out"})
            .to(element.children, {opacity: 1, duration: 1, ease: "power2.out"}, '<')

            otherConts.forEach((el) => {
                let tl7 = gsap.timeline();
    
                tl7.set(el, {display: 'flex'})
                .to(el, {opacity: 1, duration: 1, ease: "power2.out"})
                .to(el.children, {opacity: 1, duration: 1, ease: "power2.out"}, '<')
            });
            

        }
        );

    });
});


let code = document.querySelectorAll('.code')

code.forEach((block) => {
    block.textContent = block.textContent.replace(/(?<=\n)\s+/g, '').replace(/\\br/g, '\n').replace(/%>% \n/g, '%>%\n\t').replace(/\+\n/g, '+\n\t').replace(/^\s+/, '').replace(/\\t/g, '\t');
});
