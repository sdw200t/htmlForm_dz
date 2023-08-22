export class Tooltip {
    constructor() {
        this._tooltips = [];
    }

    showTooltip(message, element) {
        const tooltipElement = document.createElement('div');
        const title = document.createElement("div");
        const text = document.createElement("div");

        tooltipElement.classList.add('form-error');
        title.classList.add('form-error-title');
        text.classList.add('form-error-text')

        title.textContent = element.name;
        text.textContent = message;
        
        tooltipElement.appendChild(title);
        tooltipElement.appendChild(text);

        const id = performance.now();

        this._tooltips.push({
            id,
            element: tooltipElement
        })

        document.body.appendChild(tooltipElement);

        const { top, left } = element.getBoundingClientRect();


        tooltipElement.style.left = left + element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + 'px'; 
        tooltipElement.style.top = top - 5 - tooltipElement.offsetHeight + 'px';
 
        return id;
    }

    removeTooltip(id) {
        const tooltip = this._tooltips.find(t => t.id === id);

        tooltip.element.remove();

        this._tooltips = this._tooltips.filter(t => t.id !== id);
    }
}