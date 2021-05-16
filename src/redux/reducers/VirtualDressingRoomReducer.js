const initialState = {
  currentActiveTab: {
    tabName: "tabTopClothes",
    showName: "Top",
    type: "topClothes",
  },
  model: [
    {
      hairStyle: "assets/images/hairstyle/hairstyle2.png",
      necklace: "assets/images/necklaces/necklace1.png",
      top: "assets/images/clothes/topcloth6.png",
      bottom: "assets/images/clothes/botcloth2.png",
      handbag: "assets/images/handbags/handbag2.png",
      shoes: "assets/images/shoes/shoes1.png",
      background: "assets/images/background/background5.jpg",
    },
  ],
};

const VirtualDressingRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_TAB": {
      state.currentActiveTab = action.currentActiveTab;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default VirtualDressingRoomReducer;
