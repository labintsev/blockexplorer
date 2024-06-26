# Ethereum Block Explorer

Проект посвящен разработке собственного обозревателя блоков сети Ethereum средствами библиотеки `ethers.js` и `React`.
Разработанное приложение позволит читать состояние основной сети Ethereum, а также совершать транзакции в тестовой сети. 
С помощью обозревателя блоков можно получить следующую информацию:
* количество блоков в блокчейне
* содержимое транзакций в блоке
* аккаунты и количество монет в транзакции
* и многое другое. 

Наиболее популярный обозреватель блоков сети Ethereum - [Etherscan](https://etherscan.io/). 
Проверьте как он работает, это поможет при самостоятельной реализации функций собственного обозревателя блоков. 
Вы можете написать UI для любой функции, которая имеется в библиотеке `ethers.js`. 

## Установка

Клонируйте этот репозиторий, перейдите в рабочий каталог и установите зависимости командой `npm install`.
Для фронтенда традиционно используется библиотека `React`. 

## 1. Создайте ключ провайдера

Можно использовать любой популярный провайдер, например [Alchemy](https://docs.alchemy.com/reference/api-overview). 
Для JSON-RPC запросов к сети Ethereum используется библиотека `ethers.js` которая позволяет работать с любым популярным провайдером Web3. 
Примеры запросов приведены ниже. 

Количество блоков в блокчейне: 
```js
const blockNumber = await provider.getBlockNumber();
```

Чтение транзакций в блоке:
```js
const transcations = await provider.getBlockWithTransactions(SOME_BLOCK_NUMBER)
```
Множество примеров можно найти в документации [ethers.js](https://docs.ethers.org/v5/).

У провайдера `alchemy` есть собственная библиотека, которая упрощает ряд операций с ним. 
Например, создание провайдера выглядит следующим образом: 
```js
const ethersProvider = await alchemy.config.getProvider();
```

## 2. Добавьте API ключ в переменную среды проекта

Для хранения переменных среды создайте пустой файл  `.env` в корневом каталоге проекта.
В `.env` файле замените значение `YOUR_ALCHEMY_API_KEY` на свой уникальный ключ.

```sh
REACT_APP_ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
```
Не изменяйте название самой переменной и не удаляйте префикс `REACT_APP_`.

**⚠️ Важно!**

> Никогда не включайте `.env` файл в систему контроля версий.  
> Переменные среды всегда должны храниться в секрете. 

## 3. Запустите веб приложение

Запустите приложение в режиме разработчика командой `npm start`

Откройте [http://localhost:3000](http://localhost:3000) в браузере, если этого не произошло автоматически.
При внесении изменений в исходные файлы веб сервер должен перезапускать приложение.  
Базовый функционал в файле `src/App.js` - это вывод текущего номера блока в сети Ethereum Mainnet. 
Это не много, но дает базу для дальнейших улучшений. 

## 4. Добавьте функцию Wallet

Можете использовать компонент `Wallet` из проекта `ecdsa-node`. 

## 5. Добавьте функцию SendTransaction

Можете использовать компонент `Transfer` из проекта `ecdsa-node`. 

## 6. Добавьте функцию обозревателя блоков

- Вывести список из 5 последних блоков. 
- По клику на блоке вывести его содержимое - заголовки транзакций. 
- По клику на заголовке транзакции вывести детали транзакции.
