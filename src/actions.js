export function changeLang(lang){
    localStorage.setItem("faradisLang",lang);
    console.log("there you go localStorage", localStorage.faradisLang);
    return {
        type: 'CHANGE_LANGUAGE',
        lang
    };
}
