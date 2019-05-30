
let idx = 0;
let img = document.querySelectorAll('.pic-min');

function slider(){
    for(let i = 0; i < img.length; i++){
        img[i].classList.remove('focused');
    }
    img[idx].classList.add('focused');

    document.getElementById('pic-max').src = img[idx].src; 
}

// управление с интерфейсных кнопок
document.querySelector('.prev').onclick = function(){ 
    slider();
    prev();
};

document.querySelector('.next').onclick = function(){
    next();
};

function next(){
    if(idx + 1 == img.length){
        idx = 0;
    }
    else{
        idx++;
    }
    slider();
};

function prev(){
    if(idx - 1 == -1){
        idx = img.length - 1;
    }
    else{
        idx--;
    }
    slider();
};

//управление с клавиатуры
window.addEventListener('keydown', function(e){
	if(e.keyCode == 37)
		prev();
	else if(e.keyCode == 39)
        next();
});

document.body.onclick = function (e) {
    
    //удаляем активный класс
    if(e.target.classList.contains('pic-min')){


        for(let i = 0; i < img.length; i++){
            img[i].classList.remove('focused');
        }

        //меняем картинку
        document.querySelector('#pic-max').src = e.target.src; 
        let parentDiv = e.target; 
        parentDiv.classList.add('focused');
    };

};