import { CHANGE_ACTIVE_TAB, TRY_ON } from "../Types/VirtualDressingRoomType";

export const changeActiveTabAction = (navItem) => ({
    type: CHANGE_ACTIVE_TAB,
    currentActiveTab: { ...navItem },
});

export const tryOnAction = (tabPaneItem) => ({
    type: TRY_ON,
    tryItem: { [tabPaneItem.type]: tabPaneItem.imgSrc_png },
});
