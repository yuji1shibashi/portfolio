// 共通処理
import { Common } from './common.js';

/**
 * スライドトグルを扱うクラス
 */
export class slideToggle {
    /**
     * スライドアップ
     *
     * @param {object} el
     * @param {int} duration
     * @return {void}
     */
    static #slideUp(el, duration = 300) {
        el.style.height = el.offsetHeight + "px";
        el.offsetHeight;
        el.style.transitionProperty = "height, margin, padding";
        el.style.transitionDuration = duration + "ms";
        el.style.transitionTimingFunction = "ease";
        el.style.overflow = "hidden";
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        el.style.marginTop = 0;
        el.style.marginBottom = 0;
        setTimeout(() => {
        el.style.display = "none";
        el.style.removeProperty("height");
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
        el.style.removeProperty("margin-top");
        el.style.removeProperty("margin-bottom");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
        el.style.removeProperty("transition-timing-function");
        }, duration);
    };

    /**
     * スライドダウン
     *
     * @param {object} el
     * @param {int} duration
     * @return {void}
     */
    static #slideDown(el, duration = 300) {
        el.style.removeProperty("display");
        let display = window.getComputedStyle(el).display;
        if (display === "none") {
            display = "block";
        }
        el.style.display = display;
        let height = el.offsetHeight;
        el.style.overflow = "hidden";
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        el.style.marginTop = 0;
        el.style.marginBottom = 0;
        el.offsetHeight;
        el.style.transitionProperty = "height, margin, padding";
        el.style.transitionDuration = duration + "ms";
        el.style.transitionTimingFunction = "ease";
        el.style.height = height + "px";
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
        el.style.removeProperty("margin-top");
        el.style.removeProperty("margin-bottom");
        setTimeout(() => {
            el.style.removeProperty("height");
            el.style.removeProperty("overflow");
            el.style.removeProperty("transition-duration");
            el.style.removeProperty("transition-property");
            el.style.removeProperty("transition-timing-function");
        }, duration);
    };

    /**
     * スライドトグル
     *
     * @param {object} el
     * @param {int} duration
     * @return {void}
     */
    static slideToggle(el, duration = 300) {
        if (window.getComputedStyle(el).display === "none") {
            return this.#slideDown(el, duration);
        } else {
            return this.#slideUp(el, duration);
        }
    };

    /**
     * スライドトグル
     *
     * @return {void}
     */
     static setSlideToggleEvent() {
        let self = this;
        let slideToggle = Array.from(document.getElementsByClassName('slideToggle'));
        slideToggle.forEach(function(target) {
            target.addEventListener(Common.getEventTypeClickOrTouch(), function (e) {
                self.slideToggle(document.getElementById(e.target.dataset.id));
            });
        });
    };
}
