let randNumber = Math.floor(Math.random() * 10);
const mixedMessages = (randNumber) => {
    // console.log(randNumber);
    switch (randNumber) {
        case 0:
            console.log("Why don't skeletons fight each other?\nThey don't have the guts.");
            break;
        case 1:
            console.log("Why don't skeletons fight each other?\nThey don't have the guts.");
            break;
        case 2:
            console.log("What do you call fake spaghetti?\nAn impasta!");
            break;
        case 3:
            console.log("Why did the scarecrow win an award?\nBecause he was outstanding in his field.");
            break;
        case 4:
            console.log("Why don't eggs tell jokes?\nThey'd crack each other up.");
            break;
        case 5:
            console.log("What do you call cheese that isn't yours?\nNacho cheese!");
            break;
        case 6:
            console.log("Why can't you give Elsa a balloon?\nBecause she’ll let it go.");
            break;
        case 7:
            console.log("Did you hear about the mathematician who’s afraid of negative numbers?\nHe'll stop at nothing to avoid them.");
            break;
        case 8:
            console.log("How does a penguin build its house?\nIgloos it together.");
            break;
        case 9:
            console.log("Why did the bicycle fall over?\nIt was two - tired!");
            break;

        default:
            console.log("Error, Try running again");
            break;
    }

}

mixedMessages(randNumber)