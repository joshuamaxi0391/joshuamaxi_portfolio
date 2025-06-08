// js/tabs.js
document.addEventListener('DOMContentLoaded', () => {
  const tabs     = document.querySelectorAll('.project-tabs a');
  const contents = document.querySelectorAll('.project-content .tab-content');

  function activate(targetId, tabLink) {
    // hide all contents & deactivate all tabs
    contents.forEach(c => c.classList.remove('active'));
    tabs.forEach(a => a.parentElement.classList.remove('active'));

    // show the chosen content & mark its tab active
    document.getElementById(targetId).classList.add('active');
    tabLink.parentElement.classList.add('active');
  }

  tabs.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      activate(a.dataset.target, a);
    });
  });

  // ensure “Personal” is active on initial load
  const firstTab = document.querySelector('.project-tabs a[data-target="personal"]');
  if (firstTab) activate('personal', firstTab);
});
