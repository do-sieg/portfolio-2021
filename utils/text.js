export function getReadingTime(locale, text) {
    const averageWordsPerMinute = {
        fr: 195,
        en: 228,
    }[locale];
    const wordCount = text.replace(/[^\w ]/g, "").split(/\s+/).length;
    return Math.ceil(wordCount / averageWordsPerMinute);
}
