

export class Header {
    constructor() {
        console.log(`This is header constructor`);
    }

    getFirstHeading() {
        return `Webpack Starter page`;
    }
}

// customElements.define('lit-header', Header);