function calculate() {
    var weight = parseInt(document.querySelector('#weight').value);
    document.querySelector('#weight-val').textContent = weight + ' kg';

    var height = parseInt(document.querySelector('#height').value);
    document.querySelector('#height-val').textContent = height + ' cm';
    var result = document.querySelector('#result');
    bmi = (weight / Math.pow((height/100), 2)).toFixed(1);
    result.textContent = bmi;

    if(bmi < 18.5){
        category = 'Underweight';
        result.style.color = '#ffc44d';
    }else if(bmi >= 18.5 && bmi <= 24.9){
        category = 'Normal Weight';
        result.style.color = '#0be881';
    }else if(bmi >= 25 && bmi <= 29.9){
        category = 'Overweight';
        result.style.color = '#ff884d';
    }else{
        category = 'Obese';
        result.style.color = '#ff5e57';
    }
    document.querySelector('#category').textContent = category;
}

var slider = document.getElementById("slider");
rangeslider.create(slider, {
  polyfill: false,  // opcional
  rangeClass: 'rangeslider',
  fillClass: 'rangeslider__fill',
  handleClass: 'rangeslider__handle',
  onSlide: function(position, value) {
    // acción personalizada aquí
  }
});