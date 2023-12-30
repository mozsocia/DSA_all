function one(n) {
    function two(i) {
        if (i < n) {
            console.log(i);
            two(i + 1);
        }
    }
    two(0);
}

one(3);

console.log("----------------------------------------------------")

function one1(n) {
    function two1(i) {
        if (i == n) return

        console.log(i);
        two1(i + 1);

    }
    two1(0);
}

one1(3);


/* output
0
1
2
----------------------------------------------------
0
1
2

*/
