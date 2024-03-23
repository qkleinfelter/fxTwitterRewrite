setInterval(() => {
  const linkElement = findElementByText("Copy link");
  if (linkElement && !linkElement.classList.contains("event-listener-added")) {
    linkElement.addEventListener("click", () => {
      setTimeout(() => {
        readFromClipboard(writeNewLinkToClipboard);
      }, 100);
    });
    linkElement.classList += " event-listener-added";
  }
}, 100);

function findElementByText(text) {
  const elements = document.querySelectorAll("*");
  for (let element of elements) {
    if (element.textContent === text) {
      return element;
    }
  }
  return null;
}

function readFromClipboard(callback) {
  navigator.clipboard
    .readText()
    .then((clipText) => {
      callback(clipText);
    })
    .catch((error) => {
      console.error("Unable to read from clipboard");
    });
}

function writeToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log("Text successfully copied to clipboard: ", text);
    },
    () => {
      console.error("Unable to write to clipboard");
    }
  );
}

function writeNewLinkToClipboard(text) {
  let newText = text
    .replace("twitter.com", "fxtwitter.com")
    .replace("x.com", "fixupx.com");
  // Remove Twitter tracking parameters
  let urlWithQueryParamsRemoved = removeQueryParams(newText, ["s", "t"]);
  writeToClipboard(urlWithQueryParamsRemoved);
}

function removeQueryParams(url, paramsToRemove) {
  const parsedUrl = new URL(url);
  paramsToRemove.forEach((param) => {
    parsedUrl.searchParams.delete(param);
  });
  return parsedUrl.toString();
}
