
//toggle class loop: toggles <className> of all instances of <element>
function toggleClass(element, className){
    for (var i = 0; i < element.length; i++){
        if (!element[i] || !className){
            return;
        }
        
        var classString = element[i].className, nameIndex = classString.indexOf(className);
        if (nameIndex == -1) {
            classString += ' ' + className;
        }
        else {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
        }
        element[i].className = classString;
    }
}
//
    var toggle = 'toggle';
    var toggles = document.getElementsByClassName(toggle);

for (var i = 0; i < toggles.length; i++){
document.getElementsByClassName(toggle)[i].addEventListener('click', function() {
    

    var toggleName = this.className.match(/[^\s]*\b-toggle/);
    var rootName = toggleName[0].slice(0, -7);
    var target = rootName + '-target';
    var active = rootName + '-active';

    var toggles = document.getElementsByClassName(toggleName);
    var targets = document.getElementsByClassName(target);

    toggleClass(toggles, active);
    toggleClass(targets, active);


});
}