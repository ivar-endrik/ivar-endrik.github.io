function updateContent(url) {
    new Ajax.Updater('content', url,
    {asynchronous:true, evalScripts:true });
}


function showDetail(tagname, showMsg, hideMsg)
{
    var tag = document.getElementById(tagname);
    var displayValue = tag.style.display;
    tag.style.display = (displayValue == "block") ? "none" : "block";
    document.getElementById("toggle-btn").innerHTML =
    (displayValue == "block") ? showMsg : hideMsg;
}


