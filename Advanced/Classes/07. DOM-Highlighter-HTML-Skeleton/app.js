const CLASSTOADD = "highlight";

function solve(selector) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) {
    console.error(`No elements matching the selector '${selector}' found.`);
    return;
  }

  let deepestElement = elements[0];
  let maxDepth = 0;

  function findDeepest(element, depth) {
    if (depth > maxDepth) {
      maxDepth = depth;
      deepestElement = element;
    }
    for (const child of element.children) {
      findDeepest(child, depth + 1);
    }
  }

  for (const element of elements) {
    findDeepest(element, 0);
  }

  while (deepestElement && deepestElement !== document.body) {
    deepestElement.classList.add("highlight");
    deepestElement = deepestElement.parentElement;
  }
}

solve("#content");
