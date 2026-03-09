'use strict';

for (const li of document.querySelectorAll('li')) {
  const textNode = Array.from(li.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  if (!textNode) {
    continue;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();

  li.replaceChild(span, textNode);
}
