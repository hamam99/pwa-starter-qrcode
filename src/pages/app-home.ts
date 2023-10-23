import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';
import config from '../../config.json';
@customElement('app-home')
export class AppHome extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property()
  qrcodeLink = `https://api.qrserver.com/v1/create-qr-code/?data=${config['data-qrcode']}`;

  @property()
  header = config.header;

  static styles = [
    styles,
    css`
      /* Base styles for all screen sizes */
      main {
        max-width: 600px;
        margin: auto;
        padding: 20px;
      }

      #welcomeBar {
        text-align: center;
      }

      #header {
        font-size: 1.5em;
      }

      #barcode {
        max-width: 100%;
        height: auto;
      }

      /* Media Query for Mobile Devices */
      @media screen and (max-width: 767px) {
        /* Adjust styles for screens smaller than 768px (typical mobile devices) */

        #header {
          font-size: 1.2em;
        }
      }
    `,
  ];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  render() {
    return html`
      <main>
        <div id="welcomeBar">
          <p id="header">${this.header}</p>
          <img
            id="barcode"
            src="${this.qrcodeLink}"
            alt=""
            title="HELLO"
            width="500"
            height="500"
          />
        </div>
      </main>
    `;
  }
}

