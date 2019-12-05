
main1 = function(args) {
    var hm = {}
    hm["Mason"] = 55;
    hm["Jacob"] = 77;
    hm["William"] = 99;
    hm["Emma"] = 65;

    var keys = Object.keys(hm);
    var count = keys.length;
    console.info("Students count :: " + count);

    for (var index = 0; index < count; index++) {
        key = keys[index]
        console.info(key + " score marks :" + hm[key]);
    }
    console.info("Emma score available ::" + hm.hasOwnProperty("Emma"));
    console.info("John score available :: " + hm.hasOwnProperty("John"));

    delete hm["Emma"]
    console.info("Emma score available ::" + hm.hasOwnProperty("Emma"));
};

main2 = function(args) {
    var hm = new Map();
    hm.set("Mason", 55)
    hm.set("Jacob", 77);
    hm.set("William", 99);
    hm.set("Emma", 65);

    console.info(hm)

    var count = hm.size;
    console.info("Students count :: " + count);

    for (const [key, value] of hm.entries()) {
        console.info(key + " score marks :" + value);
    }

    console.info("Emma score available ::" + hm.has("Emma"));
    console.info("John score available :: " + hm.has("John"));

    hm.delete("Emma");
    console.info("Emma score available ::" + hm.has("Emma"));
};

main1(null);
console.log()
main2(null);