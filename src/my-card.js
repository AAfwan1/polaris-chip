import { LitElement, html, css } from 'lit';

/**
 * Modern and polished card component with dynamic properties and styling
 */
export class MyCard extends LitElement {
  // Define the tag name for the custom element
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Modern Card";
    this.subtitle = "A beautifully styled card component.";
    this.image = "https://via.placeholder.com/400x200"; // Placeholder image
    this.details = "This is an example of a modern card built with LitElement. It supports dynamic properties and slots for flexible content injection.";
  }

  // Define CSS styles scoped to this component
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

  // Define properties that can be reflected to attributes
  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      image: { type: String },
      details: { type: String },
    };
  }

  // Render the HTML structure of the card
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
        </div>
        <div class="card-footer">
          <button @click="${this._onButtonClick}">Learn More</button>
        </div>
      </div>
    `;
  }

  // Event handler for the button click
  _onButtonClick() {
    alert('Button clicked!');
  }
}

// Register the custom element with the browser
globalThis.customElements.define(MyCard.tag, MyCard);
