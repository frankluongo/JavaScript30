const ACTIVE = 'trigger-enter-active';
const BG = '.dropdownBackground';
const DROPDOWN = '.dropdown';
const ENTER = 'trigger-enter';
const NAV = '.top';
const OPEN = 'open';
const TRIGGER = '.cool > li';

function Triggers() {
  const triggers = document.querySelectorAll(TRIGGER);
  const background = document.querySelector(BG);
  const nav = document.querySelector(NAV);

  function onEnter() {
    this.classList.add(ENTER);
    setTimeout(
      () => this.classList.contains(ENTER) && this.classList.add(ACTIVE),
      150
    );
    background.classList.add(OPEN);

    const dropdown = this.querySelector(DROPDOWN);
    const dropSize = dropdown.getBoundingClientRect();
    const navSize = nav.getBoundingClientRect();

    const coords = {
      height: `${dropSize.height}px`,
      width: `${dropSize.width}px`,
      top: `${dropSize.top - navSize.top}px`,
      left: `${dropSize.left - navSize.left}px`,
    };

    background.style.width = coords.width;
    background.style.height = coords.height;
    background.style.transform = `translate(${coords.left}, ${coords.top})`;
  }

  function onLeave() {
    this.classList.remove(ENTER, ACTIVE);
    background.classList.remove('open');
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('mouseenter', onEnter);
    trigger.addEventListener('mouseleave', onLeave);
  });
}

Triggers();
