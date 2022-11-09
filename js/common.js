/**
 * 共通処理クラス
 */
export class Common {
    /**
     * デバイスに応じてイベント種別（クリックまたは、タッチ）を返す
     *
     * @return {string}
     */
    static getEventTypeClickOrTouch() {
        return (window.ontouchstart === null) ? 'touchstart' : 'click';
    }
}
