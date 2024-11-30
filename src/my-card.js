import { LitElement, html, css } from 'lit';

/**
 * Modern and polished card component with dynamic properties and styling
 * Updated to include the 'fancy' attribute, collapsible details, and synchronization.
 */
export class MyCard extends LitElement {
  // Define the tag name for the custom element
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'PSU Card';
    this.subtitle = 'A beautifully styled card which is Penn State themed.';
    this.image = 'https://brand.psu.edu/images/backgrounds/veritcal-1-mark_registered.png'; // Placeholder image
    this.details = 'This is an example of a card that I was told to make in class';
    this.fancy = false; // Default state
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      image: { type: String },
      details: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 400px;
        margin: 20px auto;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-family: 'Arial', sans-serif;
        background-color: var(--card-bg-color, white);
        color: var(--card-text-color, #333);
        border: 1px solid var(--card-border-color, #ddd);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      :host([fancy]) {
        transform: scale(1.05);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
      }

      img {
        display: block;
        width: 100%;
        height: auto;
      }

      .card-header {
        padding: 20px;
        background-color: var(--header-bg-color, #0054a4);
        color: var(--header-text-color, white);
        text-align: center;
      }

      .card-header h1 {
        margin: 0;
        font-size: 1.5em;
      }

      .card-header p {
        margin: 5px 0 0;
        font-size: 0.9em;
        opacity: 0.8;
      }

      .card-body {
        padding: 20px;
      }

      .card-body p {
        font-size: 1em;
        line-height: 1.6;
        margin: 0;
      }

      details {
        margin-top: 8px;
        cursor: pointer;
      }

      summary {
        font-size: 1em;
        font-weight: bold;
      }

      .card-footer {
        padding: 20px;
        text-align: center;
        background-color: var(--footer-bg-color, #f4f4f4);
      }

      button {
        padding: 10px 20px;
        font-size: 1em;
        color: white;
        background-color: #007bff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #0056b3;
      }
    `;
  }

  render() {
    return html`
      <div>
        ${this.image ? html`<img src="${this.image}" alt="${this.title}" />` : ''}
        <div class="card-header">
          <h1>${this.title}</h1>
          <p>${this.subtitle}</p>
        </div>
        <div class="card-body">
          <p>${this.details}</p>
          <slot></slot>
          <details @toggle="${this._onToggle}">
            <summary>Details</summary>
            <div>
              <slot name="details">No additional details provided.</slot>
            </div>
          </details>
        </div>
        <div class="card-footer">
          <button @click="${this._onButtonClick}">Learn More</button>
        </div>
      </div>
    `;
  }

  // Toggle the 'fancy' attribute when the details section is opened or closed
  _onToggle(e) {
    this.fancy = e.target.open;
  }

  // Sync 'fancy' attribute with the details element's open state
  updated(changedProperties) {
    if (changedProperties.has('fancy')) {
      const detailsElement = this.shadowRoot.querySelector('details');
      if (detailsElement) {
        detailsElement.open = this.fancy;
      }
    }
  }

  // Event handler for the button click
  _onButtonClick() {
    alert('Learn more about this card!');
  }
}

// Register the custom element with the browser
customElements.define(MyCard.tag, MyCard);
