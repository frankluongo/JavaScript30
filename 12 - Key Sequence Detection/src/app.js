function Konami() {
  const secretCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter',
  ];
  const state = { input: [] };

  function compareValues() {
    const codeString = secretCode.join('');
    const inputString = state.input.join('');
    if (codeString === inputString) alert('YOU DID IT!');
    state.input = [];
  }

  function onKeyup(e) {
    state.input.push(e.key);
    if (state.input.length >= secretCode.length) compareValues();
  }

  window.addEventListener('keyup', onKeyup);
}

Konami();
