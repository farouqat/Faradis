export default function (state = {lang:'en'}, action) {
    if (action.type == 'CHANGE_LANGUAGE') {
        state = { ...state, lang: action.lang };
    }
    return state;
}
