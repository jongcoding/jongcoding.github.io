(() => {
  'use strict';
  if (!Element.prototype.getAnimations || !('IntersectionObserver' in window)) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = navigator.connection?.saveData === true;
  const films = [];

  document.querySelectorAll('[data-film]').forEach(element => {
    const button = element.querySelector('button');
    const label = button.querySelector('span');
    let animations = [];
    let visible = false;
    let wanted = false;
    let started = false;
    let generation = 0;
    let assetsReady = !element.querySelector('img');
    let pendingAssets = null;

    function state(value, text) {
      element.dataset.state = value;
      label.textContent = button.dataset[text];
    }

    function reset() {
      generation++;
      animations.forEach(animation => animation.cancel());
      animations = [];
      element.classList.remove('is-started');
      wanted = false;
      started = false;
      state(preference.matches ? 'static' : 'ready', 'play');
      button.hidden = preference.matches;
    }

    function pause(manual = false) {
      if (element.dataset.state !== 'running') return;
      animations.forEach(animation => animation.pause());
      if (manual) wanted = false;
      state('paused', 'resume');
    }

    function play() {
      if (preference.matches) return;
      wanted = true;
      if (!assetsReady) {
        pendingAssets ||= Promise.all([...element.querySelectorAll('img')].map(img => {
          img.loading = 'eager';
          return img.decode().catch(() => {});
        })).then(() => {
          assetsReady = true;
          pendingAssets = null;
          if (wanted && visible && !document.hidden) play();
        });
        return;
      }
      if (element.dataset.state === 'complete') {
        reset();
        // Commit the removed CSS animation before starting a fresh replay
        void element.offsetWidth;
      }
      if (!started) {
        // Native CSS animations share a single nine-second timeline
        element.classList.add('is-started');
        animations = element.getAnimations({ subtree: true });
        started = true;
        const current = ++generation;
        Promise.all(animations.map(animation => animation.finished)).then(() => {
          if (generation !== current) return;
          wanted = false;
          state('complete', 'replay');
        }).catch(() => {});
      }
      wanted = true;
      animations.forEach(animation => animation.play());
      state('running', 'pause');
    }

    function visibility() {
      if (!visible || document.hidden) pause();
      else if (!preference.matches && ((!started && !saveData) || wanted)) play();
    }

    button.addEventListener('click', () => {
      if (element.dataset.state === 'running') pause(true);
      else play();
    });
    films.push({ element, reset, visibility, setVisible(value) { visible = value; visibility(); } });
    reset();
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => films.find(film => film.element === entry.target)?.setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35));
    }, { threshold: [0, 0.35] });
    films.forEach(film => observer.observe(film.element));
  }
  document.addEventListener('visibilitychange', () => films.forEach(film => film.visibility()));
  preference.addEventListener('change', () => films.forEach(film => { film.reset(); film.visibility(); }));
})();
