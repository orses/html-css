(() => {
  // Social share link to show more social links
  const shareButton = document.querySelector('#social-share');
  const socialComponent = document.querySelector('.social');

  function handlerSocialComponent(event) {
    socialComponent.classList.toggle('hidden');
    shareButton.classList.toggle('difference');

    if (shareButton.classList.contains('difference')) {
      shareButton.setAttribute('src', './assets/images/icon-share-active.svg');
    } else {
      shareButton.setAttribute('src', './assets/images/icon-share.svg');
    }
  }

  shareButton.addEventListener('click', handlerSocialComponent);
})();
