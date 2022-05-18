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
        data.forEach(d => {
            const skillDetail = this.#createSkillDetail(d.skills)
            console.log(`${d.title}${d.icon_path}${d.comment}${skillDetail}`);
        })
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

        skills.forEach(s => {
            skillDetails.push(`<${s.name}, ${s.type}, ${s.period}, ${s.rank}>`);
        })
        return skillDetails.join('\n');
    }
}
