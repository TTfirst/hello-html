function myCheck() {

    checkRadioOrCheckbox("L-sex", "请选择性别");

    checkSelectTag('year', '--请选择年--');
    checkSelectTag("month", '--请选择月--');
    checkSelectTag("day", '--请选择日--');
    checkLocal();
    checkRadioOrCheckbox("marry", "请选择婚姻状况");
    checkAcademic();
    checkRadioOrCheckbox("hobby", "请至少选择一项爱好");
    checkTexta();
    checkRegister();
}
function checkRadioOrCheckbox(tagId, alertMessage) {
    var kh = document.getElementById(tagId).children;
    var d = false;
    for (var i = 0; i < kh.length; i++) {
        if (kh[i].tagName == "INPUT" && kh[i].checked) {
            d = true;
        }
    }
    if (!d) {
        alert(alertMessage);
    }
}
function checkSelectTag(tagId, defaultValue) {
    var year = document.getElementById(tagId).children;
    var flag = false;
    for (var i = 0; i < year.length; i++) {
        if (year[i].selected && year[i].text != defaultValue) {
            flag = true;
        }
    }
    if (!flag) {
        alert(defaultValue);
    }
}

function checkLocal() {
    var localtion = document.getElementById("local").value;
    if (localtion === "") { alert("请输入你所在的地区"); }
}

function checkAcademic() {
    var a = document.getElementById("academic").value;
    if (a === "") {
        alert("请输入学历");
    }
}

function checkTexta() {
    var textA = document.getElementById("te").value;
    if (textA === "") {
        alert("请进行自我介绍");
    }
}
function checkRegister() {
    var regis = document.getElementById("rule");
    var f = false;
    if (regis.type == "checkbox" && regis.checked) {
        f = true;
    }
    if (!f) {
        alert("请同意注册方案");
    }
}