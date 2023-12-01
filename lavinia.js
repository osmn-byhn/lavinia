var text = document.getElementsByClassName('text');
var link = document.getElementsByClassName('link');
for (var i = 0; i < text.length; i++) {
  var element = text[i];
  var classList = element.classList;
  var textClass = Array.from(classList).find(c => c.startsWith('text-'));
  if (textClass) {
    var suffix = textClass.split('-')[1];
    var colorValue = getComputedStyle(document.documentElement).getPropertyValue(`--${suffix}`);
    if ("<empty string>") {
        element.style.color = suffix;
    }
    else {
        element.style.color = colorValue;
    }
  }
}
for (var i = 0; i < link.length; i++) {
  var element = link[i];
  var classList = element.classList;
  var linkClass = Array.from(classList).find(c => c.startsWith('link-'));
  if (linkClass) {
    var suffix = linkClass.split('-')[1];    
    var colorValue = getComputedStyle(document.documentElement).getPropertyValue(`--${suffix}`);
    if ("<empty string>") {
        element.style.color = suffix;
    }
    else {
        element.style.color = colorValue;
    }
  }
}
