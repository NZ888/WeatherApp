# WeatherApp

## Overview
WeatherApp is a responsive web application designed to provide real-time weather updates based on the user's location. It fetches weather data using external APIs and displays temperature, humidity, wind speed, and more in an intuitive user interface. The app includes dynamic date and time updates and adjusts its layout for various screen sizes using CSS media queries.

WeatherApp — это адаптивное веб-приложение, предоставляющее актуальную информацию о погоде в зависимости от местоположения пользователя. Оно получает данные о погоде с помощью внешних API и отображает температуру, влажность, скорость ветра и другую информацию в удобном интерфейсе. Приложение выполняет динамичное обновление времени и даты и может адаптироваться для различных экранов с помощью CSS медиа-запросов.

WeatherApp to responsywna aplikacja internetowa zaprojektowana w celu dostarczania aktualnych informacji o pogodzie w oparciu o lokalizację użytkownika. Pobiera dane pogodowe za pomocą zewnętrznych interfejsów API i wyświetla temperaturę, wilgotność, prędkość wiatru i inne w intuicyjnym interfejsie użytkownika. Aplikacja zawiera dynamiczne aktualizacje daty i godziny oraz dostosowuje układ do różnych rozmiarów ekranów za pomocą zapytań CSS media.

## Features
- Displays real-time weather data, including:
  - Current temperature
  - Feels-like temperature
  - Humidity
  - Cloud coverage
  - Wind speed
- Automatic location detection via IP address
- Dynamic time and date updates
- Responsive design for desktop and mobile devices

Преимущества:
- Отображение актуальных данных о погоде, включая:
  - Текущая температура
  - Температура "по ощущениям"
  - Влажность
  - Облачность
  - Скорость ветра
- Автоматическое определение местоположения через IP-адрес
- Динамическое обновление времени и даты
- Адаптивный дизайн для настольных и мобильных устройств

Funkcje:
- Wyświetlanie aktualnych danych pogodowych, w tym:
  - Aktualna temperatura
  - Temperatura odczuwalna
  - Wilgotność
  - Zachmurzenie
  - Prędkość wiatru
- Automatyczne wykrywanie lokalizacji przez adres IP
- Dynamiczne aktualizacje czasu i daty
- Responsywny projekt dla komputerów i urządzeń mobilnych

## File Structure
```
WEATHERAPP
├── assets
│   ├── icons
│   │   ├── cloudy.png
│   │   ├── humadity.png
│   │   ├── temp-max.png
│   │   ├── temp-min.png
│   │   └── wind.png
│   ├── images
│       ├── bg-weather-rain.png
│       ├── bg-weather-thunder.png
│       ├── bg-weather.png
│       └── Cloudy.png
├── scripts
│   ├── api.js
│   └── app.js
├── styles
│   ├── main.css
│   └── reset.css
└── index.html
```

## Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd WEATHERAPP
   ```

2. **Open the Project:**
   Open `index.html` in any modern browser to run the app locally.

3. **Dependencies:**
   The app relies on:
   - **Weather API** for fetching weather data. Replace the API key in `api.js` with your own.
   - Internet access for external resources such as Google Fonts.

Установка:
1. **Клонировать репозиторий:**
   ```bash
   git clone <repository-url>
   cd WEATHERAPP
   ```

2. **Открыть проект:**
   Откройте `index.html` в любом современном браузере для локального запуска приложения.

3. **Зависимости:**
   Приложение зависит от:
   - **Weather API** для получения данных о погоде. Замените API-ключ в `api.js` на свой собственный.
   - Доступа к интернету для внешних ресурсов, таких как Google Fonts.

Konfiguracja:
1. **Sklonuj repozytorium:**
   ```bash
   git clone <repository-url>
   cd WEATHERAPP
   ```

2. **Otwórz projekt:**
   Otwórz `index.html` w dowolnej nowoczesnej przeglądarce, aby uruchomić aplikację lokalnie.

3. **Zależności:**
   Aplikacja korzysta z:
   - **Weather API** do pobierania danych pogodowych. Zastąp klucz API w pliku `api.js` własnym.
   - Dostępu do internetu dla zasobów zewnętrznych, takich jak Google Fonts.

## File Descriptions

### `index.html`
- The main HTML file for the app.
- Includes:
  - Weather display components
  - A sidebar for additional weather details
  - References to the CSS and JavaScript files

`index.html` является основным HTML-файлом приложения, включающим компоненты отображения погоды, боковую панель для дополнительных деталей и ссылки на CSS и JavaScript файлы.

Plik `index.html` jest głównym plikiem HTML aplikacji, zawierającym komponenty wyświetlania pogody, pasek boczny z dodatkowymi szczegółami oraz odwołania do plików CSS i JavaScript.

### `reset.css`
- Provides a consistent baseline for styles by resetting default browser settings.

`reset.css` предоставляет единообразную базу для стилей, сбрасывая стандартные настройки браузера.

Plik `reset.css` zapewnia spójną bazę stylów poprzez zresetowanie domyślnych ustawień przeglądarki.

### `main.css`
- Contains the core styles for layout, colors, fonts, and responsiveness.

`main.css` содержит основные стили для макета, цветов, шрифтов и адаптивности.

Plik `main.css` zawiera główne style dla układu, kolorów, czcionek i responsywności.

### `api.js`
- Handles fetching user location and weather data via external APIs.
  - `getUserLocation`: Determines the user’s city based on their IP address.
  - `FetchWeatherInformation`: Retrieves weather data from the Weather API.

`api.js` отвечает за получение данных о местоположении пользователя и погоде через внешние API.
  - `getUserLocation`: Определяет город пользователя на основе их IP-адреса.
  - `FetchWeatherInformation`: Получает данные о погоде через Weather API.

Plik `api.js` obsługuje pobieranie danych o lokalizacji użytkownika i pogodzie za pomocą zewnętrznych API.
  - `getUserLocation`: Określa miasto użytkownika na podstawie jego adresu IP.
  - `FetchWeatherInformation`: Pobiera dane pogodowe z Weather API.

### `app.js`
- Contains the main app logic:
  - Fetches and displays weather data dynamically.
  - Updates date and time in real-time.

`app.js` содержит основную логику приложения:
  - Динамически получает и отображает данные о погоде.
  - Обновляет дату и время в реальном времени.

Plik `app.js` zawiera główną logikę aplikacji:
  - Dynamicznie pobiera i wyświetla dane pogodowe.
  - Aktualizuje datę i godzinę w czasie rzeczywistym.

## How It Works
1. On page load, the app fetches the user's location using their IP address.
2. The app sends the location to the Weather API to fetch real-time weather data.
3. The data is displayed on the page, including the current temperature, humidity, and other details.
4. The date and time update dynamically every second.

Как это работает:
1. При загрузке страницы приложение получает местоположение пользователя через его IP-адрес.
2. Затем местоположение отправляется в Weather API для получения актуальных данных о погоде.
3. Данные отображаются на странице, включая текущую температуру, влажность и другие показатели.
4. Дата и время обновляются динамически каждую секунду.

Jak to działa:
1. Po załadowaniu strony aplikacja pobiera lokalizację użytkownika na podstawie jego adresu IP.
2. Lokalizacja jest wysyłana do Weather API w celu pobrania aktualnych danych pogodowych.
3. Dane są wyświetlane na stronie, w tym aktualna temperatura, wilgotność i inne