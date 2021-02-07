import { ViewFn } from './views.types';

export function makeLink(
  href: string,
  label: string,
  newTab = false
): HTMLAnchorElement {
  const link = document.createElement('a');
  link.setAttribute('href', href);
  link.textContent = label;
  if (newTab) {
    link.setAttribute('target', '_blank');
  }
  return link;
}

export function makeList(
  listItems: string[],
  ordered = false
): HTMLOListElement | HTMLUListElement {
  const listType = ordered ? 'ol' : 'ul';
  const list = document.createElement(listType);

  listItems.forEach((itemText) => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  });

  return list;
}

export function makeParagraph(text = ''): HTMLParagraphElement {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

export function makeSpan(text: string): HTMLSpanElement {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

export function renderView(viewFn: ViewFn): void {
  const wrapper = clearMainWrapper();
  const view = viewFn();
  wrapper?.appendChild(view);
}

function clearMainWrapper(): HTMLElement | null {
  const wrapper = document.getElementById('section-content');
  wrapper?.childNodes.forEach((childNode) => {
    wrapper.removeChild(childNode);
  });
  return wrapper;
}
