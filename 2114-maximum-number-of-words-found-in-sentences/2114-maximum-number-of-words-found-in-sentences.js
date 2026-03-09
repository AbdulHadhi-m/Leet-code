var mostWordsFound = function(sentences) {
    return Math.max(...sentences.map(s => s.split(" ").length));
};