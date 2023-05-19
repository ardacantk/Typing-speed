import { createSlice } from "@reduxjs/toolkit";
import { getRandom } from "../tools/getRandom";

export const typingSlice = createSlice({
    name: "typing",
    initialState: {
        language: "turkish",
        wordList: getRandom("turkish"),
        keyPressed: 0,
        correctWord: 0,
        wrongWord: 0,
        wrongKeyPressed: 0,
        correctKeyPressed: 0,
        finished: false,
        time: 10,
        fontSize: 100,
        curentItems: {
            index: 0,
            bgColor: '#dddddd',
        }
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            state.wordList = getRandom(action.payload)
        },
        setWord: (state, action) => {
            const { wordList, curentItems } = state;
            const { index } = curentItems;
            const typeText = action.payload;
            const currentWord = wordList[index];

            state.keyPressed += 1;
            if (!state.finished) {
                state.finished = true;
            }

            if (currentWord.word.startsWith(typeText)) {
                state.curentItems.bgColor = "#dddddd";
            } else {
                state.curentItems.bgColor = "red"
            }

        },
        setState: (state, action) => {
            const currentWord = state.wordList[state.curentItems.index].word;
            const typeText = action.payload

            if (currentWord === typeText) {
                state.wordList[state.curentItems.index].color = "green";
                state.correctWord += 1
                state.correctKeyPressed += 1;
            } else {
                state.wordList[state.curentItems.index].color = "red";
                state.wrongWord += 1;
                state.wrongKeyPressed += 1;
            }

            if (state.curentItems.index === state.wordList.length - 1) {
                state.wordList = getRandom(state.language);
                state.curentItems.index = 0;
            } else {
                state.curentItems.index += 1;
            }

        },
        setTime: (state) => {
            if (state.time > 0) {
                state.time -= 1;
            }
        },
        reset: (state) => {
            state.wordList = getRandom(state.language);
            state.curentItems.index = 0;
            state.curentItems.bgColor = '#dddddd';
            state.keyPressed = 0;
            state.correctWord = 0;
            state.wrongWord = 0;
            state.wrongKeyPressed = 0;
            state.correctKeyPressed = 0;
            state.finished = false;
            state.time = 60;
        },
        setFontSize: (state) => {
            state.fontSize += 25;
            if (state.fontSize === 325) {
                state.fontSize = 100;
            }
            console.log(state.fontSize);
        }
    }
});

export const { setLanguage, setWord, setState, setTime, reset, setFontSize } = typingSlice.actions;
export default typingSlice.reducer;
