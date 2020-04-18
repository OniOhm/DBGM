// multiline needs to return an array of string variables
function multiline(Line) {
    console.log([...Line.split(" ")]);
    let pieces = [];
    let start = 0;
    let end = 20;
    // loops though the string
    // need two points the start point and the end point of the string given
    let numOfWords = 0;
    for (let i = 0; i < Line.length; i++) {
        if (Line[i] == " " && numOfWords < Line.split(" ").length) {
            numOfWords += 1;
            continue;

        } else if (numOfWords == 3) {
            pieces.push(Line.slice(start, i));
            numOfWords = 0;
            start = i;
            continue;
        } else {

        }
    }
    console.log(pieces);

}
console.log(multiline("A card that does something but more importantly, this sentance is cut every three words which"));
test('return the number of elements in pieces', () => {
    expect(multiline("this thnal malneop nksoem ").length).toBe(26);
})
