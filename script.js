const searchInput = document.getElementById('search-bar');
const suggestionsContainer = document.getElementById('suggestions');

const suggestions = [
    "Genesis", //old testament
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Matthew", //new testament 
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation",
    "1 Nephi", //bom
    "2 Nephi",
    "Jacob",
    "Enos",
    "Jarom",
    "Omni",
    "Words of Mormon",
    "Mosiah",
    "Alma",
    "Helaman",
    "3 Nephi",
    "4 Nephi",
    "Mormon",
    "Ether",
    "Moroni",
    "Doctrine and Covenants", //dc
    "Moses", //pogp
    "Abraham",
    "Joseph Smith - Matthew",
    "Joseph Smith - History",
    "Articles of Faith",
];


searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsContainer.innerHTML = '';

    if (query) {
        const filteredSuggestions = suggestions.filter(item =>
            item.toLowerCase().includes(query)
        );

        filteredSuggestions.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = item;
            suggestionItem.addEventListener('click', () => {
                // Convert book name to URL-friendly format
                const url = `/${item.toLowerCase().replace(/ /g, '-')}`;
                window.location.href = url;
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }
});
