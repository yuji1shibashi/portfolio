// 共通処理
import { Common } from './common.js';

/**
 * タブを生成するクラス
 * タブにしたい要素のclassに「tab」を付けることで使用可能
 */
 export class Tab {
    /**
     * constructor
     *
     * @constructor
     * @return {void}
     */
    constructor() {
        this.#setupTab();
    }

    /**
     * タブをセットアップ
     *
     * @private
     * @return {void}
     */
    #setupTab() {
        // タブを取得
        const tabs = document.getElementsByClassName('tab');
        // タブの数だけクリックまたは、タッチイベントを設定する
        for (let tab of tabs) {
            tab.addEventListener(Common.getEventTypeClickOrTouch(), this.#tabSwitch, false);
        }
    }

    /**
     * タブ切り替え処理
     *
     * @private
     * @return {void}
     */
    #tabSwitch() {
        // 現在表示しているタブの表示フラグと活性フラグを削除
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');

        // 選択したタブの表示フラグと活性フラグを追加
        document.getElementsByClassName('panel')[Tab.#getSelectedTabIndex(this)].classList.add('is-show');
        this.classList.add('is-active');
    }

    /**
     * 選択しているタブのインデックスを取得
     *
     * @private static
     * @param {object} obj
     * @return {number}
     */
     static #getSelectedTabIndex(obj) {
        // タブ一覧取得
        const tabs = document.getElementsByClassName('tab');
        // オブジェクトを配列に展開する
        const arrayTabs = Array.prototype.slice.call(tabs);
        // 現在選択しているタブのインデックスを取得
        return arrayTabs.indexOf(obj);
    }
}
