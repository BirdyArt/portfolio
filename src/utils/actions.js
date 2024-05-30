export function typewriter(node, { speed, delay }) {
  const valid =
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE;

  if (!valid) {
    throw new Error(
      `This transition only works on elements with a single text node child`
    );
  }

  const text = node.textContent;
  const duration = text.length * speed;

  return {
    delay,
    duration,
    tick: (t) => {
      const i = ~~(text.length * t);
      node.textContent = text.slice(0, i);
    },
  };
}

export function clickOutside(node, { enabled: initialEnabled, cb }) {
  const handleOutsideClick = ({ target }) => {
    if (!node.contains(target)) {
      cb();
    }
  };

  function update({ enabled }) {
    if (enabled) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }
  }

  update({ enabled: initialEnabled });

  return {
    update,
    destroy() {
      window.removeEventListener("click", handleOutsideClick);
    },
  };
}
