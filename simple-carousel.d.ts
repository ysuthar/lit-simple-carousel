/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, PropertyValues } from "lit";
import "./slide-button.js";
export declare class SimpleCarousel extends LitElement {
    static styles: import("lit").CSSResult;
    slideIndex: number;
    private containerHeight;
    private readonly slideElements;
    /**
     * Return slide index in the range of [0, slideElement.length)
     */
    get wrappedIndex(): number;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    navigateToNextSlide(): void;
    navigateToPrevSlide(): void;
    private navigateWithAnimation;
    private initializeSlides;
}
declare global {
    interface HTMLElementTagNameMap {
        "simple-carousel": SimpleCarousel;
    }
}
//# sourceMappingURL=simple-carousel.d.ts.map