var text = document.getElementsByClassName('text');
var link = document.getElementsByClassName('link');
var bgElements = document.getElementsByClassName('link');

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

for (var i = 0; i < bgElements.length; i++) {
    var element = bgElements[i];
    var classList = element.classList;
    var bgClass = Array.from(classList).find(c => c.startsWith('bg-'));
    if (bgClass) {
      var suffix = bgClass.split('-')[1];    
      var colorValue = getComputedStyle(document.documentElement).getPropertyValue(`--${suffix}`);
      if ("<empty string>") {
          element.style.backgroundColor = suffix;
      }
      else {
          element.style.backgroundColor = colorValue;
      }
    }
  }
/*
bgElements.forEach(function(element) {
    // Tüm sınıf adlarını al
    var allClasses = element.classList;
  
    // "bg-" ile başlayan sınıf adını bul
    var bgClass = Array.from(allClasses).find(c => c.trim().startsWith('bg-'));
  
    if (bgClass) {
      // Sınıf adının içindeki tire karakterinden sonrasını al
      var suffix = bgClass.split('-')[1].trim();
  
      var colorValue = getComputedStyle(document.documentElement).getPropertyValue(`--${suffix}`);
      console.log(suffix);
      console.log(colorValue);
  
      if ("<empty string>") {
        element.style.backgroundColor = suffix; // Varsayılan renk
      } else {
        element.style.backgroundColor = colorValue;
      }
    }
});*/

  
