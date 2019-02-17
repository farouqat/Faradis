
export function changeLang(lang){
    console.log("lang action",lang);
    return {
        type: 'CHANGE_LANGUAGE',
        lang
    };

}
