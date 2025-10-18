const timeEl = document.querySelector('[data-testid="test-user-time"]');
const updateTime = () => {
  timeEl.textContent = Date.now();
};
updateTime();
setInterval(updateTime, 1000);

const fileInput = document.querySelector('[data-testid="test-avatar-upload"]');
const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    avatarImg.src = e.target.result;
  };
  reader.readAsDataURL(file);
});
