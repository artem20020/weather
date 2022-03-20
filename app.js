//Получаем прогноз в массив data
fetch('http://api.openweathermap.org/data/2.5/weather?id=698740&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city1').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast1').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc1').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon1').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=709930&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city2').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast2').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc2').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=706483&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city3').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast3').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc3').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=702550&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city4').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast4').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc4').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon4').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city5').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast5').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc5').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon5').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=687700&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city6').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast6').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc6').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon6').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=3117735&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
        //добавляем название города
        document.querySelector('.weather__city7').textContent = data.name;
        //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
        document.querySelector('.weather__forecast7').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        //Добавляем описание погоды
        document.querySelector('.weather__desc7').textContent = data.weather[0]['description'];
        //Добавляем иконку погоды
        document.querySelector('.weather__icon7').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            //Обрабатываем ошибки
        });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=2950159&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
        //добавляем название города
        document.querySelector('.weather__city8').textContent = data.name;
        //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
        document.querySelector('.weather__forecast8').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        //Добавляем описание погоды
        document.querySelector('.weather__desc8').textContent = data.weather[0]['description'];
        //Добавляем иконку погоды
        document.querySelector('.weather__icon8').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            //Обрабатываем ошибки
        });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=6455259&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
        //добавляем название города
        document.querySelector('.weather__city9').textContent = data.name;
        //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
        document.querySelector('.weather__forecast9').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        //Добавляем описание погоды
        document.querySelector('.weather__desc9').textContent = data.weather[0]['description'];
        //Добавляем иконку погоды
        document.querySelector('.weather__icon9').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            //Обрабатываем ошибки
        });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=2761369&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
        //добавляем название города
        document.querySelector('.weather__city10').textContent = data.name;
        //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
        document.querySelector('.weather__forecast10').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        //Добавляем описание погоды
        document.querySelector('.weather__desc10').textContent = data.weather[0]['description'];
        //Добавляем иконку погоды
        document.querySelector('.weather__icon10').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            //Обрабатываем ошибки
        });
    
    fetch('http://api.openweathermap.org/data/2.5/weather?id=3169070&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
        //добавляем название города
        document.querySelector('.weather__city11').textContent = data.name;
        //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
        document.querySelector('.weather__forecast11').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        //Добавляем описание погоды
        document.querySelector('.weather__desc11').textContent = data.weather[0]['description'];
        //Добавляем иконку погоды
        document.querySelector('.weather__icon11').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            //Обрабатываем ошибки
        });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=3067696&lang=ru&appid=da43f579966c655f6cd49823daa4c4ef').then(function (resp) {return resp.json() }).then(function (data) {
        //добавляем название города
        document.querySelector('.weather__city12').textContent = data.name;
        //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
        document.querySelector('.weather__forecast12').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        //Добавляем описание погоды
        document.querySelector('.weather__desc12').textContent = data.weather[0]['description'];
        //Добавляем иконку погоды
        document.querySelector('.weather__icon12').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            //Обрабатываем ошибки
        });


 
     