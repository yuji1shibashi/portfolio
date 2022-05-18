import { Tab } from './tab.js';
import { Skill } from './skill.js';

/**
 * HTML読み込み後に実行
 */
window.onload = function () {
    // タブを生成する
    new Tab();
    // スキルを生成する
    new Skill();
}
