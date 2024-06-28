function fillLeftToRight() {
  const rows = document.querySelectorAll('table tbody tr');

  rows.forEach(row => {
    const inputs = Array.from(row.querySelectorAll('input[type="radio"]:nth-child(-n+3)'));
    if (inputs.length > 0) {
      const filteredInputs = inputs.slice(0, Math.min(inputs.length, 3));
      const selectedIndex = Math.floor(Math.random() * filteredInputs.length);
      filteredInputs[selectedIndex].click();
    }
  });
}

function fillRightToLeft() {
  const rows = document.querySelectorAll('table tbody tr');

  rows.forEach(row => {
    const inputs = Array.from(row.querySelectorAll('input[type="radio"]'));
    if (inputs.length > 0) {
      const lastThreeInputs = inputs.slice(-3);
      const selectedIndex = Math.floor(Math.random() * lastThreeInputs.length);
      lastThreeInputs[selectedIndex].click();
    }
  });
}

function fillRandom() {
  const rows = document.querySelectorAll('table tbody tr');

  rows.forEach(row => {
    const inputs = Array.from(row.querySelectorAll('input[type="radio"]'));
    if (inputs.length > 0) {
      const selectedIndex = Math.floor(Math.random() * inputs.length);
      inputs[selectedIndex].click();
    }
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received:", message);
  if (message.action === "fillLeftToRight") {
    fillLeftToRight();
  } else if (message.action === "fillRightToLeft") {
    fillRightToLeft();
  } else if (message.action === "fillRandom") {
    fillRandom();
  }
});