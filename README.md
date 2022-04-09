# myGulp
Шпаргалка по созданию Gulp

``1. Git``
- Создание локального репозитория.

В папке:
$git init
$git status
$git add -A
$git commit -m "me first commit"

- Сорздание репозитория на GitHub
Зеленая кнопа New ->

Локально в папке:
$git remote add origin (pltcm SSH ключ скопированный из репозитория на гитхабе git@github.com:.../....git)
$git push -u origin master - делается 1 раз!!!

Git подключен.

``2. Gulp``
Локально в папке:
$npm init -y -
$npm i gulp -D

В файле package.json прописываем:
"type": "module",
...
"scripts": "start": gulp,


Создаем файл gulpfile.js

$npm start - ЗАПУСК Gulp.

Далее копируем gulpfile.js (из этого репозитория) и в командной строке набираем команды:
- $ npm i -D gulp-htmlmin // плагин сжатия разметки
- $ npm i -D browser-sync // запуск локального сервера и синхронизация браузера
- $ npm i -D gulp-plumber // перехватчик ошибок
- $ npm i -D del

Проверка ошибок. (Гужно скопировать файлы .editorconfig и .stylelintrc)
$ npm install --save-dev stylelint
$ npm install --save-dev stylelint-config-standard-scss

$ npm i -D gulp-dart-sass

