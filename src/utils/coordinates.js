// get top right bottom left coordinates
export const getItemCoordinates = (element) => {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
    };
};
