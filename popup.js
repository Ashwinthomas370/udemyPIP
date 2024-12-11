document.getElementById("pipButton").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: activatePiP,
  });
});

function activatePiP() {
  const video = document.querySelector("video");
  if (video) {
    video.requestPictureInPicture();
  } else {
    alert("No video found on this page!");
  }
}
