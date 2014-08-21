console.log('\'Allo \'Allo!');

var sine1 = T("sin", {freq:440, mul:0.5});
var sine2 = T("sin", {freq:660, mul:0.5});

T("perc", {r:500}, sine1, sine2).on("ended", function() {
    this.pause();
}).bang().play();
