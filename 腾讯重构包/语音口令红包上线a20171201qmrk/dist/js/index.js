var e5_tx_list = document.getElementById("e5_tx_list");
var e5_btn_box = document.getElementById("e5_btn_box");
var e5_btn_boxA = e5_btn_box.getElementsByTagName("a");

var share_tx_list = document.getElementById("share_tx_list");
var share_btn_list = document.getElementById("share_btn_list");
var share_btn_listA = share_btn_list.getElementsByTagName("a");

for(var i =0; i<e5_btn_boxA.length; i++){
    e5_btn_boxA[i].setAttribute("data-clipboard-text",e5_tx_list.children[i].innerHTML)
};
for(var j =0; j<share_btn_listA.length; j++){
    share_btn_listA[j].setAttribute("data-clipboard-text",share_tx_list.children[j].innerHTML)
};
var clipboard = new Clipboard('.copy_btn');
clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});

































