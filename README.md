# YaTёrochka-WEB
<p align="center">
  <img src="https://raw.githubusercontent.com/Kseen715/imgs/main/favicon.ico" />
</p>

## Description
This is frontend part of YaTёrochka project. It's a web application written as a course work for the 3rd year of study at the university. 

The project is a web application for a fictional company that sells random goods. The application allows you to view the catalog of goods, view the history of orders, and also allows you to log in to your Admin account. The application is written using the React library.

## Usage
Docker-compose:
```
    version: '3'
    services:
      yaterochka-web:
        image: kseen/yaterochka-web:latest
        container_name: yaterochka-web
        ports:
          - 3000:3000
        restart: always
```

Manual installation:
```
    git clone https://github.com/Kseen715/yaterochka-web.git && cd yaterochka-web && npm install && npm start
```