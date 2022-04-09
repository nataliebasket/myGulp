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


