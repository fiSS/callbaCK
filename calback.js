function learnJS(lang, callback) {
        console.log('вывод инфо из основной функции ' +lang);
        callback();
}
learnJS('js', function() {
        console.log('вывод из Callback функции.')
})