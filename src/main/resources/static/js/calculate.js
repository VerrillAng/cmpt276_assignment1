var grades = [];

document.getElementById("newGrade").addEventListener("keyup", function(event) {
    var addGrade = document.getElementById("newGrade").value;
    if (event.key == "Enter") {
        if (addGrade == "") {
            return;
        }
        if (addGrade < 0){
            this.value = "";
            alert("Please enter valid number (minimum 0), you entered: " + addGrade);
        }
        else if (addGrade > 100){
            this.value = "";
            alert("Please enter valid number (max 100), you entered: " + addGrade);
        }
        else{
            this.value = "";
            grades.push(addGrade);
            // alert(aGrade);
            // document.getElementById("A").style.width="100px";
            // const box = document.getElementById("ApSpan");
            // box.insertAdjacentText("beforeend", grades);
            analyzeGrade(addGrade);
        }   
    }
});

function analyzeGrade(theGrade) {
    if (document.getElementById("max").value >= Number(theGrade) && Number(theGrade) > document.getElementById("aplus").value){
        const box = document.getElementById("ApSpan");
        // box.insertAdjacentText("beforeend", "O");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("aplus").value > Number(theGrade) && Number(theGrade) >= document.getElementById("a").value){
        const box = document.getElementById("ASpan");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("a").value > Number(theGrade) && Number(theGrade) >= document.getElementById("amin").value){
        const box = document.getElementById("A-Span");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("amin").value > Number(theGrade) && Number(theGrade) >= document.getElementById("bplus").value){
        const box = document.getElementById("BpSpan");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("bplus").value > Number(theGrade) && Number(theGrade) >= document.getElementById("b").value){
        const box = document.getElementById("BSpan");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("b").value > Number(theGrade) && Number(theGrade) >= document.getElementById("bmin").value){
        const box = document.getElementById("B-Span");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("bmin").value > Number(theGrade) && Number(theGrade) >= document.getElementById("cplus").value){
        const box = document.getElementById("CpSpan");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("cplus").value > Number(theGrade) && Number(theGrade) >= document.getElementById("c").value){
        const box = document.getElementById("CSpan");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("c").value > Number(theGrade) && Number(theGrade) >= document.getElementById("cmin").value){
        const box = document.getElementById("C-Span");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("cmin").value > Number(theGrade) && Number(theGrade) >= document.getElementById("d").value){
        const box = document.getElementById("DSpan");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
    else if (document.getElementById("d").value >= Number(theGrade) && Number(theGrade) >= document.getElementById("ft").value){
        const box = document.getElementById("FSpan");
        box.insertAdjacentHTML(
            'beforeend',
            '<span style="border: 1px solid black; background-color: #a62824; color: #a62824";>O</span>',
          );
        return;
    }
}

function remake(theArray) {
    document.getElementById("ApSpan").textContent = "";
    document.getElementById("ASpan").textContent = "";
    document.getElementById("A-Span").textContent = "";
    document.getElementById("BpSpan").textContent = "";
    document.getElementById("BSpan").textContent = "";
    document.getElementById("B-Span").textContent = "";
    document.getElementById("CpSpan").textContent = "";
    document.getElementById("CSpan").textContent = "";
    document.getElementById("C-Span").textContent = "";
    document.getElementById("DSpan").textContent = "";
    document.getElementById("FSpan").textContent = "";
    for (var i = 0; i < theArray.length; i++) {
        analyzeGrade(theArray[i]);
    }
}

// if (document.getElementById("max").value <= document.getElementById("aplus").value) {
//     alert("Input must be larger than the value below: ", document.getElementById("aplus").value)
// }

document.getElementById("max").onchange = function() {
    if (Number(document.getElementById("max").value) <= Number(document.getElementById("aplus").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("aplus").value);
        this.value = (Number(document.getElementById("aplus").value) + 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("aplus").onchange = function() {
    if (Number(document.getElementById("aplus").value) <= Number(document.getElementById("a").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("a").value);
        this.value = (Number(document.getElementById("a").value) + 0.01);
    }
    else if (Number(document.getElementById("aplus").value) >= Number(document.getElementById("max").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("max").value);
        this.value = (Number(document.getElementById("max").value) - 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("a").onchange = function() {
    if (Number(document.getElementById("a").value) <= Number(document.getElementById("amin").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("amin").value);
        this.value = (Number(document.getElementById("amin").value) + 0.01);
    }
    else if (Number(document.getElementById("a").value) >= Number(document.getElementById("aplus").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("aplus").value);
        this.value = (Number(document.getElementById("aplus").value) - 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("amin").onchange = function() {
    if (Number(document.getElementById("amin").value) <= Number(document.getElementById("bplus").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("bplus").value);
        this.value = (Number(document.getElementById("bplus").value) + 0.01);
    }
    else if (Number(document.getElementById("amin").value) >= Number(document.getElementById("a").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("a").value);
        this.value = (Number(document.getElementById("a").value) - 0.01);
    }
    else{
        remake(grades);
    }
}
document.getElementById("bplus").onchange = function() {
    if (Number(document.getElementById("bplus").value) <= Number(document.getElementById("b").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("b").value);
        this.value = (Number(document.getElementById("b").value) + 0.01);
    }
    else if (Number(document.getElementById("bplus").value) >= Number(document.getElementById("amin").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("amin").value);
        this.value = (Number(document.getElementById("amin").value) - 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("b").onchange = function() {
    if (Number(document.getElementById("b").value) <= Number(document.getElementById("bmin").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("bmin").value);
        this.value = (Number(document.getElementById("bmin").value) + 0.01);
    }
    else if (Number(document.getElementById("b").value) >= Number(document.getElementById("bplus").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("bplus").value);
        this.value = (Number(document.getElementById("bplus").value) - 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("bmin").onchange = function() {
    if (Number(document.getElementById("bmin").value) <= Number(document.getElementById("cplus").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("cplus").value);
        this.value = (Number(document.getElementById("cplus").value) + 0.01);
    }
    else if (Number(document.getElementById("bmin").value) >= Number(document.getElementById("b").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("b").value);
        this.value = (Number(document.getElementById("b").value) - 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("cplus").onchange = function() {
    if (Number(document.getElementById("cplus").value) <= Number(document.getElementById("c").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("c").value);
        this.value = (Number(document.getElementById("c").value) + 0.01);
    }
    else if (Number(document.getElementById("cplus").value) >= Number(document.getElementById("bmin").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("bmin").value);
        this.value = (Number(document.getElementById("bmin").value) - 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("c").onchange = function() {
    if (Number(document.getElementById("c").value) <= Number(document.getElementById("cmin").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("cmin").value);
        this.value = (Number(document.getElementById("cmin").value) + 0.01);
    }
    else if (Number(document.getElementById("c").value) >= Number(document.getElementById("cplus").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("cplus").value);
        this.value = (Number(document.getElementById("cplus").value) - 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("cmin").onchange = function() {
    if (Number(document.getElementById("cmin").value) <= Number(document.getElementById("d").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("d").value);
        this.value = (Number(document.getElementById("d").value) + 0.01);
    }
    else if (Number(document.getElementById("cmin").value) >= Number(document.getElementById("c").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("c").value);
        this.value = (Number(document.getElementById("c").value) - 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("d").onchange = function() {
    if (Number(document.getElementById("d").value) <= Number(document.getElementById("ft").value)) {
        alert("Input must be larger than the value below: " + document.getElementById("ft").value);
        this.value = (Number(document.getElementById("ft").value) + 0.01);
    }
    else if (Number(document.getElementById("d").value) >= Number(document.getElementById("cmin").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("cmin").value);
        this.value = (Number(document.getElementById("cmin").value) - 0.01);
    }
    else{
        remake(grades);
    }
}

document.getElementById("ft").onchange = function() {
    if (Number(document.getElementById("ft").value) >= Number(document.getElementById("d").value)){
        alert("Input must be smaller than the value below: " + document.getElementById("d").value);
        this.value = (Number(document.getElementById("d").value) - 0.01);
    }
    else{
        remake(grades);
    }
}


