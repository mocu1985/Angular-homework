function aboutUs() {
    // funcChange("/evote/common/aboutUs.html");
    alert("關於我");
}

function contactUs() {
    alert("聯繫我");
    // funcChange("/evote/login/index/contactUs.html");
}

function bulletinData() {
    // funcChange("/evote/login/index/bulletinData.html");
    alert("bulletinData");
}

function qaLink() {
    // funcChange("/evote/login/index/qa.html");
    alert("QA");
}

function englishWebSiteLink() {
    // funcChange("/evote/en");
    alert("EN");
}

function funcChange(url) {
    document.form2.target = "_self";
    document.form2.action = url;
    document.form2.submit();
}

// 偵測webapp，避免錯誤處理導至首頁
document.body.onload = function () {
    if (isWebview()) {
        if (device.ios()) {
            location.href = "tdccmvote://logout";
        } else if (device.android()) {
            window.mobile.Logout();
        }
    }
    // 點擊menu外的區塊時將menu收縮
    $(document).on((device.mobile() ? 'touchstart' : 'click'), '.c-main', function (event) {
        if ($("#hamburger_checkbox").prop("checked")) {
            $("#hamburger_checkbox").prop("checked", !$("#hamburger_checkbox").prop("checked"));
        }
    });
}