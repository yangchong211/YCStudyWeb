export const getReadingTimeLocale = (readingTime, locale) => {
    const { minutes, words } = readingTime;
    const { less1Minute, word, time } = locale;
    return {
        time: minutes < 1
            ? less1Minute
            : time.replace('$time', Math.round(minutes).toString()),
        words: word.replace('$word', words.toString()),
    };
};
