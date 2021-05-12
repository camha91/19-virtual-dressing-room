const initialState = {
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
    default:
      return { ...state };
  }
};

export default VirtualDressingRoomReducer;
