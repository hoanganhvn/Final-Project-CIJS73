var redux = require('redux');

let oldState = {
    num: ["màn hình", "chuột", "bàn phím"],
    editStatus: true
};

const reducer1 = (state = oldState, action) => {
    switch (action.type) {
        case "ChangeEditStatus":
            return { ...state, editStatus: !state.editStatus };
        case "AddNew":
            return { ...state, num: [...state.num, action.newItem] };
        case "Delete":
            return { ...state, num: state.num.filter((value, i) => i !== action.number) };
        default:
            return state;
    };
};

const store1 = redux.createStore(reducer1);

store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
});

store1.dispatch({
    type: "ChangeEditStatus"
});
store1.dispatch({
    type: "AddNew",
    newItem: "tai nghe"
});
store1.dispatch({
    type: "Delete",
    number: 0
});