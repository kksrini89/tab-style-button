const templateTabStyle = document.createElement('template');
templateTabStyle.innerHTML = `
<div class="container">
<ul class="scheduler-options">
  <li><a href="javascript:void(0)" class="optn">daily</a></li>
  <li><a href="javascript:void(0)" class="optn">weekly</a></li>
  <li><a href="javascript:void(0)" class="optn">monthly</a></li>
</ul>
</div>
<style>
      .container {
        margin-top: 10px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      /* Scheduler Option - Start */
      .scheduler-options {
        display: flex;
        list-style: none;
      }

      .scheduler-options > li {
        min-width: 20%;
        padding: 10px 0;
        border-right: 1px solid #d3d3d3;
        text-align: center;
        background-color: var(--optn-bg-color);
      }

      .scheduler-options > li:hover {
        cursor: pointer;
      }

      .scheduler-options li.selected-optn {
        background-color: var(--optn-selected-bg-color);
      }

      .scheduler-options li:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }

      .scheduler-options li:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      .scheduler-options li > .optn {
        color: var(--optn-color);
        padding: 0 20px;
        text-decoration: none;
        text-transform: capitalize;
      }
    </style>
`;

class TabStyleButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // this.appendChild(templateTabStyle.content.cloneNode(true));
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(document.importNode(templateTabStyle.content.cloneNode(true), true));
  }

  disconnectedCallback() {
    console.log('TabStyleButton component got unloaded...');
  }
}

window.customElements.define('tab-style-btn', TabStyleButton);
