export default function Select({id, title, options}) {

    // const createOptions = () => {
    //     return filteredOptions.map((o) => {
    //         const option = document.createElement('span');
    //         option.style.cursor = 'pointer'
    //         option.classList.add('select-option');
    //         option.textContent = o;
    //         option.addEventListener('click', () => {
    //             this.filterRecipes(o)
    //         })
    //         return option;
    //     });
    // }

    // const filterOptions = (value) => {
    //     if (value === '' || value.length < 3) {
    //         this.filteredOptions = this.options
    //         return
    //     }
    //     this.filteredOptions = this.options.filter((o) => o.toLowerCase().trim().includes(value))
    // }

    // const createTitle = () => {
    //     const parser = new DOMParser()
    //     let dom = `<div class="select-title-content">
    //             <span>${this.title}</span>
    //             <span class="caret chevron-bottom">&#8250;</span>
    //         </div>`
    //     if (!this.opened) {
    //         return parser.parseFromString(dom, 'text/html').querySelector('.select-title-content')
    //     }

    //     dom = `<div class="select-title-content">
    //         <input placeholder="${this.title}" autofocus/>
    //         <span class="caret chevron-top">&#8250;</span>
    //     </div>`
    //     dom = parser.parseFromString(dom, 'text/html').querySelector('.select-title-content')

    //     dom.querySelector('input').addEventListener('input', (e) => {
    //         this.filterOptions(e.target.value.toLowerCase().trim());
    //         this.renderOptions();
    //     })
    //     return dom
    // }

    // const renderOptions = () => {
    //     const selectOptions = this.select.querySelector('.select-options')
    //     if (!this.opened) {
    //         selectOptions.style.display = 'none'
    //         return;
    //     }
    //     selectOptions.style.display = 'flex'
    //     const options = this.createOptions()
    //     selectOptions.innerHTML = ''
    //     options.forEach(o => selectOptions.appendChild(o))
    // }

    // const renderTitle = ($selectTitle) => {
    //     const $newSelectTitleChild = this.createTitle()
    //     $selectTitle.innerHTML = ''
    //     $selectTitle.appendChild($newSelectTitleChild)
    //     if (this.opened) {
    //         this.select.style.width = '400px';
    //     } else {
    //         this.select.style.width = '170px';
    //     }
    // }
    return (
        <select name="select" id="select">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
    )
}



