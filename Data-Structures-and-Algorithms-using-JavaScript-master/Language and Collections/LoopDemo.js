main1 = function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
    }
    console.info("Sum is :: " + sum);
};

main2 = function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = 0;
    var i = 0;
    while (i < numbers.length) {
            sum += numbers[i];
            i++;
        }
    console.info("Sum is :: " + sum);
};

main1();
main2();