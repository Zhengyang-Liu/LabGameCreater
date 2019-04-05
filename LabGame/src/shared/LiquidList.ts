export const LiquidList = ['none', 'water', 'trypan blue', 'trypan blue -1', 'trypan blue -2', 'trypan blue -3', 'trypan blue -4'];

export const LiquidColorDictionary = {
    "": "",
    "none": "",
    "water": " regular",
    "trypan blue": " blue1",
    "trypan blue -1": " blue2",
    "trypan blue -2": " blue3",
    "trypan blue -3": " blue4",
    "trypan blue -4": " blue5",
}

export const LiquidMixDictionary = {
    "trypan blue+water": "trypan blue -1",
    "trypan blue -1+water": "trypan blue -2",
    "trypan blue -2+water": "trypan blue -3",
    "trypan blue -3+water": "trypan blue -4",
    "trypan blue -4+water": "trypan blue -5",
}

export class LiquidMixer {
    static Mix(liquid1: string, liquid2: string) {
        let result = "";
        if (LiquidMixDictionary[liquid1 + "+" + liquid2] != undefined) {
            result = LiquidMixDictionary[liquid1 + "+" + liquid2];
        } else if (LiquidMixDictionary[liquid2 + "+" + liquid1] != undefined) {
            result = LiquidMixDictionary[liquid2 + "+" + liquid1];
        }
        return result;
    }
}