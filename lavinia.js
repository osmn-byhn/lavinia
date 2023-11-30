var elements = document.getElementsByClassName('text');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  var classList = element.classList;

  // 'text-' ile başlayan class'ı bul
  var textClass = Array.from(classList).find(c => c.startsWith('text-'));
  console.log(textClass);

  if (textClass) {
    console.log('var kral');
    
    // 'text-' ile başlayan class'ın renk değerini al ve elementin color özelliğini ayarla
    var suffix = textClass.split('-')[1]; // - den sonrasını al
    console.log(suffix);
    
    var colorValue = getComputedStyle(document.documentElement).getPropertyValue(`--${suffix}`);

    if ("<empty string>") {
        console.log("yakalandın");
        element.style.color = suffix;
    }
    else {
        element.style.color = colorValue;
    }
  }
  
}
