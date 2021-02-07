import { makeParagraph } from "./views.utils.js";

const PARAGRAPH_1 = `
    Tobias is a Fullstack Developer who values clean, clear code, test-driven development (TDD)
    and applications that deliver robust functionality with an intuitive user experience (UX).`;

const PARAGRAPH_2 = `
    Paragraph 2`;

const PARAGRAPH_3 = `Third block of text`;

export function makeAboutTobiasView() {
    const view = document.createElement("div");

    [PARAGRAPH_1, PARAGRAPH_2, PARAGRAPH_3].forEach((paraText) =>{
        const paragraph = makeParagraph(paraText);
        view.appendChild(paragraph);
    });

    return view;
}