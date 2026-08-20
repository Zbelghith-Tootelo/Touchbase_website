/* ==========================================================================
   Touchbase — Comportements de l'interface
   ========================================================================== */

/** Menu de navigation mobile : panneau coulissant depuis la gauche. */
function initNavToggle() {
  const toggle = document.querySelector('[data-nav-open]');
  const closeBtn = document.querySelector('[data-nav-close]');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.querySelector('[data-nav-overlay]');
  if (!toggle || !drawer || !overlay) return;

  let lastFocused = null;

  const focusableIn = (root) =>
    Array.from(root.querySelectorAll('a[href], button:not([disabled])')).filter(
      (el) => el.offsetParent !== null
    );

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    if (closeBtn) closeBtn.setAttribute('aria-expanded', String(open));
    drawer.dataset.open = String(open);
    drawer.setAttribute('aria-hidden', String(!open));
    overlay.dataset.open = String(open);
    document.body.style.overflow = open ? 'hidden' : '';

    if (open) {
      lastFocused = document.activeElement;
      const first = focusableIn(drawer)[0];
      if (first) first.focus();
    } else if (lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    }
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  if (closeBtn) closeBtn.addEventListener('click', () => setOpen(false));

  // Un clic sur le fond assombri referme, tout comme un clic sur un lien.
  overlay.addEventListener('click', () => setOpen(false));
  drawer.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (drawer.dataset.open !== 'true') return;

    if (event.key === 'Escape') {
      setOpen(false);
      toggle.focus();
      return;
    }

    // Le focus reste piégé dans le panneau tant qu'il est ouvert.
    if (event.key === 'Tab') {
      const items = focusableIn(drawer);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Repasser en navigation horizontale quand la fenêtre s'élargit.
  window.matchMedia('(min-width: 1025px)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

/**
 * Sous-menu de navigation : s'ouvre au survol, mais aussi au clavier et au
 * toucher — un menu qui ne répond qu'à la souris est inaccessible.
 */
function initSubmenu() {
  const header = document.querySelector('.site-header');
  const trigger = document.querySelector('[data-submenu-trigger]');
  if (!header || !trigger) return;

  const menu = document.getElementById(trigger.getAttribute('aria-controls'));
  if (!menu) return;

  const desktop = window.matchMedia('(min-width: 1025px)');
  let closeTimer;

  const setOpen = (open) => {
    clearTimeout(closeTimer);
    trigger.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  };

  // Petit délai à la fermeture : laisse le temps de descendre vers le sous-menu.
  const closeSoon = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => setOpen(false), 160);
  };

  // --- Souris ---
  trigger.addEventListener('mouseenter', () => {
    if (desktop.matches) setOpen(true);
  });
  menu.addEventListener('mouseenter', () => clearTimeout(closeTimer));
  header.addEventListener('mouseleave', () => {
    if (desktop.matches) closeSoon();
  });

  // Survoler un autre lien referme le sous-menu.
  document.querySelectorAll('.main-nav__link:not([data-submenu-trigger])').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      if (desktop.matches) closeSoon();
    });
  });

  // --- Toucher et clic ---
  // Le premier appui ouvre le menu au lieu de suivre le lien.
  trigger.addEventListener('click', (event) => {
    if (trigger.getAttribute('aria-expanded') !== 'true') {
      event.preventDefault();
      setOpen(true);
    }
  });

  // --- Clavier ---
  header.addEventListener('focusin', () => {
    if (!header.contains(document.activeElement)) return;
    const inside = trigger.contains(document.activeElement) || menu.contains(document.activeElement);
    if (inside) setOpen(true);
    else if (desktop.matches) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || trigger.getAttribute('aria-expanded') !== 'true') return;
    setOpen(false);
    trigger.focus();
  });

  // Un clic ailleurs referme.
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });

  // Au passage mobile → bureau, on repart fermé.
  desktop.addEventListener('change', () => setOpen(false));
}

document.addEventListener('DOMContentLoaded', initNavToggle);
document.addEventListener('DOMContentLoaded', initSubmenu);
