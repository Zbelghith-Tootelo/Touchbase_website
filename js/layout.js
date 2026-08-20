/* ==========================================================================
   Touchbase — En-tête et pied de page partagés
   --------------------------------------------------------------------------
   Une seule source pour la coque du site. Chaque page se contente de :
     <body data-page="brokers">
       <div data-layout="header"></div>
       <main id="main"> … </main>
       <div data-layout="footer"></div>
   L'état actif du menu est déduit de data-page, donc rien à maintenir à la main.
   Ce fichier doit être chargé AVANT i18n.js : il injecte le balisage, i18n le
   traduit ensuite.
   ========================================================================== */

/** Entrées du menu principal. `page` correspond à data-page sur <body>.
    Guides pratiques et Infos importantes restent en ligne mais uniquement
    via le pied de page depuis la refonte du header — ce n'est pas un oubli. */
const NAV = [
  { page: 'profile', href: '#', key: 'nav.profile', submenu: 'submenu-profile' },
  { page: 'innovations', href: 'innovations.html', key: 'nav.innovations' },
  { page: 'about', href: 'about.html', key: 'nav.about' },
];

/** Sous-menu « Votre profil » — les quatre publics de la plateforme. */
const SUBNAV = [
  { page: 'brokers', href: 'for-brokers.html', key: 'submenu.brokers' },
  { page: 'brokerages', href: 'for-brokerages.html', key: 'submenu.agencies' },
  { page: 'associations', href: 'for-associations.html', key: 'submenu.boards' },
  { page: 'customers', href: 'for-customers.html', key: 'submenu.buyers' },
];

/* Guides pratiques et Infos importantes sont retirés du pied de page avec la
   refonte : ces pages restent en ligne mais deviennent accessibles par URL
   directe seulement (décision explicite, pas un oubli). */
const FOOTER_LINKS = [
  { page: 'innovations', href: 'innovations.html', key: 'nav.innovations' },
  { page: 'help', href: 'https://helpcenter.touchbaserealestate.com/', key: 'footer.helpCenter', external: true },
  { page: 'about', href: 'about.html', key: 'nav.about' },
  { page: 'contact', href: 'contact.html', key: 'footer.contact' },
  { page: 'privacy', href: 'privacy-policy.html', key: 'footer.privacy' },
  { page: 'terms', href: 'terms-of-use.html', key: 'footer.terms' },
];

const currentPage = () => document.body.dataset.page || '';

/** aria-current="page" sur l'entrée correspondant à la page affichée. */
const current = (page) => (page && page === currentPage() ? ' aria-current="page"' : '');

function headerMarkup() {
  const links = NAV.map((item) => {
    if (item.submenu) {
      return `
              <a
                class="main-nav__link"
                href="${item.href}"
                aria-expanded="false"
                aria-controls="${item.submenu}"
                data-submenu-trigger
              >
                <span data-i18n="${item.key}"></span>
                <img class="main-nav__chevron" src="assets/icons/chevron.svg" alt="" aria-hidden="true" />
              </a>`;
    }
    return `
              <a class="main-nav__link" href="${item.href}"${current(item.page)} data-i18n="${item.key}"></a>`;
  }).join('');

  const sub = SUBNAV.map(
    (item) => `
            <a class="site-submenu__link" href="${item.href}"${current(item.page)} data-i18n="${item.key}"></a>`
  ).join('');

  return `
    <header class="site-header">
      <div class="site-header__inner">
        <div class="site-header__brand">
          <a class="site-header__logo" href="index.html" data-i18n-aria-label="nav.logoAlt" aria-label="Touchbase">
            <img src="assets/logo-touchbase.svg" data-i18n-alt="nav.logoAlt" alt="Touchbase" />
          </a>

          <span class="site-header__divider" aria-hidden="true"></span>

          <div class="site-header__slogan">
            <img class="site-header__flag" src="assets/icons/flag-canada.svg" alt="" aria-hidden="true" />
            <span class="site-header__slogan-text">
              <span data-i18n="nav.sloganLine1"></span>
              <span data-i18n="nav.sloganLine2"></span>
            </span>
          </div>
        </div>

        <div class="site-header__right">
          <nav class="main-nav" id="main-nav" aria-label="Main">${links}
          </nav>

          <button class="lang-toggle" type="button" data-lang-toggle aria-label="Switch to French">FR</button>

          <a class="btn btn--rouge" href="#login" data-i18n="nav.login"></a>

          <button
            class="nav-toggle"
            type="button"
            aria-controls="main-nav"
            aria-expanded="false"
            data-i18n-aria-label="nav.openMenu"
            aria-label="Open the menu"
          >
            <span class="nav-toggle__bar"></span>
          </button>
        </div>
      </div>

      <div class="site-submenu" id="submenu-profile" data-submenu hidden>
        <div class="site-submenu__inner">${sub}
        </div>
      </div>
    </header>`;
}

function footerMarkup() {
  const links = FOOTER_LINKS.map((item) => {
    const attrs = item.external ? ' target="_blank" rel="noopener"' : current(item.page);
    return `
          <a href="${item.href}"${attrs} data-i18n="${item.key}"></a>`;
  }).join('');

  return `
    <footer class="site-footer">
      <div class="site-footer__brand">
        <a href="index.html" data-i18n-aria-label="nav.logoAlt" aria-label="Touchbase">
          <img src="assets/logo-touchbase-footer.svg" alt="" aria-hidden="true" />
        </a>
        <p class="site-footer__copyright" data-i18n="footer.copyright"></p>
      </div>

      <nav class="site-footer__links" aria-label="Footer">${links}
      </nav>
    </footer>`;
}

function initLayout() {
  const headerSlot = document.querySelector('[data-layout="header"]');
  const footerSlot = document.querySelector('[data-layout="footer"]');
  if (headerSlot) headerSlot.outerHTML = headerMarkup();
  if (footerSlot) footerSlot.outerHTML = footerMarkup();

  // Le sous-menu reste ouvert si l'une de ses pages est affichée.
  const onSubPage = SUBNAV.some((item) => item.page === currentPage());
  if (onSubPage) {
    const trigger = document.querySelector('[data-submenu-trigger]');
    if (trigger) trigger.setAttribute('aria-current', 'page');
  }
}

document.addEventListener('DOMContentLoaded', initLayout);
