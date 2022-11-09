import { Tab } from './tab.js';
import { Skill } from './skill.js';
import { Work } from './work.js';

/**
 * HTML読み込み後に実行
 */
window.onload = function () {
    // タブを生成する
    new Tab();
    // スキルを生成する
    new Skill();
    // 仕事を生成する
    new Work();
}
