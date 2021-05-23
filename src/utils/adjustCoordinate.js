// bottom  x-20  y+90
// shoes  x-10 y+270 s.9
// handbags y130 x-100 s.5
// hair x+30 y0 s.7
// background x210 y210 s3.4
export const adjustCoordinate = (itemType) => {
    switch (itemType) {
        case "botClothes":
            return [-20, 90, 1];
        case "shoes":
            return [-10, 270, 0.9];
        case "handbags":
            return [-100, 130, 0.5];
        case "hairStyle":
            return [30, 0, 0.7];
        case "background":
            return [210, 210, 3.4];
        default:
            return [0, 0, 1];
    }
};
