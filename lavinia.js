var text = document.getElementsByClassName('text');
var link = document.getElementsByClassName('link');
var bgElements = document.getElementsByClassName('link');
var cursorList = {
    'auto': 'auto',
    'default': 'default',
    'none': 'none',
    'context-menu': 'context-menu',
    'help': 'help',
    'pointer': 'pointer',
    'progress': 'progress',
    'wait': 'wait',
    'cell': 'cell',
    'crosshair': 'crosshair',
    'text': 'text',
    'vertical-text': 'vertical-text',
    'alias': 'alias',
    'copy': 'copy',
    'move': 'move',
    'no-drop': 'no-drop',
    'not-allowed': 'not-allowed',
    'grab': 'grab',
    'grabbing': 'grabbing',
    'all-scroll': 'all-scroll',
    'col-resize': 'col-resize',
    'row-resize': 'row-resize',
    'n-resize': 'n-resize',
    'e-resize': 'e-resize',
    's-resize': 's-resize',
    'w-resize': 'w-resize',
    'ne-resize': 'ne-resize',
    'nw-resize': 'nw-resize',
    'se-resize': 'se-resize',
    'sw-resize': 'sw-resize',
    'ew-resize': 'ew-resize',
    'ns-resize': 'ns-resize',
    'nesw-resize': 'nesw-resize',
    'nwse-resize': 'nwse-resize',
    'zoom-in': 'zoom-in',
    'zoom-out': 'zoom-out',
  };

  var listStyleTypes = {
    'disc': 'disc',
    'circle': 'circle',
    'square': 'square',
    'decimal': 'decimal',
    'decimal-leading-zero': 'decimal-leading-zero',
    'lower-roman': 'lower-roman',
    'upper-roman': 'upper-roman',
    'lower-greek': 'lower-greek',
    'lower-alpha': 'lower-alpha',
    'upper-alpha': 'upper-alpha',
    'none': 'none' // Veya kendi özel bir değer ekleyebilirsiniz
  };
  
var divElements = document.querySelectorAll('*');


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
  divElements.forEach(function(div) {
    var classNames = div.classList;
    classNames.forEach(function(className) {
      if (cursorList.hasOwnProperty(className)) {
        div.style.cursor = cursorList[className];
      }
    });
  });
  

  divElements.forEach(function(div) {
    var classNames = div.classList;
    classNames.forEach(function(className) {
      if (listStyleTypes.hasOwnProperty(className)) {
        div.style.listStyleType = listStyleTypes[className];
      }
    });
  });