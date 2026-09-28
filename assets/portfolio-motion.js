(() => {
  'use strict';
  if (!Element.prototype.getAnimations || !('IntersectionObserver' in window)) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = navigator.connection?.saveData === true;
  const films = [];

  document.querySelectorAll('[data-film]').forEach(element => {
    const button = element.querySelector('figcaption button');
    const label = button.querySelector('span');
    const steps = [...element.querySelectorAll('[data-scene-select]')];
    const sceneDuration = Number(element.dataset.duration) / steps.length;
    let animations = [];
    let visible = false;
    let wanted = false;
    let started = false;
    let generation = 0;
    let seekGeneration = 0;
    let clock = 0;
    let selected = -1;
    const images = [...element.querySelectorAll('img, image')];
    let assetsReady = images.length === 0;
    let pendingAssets = null;

    function select(index) {
      if (selected === index) return;
      selected = index;
      steps.forEach((step, i) => step.setAttribute('aria-pressed', String(i === index)));
    }

    function stopClock() {
      cancelAnimationFrame(clock);
      clock = 0;
    }

    function updateClock() {
      if (!steps.length) return;
      const time = Number(animations[0]?.currentTime || 0);
      select(Math.min(steps.length - 1, Math.floor(time / sceneDuration)));
      if (element.dataset.state === 'running') clock = requestAnimationFrame(updateClock);
    }

    function state(value, text) {
      element.dataset.state = value;
      label.textContent = button.dataset[text];
    }

    function reset() {
      generation++;
      seekGeneration++;
      stopClock();
      animations.forEach(animation => animation.cancel());
      animations = [];
      element.classList.remove('is-started');
      delete element.dataset.selectedScene;
      wanted = false;
      started = false;
      select(0);
      state(preference.matches ? 'static' : 'ready', 'play');
      button.hidden = preference.matches;
      if (!preference.matches) {
        // Prepare the first frame before autoplay so finished objects cannot flash
        void element.offsetWidth;
        element.classList.add('is-started');
        animations = element.getAnimations({ subtree: true });
        animations.forEach(animation => { animation.pause(); animation.currentTime = 0; });
      }
    }

    function pause(manual = false) {
      if (manual) wanted = false;
      if (element.dataset.state !== 'running') return;
      animations.forEach(animation => animation.pause());
      stopClock();
      state('paused', 'resume');
    }

    function loadAssets() {
      if (assetsReady) return Promise.resolve();
      pendingAssets ||= Promise.all(images.map(source => {
        const img = source instanceof HTMLImageElement ? source : new Image();
        if (source instanceof HTMLImageElement) img.loading = 'eager';
        else img.src = source.href.baseVal;
        return img.decode().catch(() => {});
      })).then(() => {
        assetsReady = true;
        pendingAssets = null;
      });
      return pendingAssets;
    }

    function play() {
      if (preference.matches) return;
      wanted = true;
      if (!assetsReady) {
        loadAssets().then(() => {
          if (wanted && visible && !document.hidden) play();
        });
        return;
      }
      if (element.dataset.state === 'complete') {
        reset();
      }
      if (!started) {
        started = true;
        const current = ++generation;
        Promise.all(animations.map(animation => animation.finished)).then(() => {
          if (generation !== current) return;
          wanted = false;
          stopClock();
          select(steps.length - 1);
          state('complete', 'replay');
        }).catch(() => {});
      }
      wanted = true;
      // Use one start time for actors, scene visibility and chapter indicators
      const time = Number(animations[0]?.currentTime || 0);
      const startTime = document.timeline.currentTime - time;
      animations.forEach(animation => { animation.play(); animation.startTime = startTime; });
      state('running', 'pause');
      stopClock();
      updateClock();
    }

    function visibility() {
      if (!visible || document.hidden) pause();
      else if (!preference.matches && ((!started && !saveData) || wanted)) play();
    }

    steps.forEach(step => {
      step.hidden = false;
      step.addEventListener('click', async () => {
        const request = ++seekGeneration;
        pause(true);
        await loadAssets();
        if (request !== seekGeneration) return;
        const index = Number(step.dataset.sceneSelect);
        if (preference.matches) {
          element.dataset.selectedScene = String(index);
        } else {
          play();
          pause(true);
          animations.forEach(animation => { animation.currentTime = Number(step.dataset.seek); });
        }
        select(index);
      });
    });
    button.addEventListener('click', () => {
      seekGeneration++;
      if (element.dataset.state === 'running') pause(true);
      else play();
    });
    films.push({ element, reset, visibility, setVisible(value) { visible = value; visibility(); } });
    reset();
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => films.find(film => film.element === entry.target)?.setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35));
  }, { threshold: [0, 0.35] });
  films.forEach(film => observer.observe(film.element));
  document.addEventListener('visibilitychange', () => films.forEach(film => film.visibility()));
  preference.addEventListener('change', () => films.forEach(film => { film.reset(); film.visibility(); }));
})();
