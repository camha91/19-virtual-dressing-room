const initialState = {
    currentActiveTab: {
        tabName: "tabTopClothes",
        showName: "Top",
        type: "topClothes",
    },
    currentDressingSet: {
        hairStyle: "img/hairstyle/hairstyle2.png",
        necklaces: "img/necklaces/necklace1.png",
        topClothes: "img/clothes/topcloth3.png",
        botClothes: "img/clothes/botcloth2.png",
        handbags: "img/handbags/handbag2.png",
        shoes: "img/shoes/shoes1.png",
        background: "img/background/background3.jpg",
    },
};

const VirtualDressingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_ACTIVE_TAB": {
            state.currentActiveTab = action.currentActiveTab;
            return { ...state };
        }
        case "TRY_ON": {
            const dressingSetUpdate = {
                ...state.currentDressingSet,
                ...action.tryItem,
            };
            // console.log("dressingSetUpdate: ", dressingSetUpdate);
            // console.log("action.tryItem: ", action.tryItem);

            state.currentDressingSet = dressingSetUpdate;

            return { ...state };
        }
        default:
            return { ...state };
    }
};

export default VirtualDressingRoomReducer;
