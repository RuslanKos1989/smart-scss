const smartgrid = require('smart-grid');

const settings = {
        filename: '_smartgrid', // название файла с сгенерированной сеткой
        outputStyle: 'scss',    // выбор стиля препроцессора
        columns: 24,            // количество колонок
        offset: '10px',         // расстояние между колонками (смотреть в psd макете)
        container: {
        maxWidth: '1200px',     // ширина контейнера (смотреть в psd макете)
        fields: '30px'          // padding-left и padding-right, чтобы контент не прилипал к краям
        },
        breakpoints: { // задаем брекпоинты с любыми названиями и размерами
            lg: {
                width: '1200px',
                fields: '30px'
            },
            md: {
                width: '992px',
                fields: '15px'
            },
            sm: {
                width: '720px',
                fields: '15px'
            },
            xs: {
                width: '576px',
                fields: '10px'
            }
        },
        properties: [],
        oldSizeStyle: false,    // использование новых примесей size,если true то будет как в бутстрап через col-*
}

smartgrid('app/scss', settings);
