
Prime();

function Prime() {
    for (var n = 1; n <= 50; n++) {
        var c = 0;
        for (var i = 1; i <= n; i++) {
            if (n == 1) {
                console.log(n);
            }
            if (n % i == 0) {
                c++;
            }
        }
        if (c == 2) {
            console.log(n);
        }
    }
}