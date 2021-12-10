1. Инициализируем npm в проекте - создаем package.json
   npm init -y
2. Установим пакет nodemon как зависимость разработки (devDependencies)
   npm i nodemon -D
3. В файле package.json добавим "скрипты" для запуска index.js
   Скрипт start который запускает index.js с помощью node
   Скрипт start:dev который запускает index.js с помощью nodemon:
   "scripts": {
   "start": "node index.js",
   "start:dev": "nodemon index.js"
   },
4. Установим пакет yargs для работы с командной строкой
   npm i yargs
5. Установим пакет более популярный альтернативный commander
   для работы с командной строкой
   npm i commander
