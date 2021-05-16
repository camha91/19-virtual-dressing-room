const initialState = {
  currentActiveTab: {
    tabName: "tabTopClothes",
    showName: "Top",
    type: "topClothes",
  },
  currentDressingSet: {
    hairStyle: "assets/images/hairstyle/hairstyle2.png",
    necklaces: "assets/images/necklaces/necklace1.png",
    topClothes: "assets/images/clothes/topcloth6.png",
    botClothes: "assets/images/clothes/botcloth2.png",
    handbags: "assets/images/handbags/handbag2.png",
    shoes: "assets/images/shoes/shoes1.png",
    background: "assets/images/background/background5.jpg",
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
      console.log("dressingSetUpdate: ", dressingSetUpdate);
      console.log("action.tryItem: ", action.tryItem);

      state.currentDressingSet = dressingSetUpdate;

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default VirtualDressingRoomReducer;
