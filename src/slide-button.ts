/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import { LitElement, html, css } from "lit";
 import { customElement } from "lit/decorators.js";
 
 @customElement("slide-button")
 class SlideButton extends LitElement {
   static override styles = css`
     #btn {
       width: 2em;
       height: 2em;
       cursor: pointer;
       border-radius: 1em;
 
       display: flex;
       align-items: center;
       justify-content: center;
 
       box-shadow: var(
         --carousel-box-shadow,
         #cccccc 0.2em 0.2em 0.4em
       );
     }
 
     #btn:active {
       box-shadow: var(
         --carousel-active-btn-box-shadow,
         inset #18a6df 0.2em 0.2em 0.4em
       );
       background-color: var(--carousel-active-btn-background-color);
       color: var(--carousel-active-btn-color);
     }
 
     ::slotted(svg) {
       width: 1em;
       height: 1em;
     }
   `;
 
   override render() {
     return html`<div
       part="internal-btn"
       id="btn"
       tabindex="0"
       role="button"
       aria-pressed="false"
     >
       <slot></slot>
     </div>`;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     "slide-button": SlideButton;
   }
 }