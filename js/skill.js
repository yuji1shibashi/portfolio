// 定数インポート
import { SKILL_TYPES, SKILL_TYPE_NAMES } from './const.js';

/**
 * スキル画面を生成するクラス
 */
export class Skill {
    /**
     * constructor
     *
     * @constructor
     * @return {void}
     */
    constructor() {
        // スキル一覧をセット
        this.#setSkillList();
    }

    /**
     * スキル一覧をセット
     *
     * @private
     * @return {void}
     */
    #setSkillList() {
        // スキル一覧をJSONファイルから取得
        fetch('./json/skill.json')
            .then(response => {
                // 200番以外のステータスはエラーとする
                if (response.status !== 200) {
                    throw 'スキル一覧が取得できませんでした。';
                }
                return response.json();
            })
            .then(data => {
                // スキル一覧を生成
                this.#createSkillList(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    /**
     * スキル一覧を生成
     *
     * @private
     * @param {array} data
     * @return {void}
     */
    #createSkillList(data) {
        const skillArea = document.getElementById('skill-area');
        data.forEach(d => {
            skillArea.innerHTML += this.#createSkillHeader(d.title, d.icon_path);
            const skillDetail = this.#createSkillDetail(d.skills);
            skillArea.innerHTML += skillDetail;
        })
    }

    /**
     * スキルヘッダーを生成
     *
     * @private
     * @param {string} title
     * @param {string} iconPath
     * @return {string}
     */
    #createSkillHeader(title, iconPath) {
        return `
            <div class="skill-header">
                <img class="skill-header-icon" src="${iconPath}" height="100px" width="100px">
                <div class="skill-header-title">${title}</div>
            </div>
        `;
    }

    /**
     * スキル詳細を生成
     *
     * @private
     * @param {array} skills
     * @return {string}
     */
    #createSkillDetail(skills) {
        let skillDetails = [];

        skills.forEach((s, i) => {
            // スキル2つ並びの先頭
            if ((i + 1) % 2 === 1) {
                skillDetails.push(`<div class="skill-row">`);
            }
            // スキル情報をセット
            skillDetails.push(`
                <div class="skill-detail">
                    <img class="skill-logo" src="${s.logo_path}">
                    <div class="skill-box">
                        <div class="skill-name">${this.#getSkillTypeName(s.type)}：${s.name}</div>
                        <div class="skill-period">経験年数：${s.period}</div>
                        <div class="skill-rank">${this.#createRankStar(s.rank)}</div>
                        <div class="skill-comment">${s.comment}</div>
                    </div>
                </div>
            `);
            // スキル2つ並びの最後
            if ((i + 1) % 2 === 0) {
                skillDetails.push(`</div>`);
            }
        })
        return skillDetails.join('\n');
    }

    /**
     * スキル種別名取得
     *
     * @param {string} type
     * @return {string}
     */
    #getSkillTypeName(type) {
        let skillTypeName = '';

        switch (type) {
            case SKILL_TYPES.LANG :
                skillTypeName = SKILL_TYPE_NAMES.LANG;
                break;
            case SKILL_TYPES.FRAMEWORK :
                skillTypeName = SKILL_TYPE_NAMES.FRAMEWORK;
                break;
            case SKILL_TYPES.LIBRARY :
                skillTypeName = SKILL_TYPE_NAMES.LIBRARY;
                break;
            case SKILL_TYPES.ATHOR :
                skillTypeName = SKILL_TYPE_NAMES.ATHOR;
                break;
        }
        return skillTypeName;
    }

    /**
     * ランク☆を生成
     *
     * @private
     * @param {int} rank
     * @return {string}
     */
     #createRankStar(rank) {
        const MAX_RANK = 5;
        let rankStar = '';

        for (let i = 1; i <= MAX_RANK; i++) {
            if (i <= rank) {
                rankStar += '★';
            } else {
                rankStar += '☆';
            }
        }
        return rankStar;
    }
}
