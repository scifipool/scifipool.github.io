const backlight = (element, spread, size, colors, duration) => {
  element.style.position = 'relative';

  element.innerHTML = `
    <span class="text">${element.innerHTML}</span>
    <span class="backlight">
      <span class="inner"></span>
    </span>
  `;

  const textElement = element.querySelector('.text');
  const backlightElement = element.querySelector('.backlight');
  const innerElement = element.querySelector('.inner');

  backlightElement.style.position = 'absolute';
  backlightElement.style.top = 0;
  backlightElement.style.left = 0;
  backlightElement.style.right = 0;
  backlightElement.style.bottom = 0;
  backlightElement.style.zIndex = -1;
  backlightElement.style.height = '100%';
  backlightElement.style.width = '100%';
  backlightElement.style.margin = '0 auto';
  backlightElement.style.transform = `scale(${size})`;
  backlightElement.style.WebkitFilter = `blur(${spread})`;
  backlightElement.style.MozFilter = `blur(${spread})`;
  backlightElement.style.MsFilter = `blur(${spread})`;
  backlightElement.style.filter = `blur(${spread})`;
  backlightElement.style.overflow = 'hidden';

  

  innerElement.style.position = 'absolute';
  innerElement.style.top = 0;
  innerElement.style.left = 0;
  innerElement.style.right = 0;
  innerElement.style.bottom = 0;
  innerElement.style.margin = 'auto';
  innerElement.style.height = '100%';
  innerElement.style.width = '100%';
  innerElement.style.background = `linear-gradient(270deg, ${colors.join(',')})`;
  innerElement.style.backgroundSize = '600% 600%';

  // textElement.style.setProperty('text-shadow', '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #4b0799d0, 0 0 40px #2907bed0, 0 0 50px #0348c9b6, 0 0 60px #056dc2b0, 0 0 70px #00b0e6ad');
  
  const animateGlowKeyframes = [];
  for (let i = 0; i < colors.length; i++) {
    animateGlowKeyframes.push({ backgroundPosition: `${(i / colors.length) * 100}% 50%` });
  }
  animateGlowKeyframes.push({ backgroundPosition: '0% 50%' });

  const animateGlowAnimation = innerElement.animate(animateGlowKeyframes, {
    duration,
    easing: 'ease',
    iterations: Infinity,
  });
};