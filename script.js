
function show(value) {
    document.getElementById("result").value += value;
}

function Calculate() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}