import { render } from './index';
import Card from './Card';

const CardList = cards => {
    const html = `
    <ul>
        ${cards.map(card => Card(card)).join("")}
    </ul>
    `;
    console.log(html);
    render(html, document.getElementById("root"));
};

export default CardList;