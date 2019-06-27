

class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = document.querySelector('.dropdown-button');
        // this.content = document.querySelector('.dropdown-content');
        this.button.addEventListener('click', () => {
            this.toggleContent();
        })
    }
    
    toggleContent() {
        this.element.classList.toggle('dropdown-hidden');
    }

}


let dropdowns = document.querySelector('.dropdown-content');
new Dropdown(dropdowns);

