

function longestWord(input) {
    
    input = input.split(" ");
    var longest = -1;
    var longWord;

    for (i=0; i < input.length; i++ ) {

        if (input[i].length > longest) {
          longest = input[i].length;
          longWord = input[i];

        }
        console.log(longest);
    }
    
}

longestWord("Hey there, handsome.");