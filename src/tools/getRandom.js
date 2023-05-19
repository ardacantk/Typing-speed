import { words as data } from "../data/data"

export const getRandom = (language) => {
    const lanList = ["turkish", "english"];
    if (!lanList.includes(language)) {
        return [];
    }

    const words = data.sort(() => Math.random() - 0.5).slice(0, 30).map((word) => ({
        word: word[language],
        color: "black"
    }));
    
    return words;
};

