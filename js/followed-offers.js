import { getFollowedOffers } from "./storage.js";

let selectedContract = "all";

const offerCards = document.querySelectorAll(".offer-card");
const contractTabs = document.querySelectorAll(".contract-tab");
const emptyState = document.querySelector("#empty-followed-offers");

function displayFollowedOffers() {
  const followedIds = getFollowedOffers();
  let visibleOffers = 0;

  offerCards.forEach((card) => {
    const offerId = Number(card.dataset.offerId);
    const isFollowed = followedIds.includes(offerId);
    const matchesContract =
      selectedContract === "all" || card.dataset.contract === selectedContract;
    const shouldShow = isFollowed && matchesContract;

    card.classList.toggle("hidden", !shouldShow);

    if (shouldShow) {
      visibleOffers += 1;
    }
  });

  emptyState.classList.toggle("hidden", visibleOffers > 0);
}

contractTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedContract = tab.dataset.contract;

    contractTabs.forEach((btn) => {
      btn.classList.remove("bg-blue-700", "text-white", "shadow-sm");
      btn.classList.add("bg-slate-100", "text-slate-600", "hover:bg-slate-200");
    });
    tab.classList.remove("bg-slate-100", "text-slate-600", "hover:bg-slate-200");
    tab.classList.add("bg-blue-700", "text-white", "shadow-sm");

    displayFollowedOffers();
  });
});

document.addEventListener("followedOffersChanged", displayFollowedOffers);

displayFollowedOffers();
