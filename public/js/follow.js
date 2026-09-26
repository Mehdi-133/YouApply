import {
  getFollowedOffers,
  saveFollowedOffers,
  unfollowOffer,
} from "./storage.js";

const followButtons = document.querySelectorAll(".follow-button");

function updateButtonAppearance(button, isFollowed) {
  const bookmarkIcon = button.querySelector("svg");

  if (isFollowed) {
    button.classList.remove("text-slate-300", "hover:text-slate-500");
    button.classList.add("text-blue-700", "hover:text-blue-900");
  } else {
    button.classList.remove("text-blue-700", "hover:text-blue-900");
    button.classList.add("text-slate-300", "hover:text-slate-500");
  }

  bookmarkIcon.setAttribute("fill", isFollowed ? "currentColor" : "none");
  button.setAttribute("aria-pressed", String(isFollowed));
  button.setAttribute(
    "aria-label",
    isFollowed ? "Ne plus suivre cette offre" : "Suivre cette offre",
  );
}

followButtons.forEach((button) => {
  const offerId = Number(button.dataset.offerId);
  const isFollowed = getFollowedOffers().includes(offerId);

  updateButtonAppearance(button, isFollowed);

  button.addEventListener("click", () => {
    const followedOffers = getFollowedOffers();
    const isAlreadyFollowed = followedOffers.includes(offerId);

    if (isAlreadyFollowed) {
      unfollowOffer(offerId);
    } else {
      followedOffers.push(offerId);
      saveFollowedOffers(followedOffers);
    }

    updateButtonAppearance(button, !isAlreadyFollowed);
  });
});
