import { makeParagraph } from "./views.utils";

export function makeHomeView() {
    const view = document.createElement("div");
    const paragraph = makeParagraph("Hello, World! This site uses Typescript!");
    view.appendChild(paragraph);

    return view;
}