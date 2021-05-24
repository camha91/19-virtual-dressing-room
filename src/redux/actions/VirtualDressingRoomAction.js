import {
    CHANGE_ACTIVE_TAB,
    TRY_ON,
} from "../constant/VirtualDressingRoomConstant";

export const changeActiveTabAction = (navItem) => ({
    type: CHANGE_ACTIVE_TAB,
    currentActiveTab: { ...navItem },
});

export const tryOnAction = (changeItem) => ({
    type: TRY_ON,
    tryItem: changeItem,
});
