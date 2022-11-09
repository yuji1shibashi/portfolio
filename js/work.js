// 定数インポート
import { SKILL_TYPES, SKILL_TYPE_NAMES } from './const.js';
// スライドトグル
import { slideToggle } from './slideToggle.js';

/**
 * 仕事画面を生成するクラス
 */
export class Work {
    /**
     * constructor
     *
     * @constructor
     * @return {void}
     */
     constructor() {
        // 仕事一覧をセット
        this.#setWorkList();
    }

    /**
     * 仕事一覧をセット
     *
     * @private
     * @return {void}
     */
     #setWorkList() {
        // 仕事一覧をJSONファイルから取得
        fetch('./json/work.json')
            .then(response => {
                // 200番以外のステータスはエラーとする
                if (response.status !== 200) {
                    throw '仕事一覧が取得できませんでした。';
                }
                return response.json();
            })
            .then(data => {
                // 仕事一覧を生成
                this.#createWorkList(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    /**
     * 仕事一覧を生成
     *
     * @private
     * @param {array} data
     * @return {void}
     */
     #createWorkList(data) {
        const workArea = document.getElementById('work-area');
        data.forEach(d => {
            // workArea.innerHTML += this.#createWorkHeader(d.title, d.icon_path);
            // const workDetail = this.#createWorkDetail(d.works);
            // workArea.innerHTML += workDetail;
        })
        slideToggle.setSlideToggleEvent();
    }
}
