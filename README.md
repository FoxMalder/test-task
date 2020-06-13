# test-task

Используя api сервиса tvmaze.com необходимо построить систему поиска сериалов.
Также требуется сделать роутинг и переходы на страницы найденных сериалов.

Требования:

1. Для работы с api в репозитории будет находится фаил src/api.js с готовыми функциями для поиска и
получения сериала по id.
2. Для каждого сериала url страницы должен выглядеть как /shows/:id где id — id сериала с сайта
tvmaze.com.
3. Выдача результатов поиска должна содержать картинки, краткое содержание и ссылку на страницу
сериала.

[Демо](https://foxmalder.github.io/test-task/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
