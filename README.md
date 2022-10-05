# Шпаргалка по установке Gulp с нуля.

Сборка позволяет:
- минифицировать `html`,
- копировать `img, png`,
- собирать `style.css` файл из scss, с использованием `@import`,
- запускать сервер,
- сделить за изменением `scss, html` файлов.

## Git

#### 1. Создание локального репозитория

В папке проекта:
```
$git init
$git status
$git add -A
$git commit -m "my first commit"
```

#### 2. Сорздание репозитория на GitHub
Зеленая кнопа New ->

Локально в папке:
```
$git remote add origin (тут SSH ключ скопированный из репозитория на гитхабе git@github.com:.../....git)
$git push -u origin master // делается 1 раз!!!
```

### Git подключен.

## Gulp

Локально в папке:
```
$npm init -y - генерация пустого проекта (со значениями по умолчанию)
$npm i gulp -D
```

В файле `package.json` прописываем:
```js
"type": "module",
...
"scripts": "start": gulp,
```

Создаем файл `gulpfile.js`

ЗАПУСК Gulp:
```
$npm start
```

Далее копируем из этого репозитория
`gulpfile.js`
`package.json`


