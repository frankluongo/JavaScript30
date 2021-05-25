function FixNav() {
  const FIXED = 'fixed';
  const nav = document.querySelector(`#main`);
  const offset = nav.offsetTop - 1;

  function onScroll() {
    console.log(nav.classList);
    const action = window.scrollY >= offset ? 'add' : 'remove';
    document.body.classList[action](FIXED);
  }

  window.addEventListener('scroll', onScroll);
}

FixNav();
