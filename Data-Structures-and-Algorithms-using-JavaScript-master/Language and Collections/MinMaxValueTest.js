main = function() {
    var maxByte = 127;
    var minByte = -128;
    var maxShort = 32767;
    var minShort = -32768;
    var maxInteger = 2147483647;
    var minInteger = -2147483648;
    var maxLong = 9223372036854775807;
    var minLong = -9223372036854775808;
    var maxFloat = 3.4028235E38;
    var minFloat = 1.4E-45;
    var maxDouble = 1.7976931348623157E308;
    var minDouble = 4.9E-324;
    console.info("Range of byte :: " + minByte + " to " + maxByte + ".");
    console.info("Range of short :: " + minShort + " to " + maxShort + ".");
    console.info("Range of integer :: " + minInteger + " to " + maxInteger + ".");
    console.info("Range of long :: " + minLong + " to " + maxLong + ".");
    console.info("Range of float :: " + minFloat + " to " + maxFloat + ".");
    console.info("Range of double :: " + minDouble + " to " + maxDouble + ".");
};

main();
