# Lorro todo web app

## License
For details, see [LICENSE.md](https://github.com/kacperpap/todo-web-app/edit/main/LICENSE.md)

## Description

The Todo Web App was developed as a final project for the Internet Engineering course. *It is an expanded continuation of a sample project presented by the instructor during practical classes*. The main objective of the course was to familiarize students with `TypeScript`, with a focus on learning good coding patterns with type checking capabilities. 

The project also provided an opportunity to work with `React`, a popular component library, and `Mantine`, a component library for creating modern user interfaces. Additionally, the `Nest` framework was used for backend development. This comprehensive project allowed for a hands-on experience with these technologies, contributing to a well-rounded understanding of modern web development practices.

The application allows user login and registration using `JWT` tokens for authorization and authentication. This ensures the statelessness of the application, in line with the principles of `RestAPI`. The application has a `Single Page Application` (SPA) architecture. It allows adding, deleting, and editing task groups and individual tasks in the main application window.

## Used main technologies

- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" /> [TypeScript](https://www.typescriptlang.org/)
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/> [React](https://react.dev/)
- <img src="https://mantine.dev/favicon.ico" alt="mantine" width="40" height="40"/> [Mantine](https://mantine.dev/)
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/> [NestJS](https://nestjs.com/)
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg" alt="prisma" width="40" height="40"/> [Prisma](https://www.prisma.io/)
- <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/> [SQLite](https://www.sqlite.org/index.html)
- <img src="https://jwt.io/img/pic_logo.svg" alt="jwt" width="40" height="40"/> [JWT](https://jwt.io/)


## Instalation

To install:

**1.** Clone project

**2.** Separately, in backend and fronted directiory opened in terminal, install all dependecies used for this project by typing `npm install`

**3.** Select the `React` script from the predefined ones that best suits your needs, and run the command in the terminal
```javascript
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
```

**4.** Similarily, choose the `Nest` script that best fits your needs
```javascript
    "build": "nest build",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug 127.0.0.1:9339 --watch",
    "start:prod": "node dist/main"
```

**5.** In the backend directory opend in the console, create `Prisma` migrations, that will create your database: `npm run db:update`
```javascript
  "db:update": "prisma migrate deploy && prisma generate"
```

## Features

### 1. Greeting page, navigates to login/register page or GitHub repository

![1](https://github.com/kacperpap/todo-web-app/assets/64956354/c69aacf1-0fe5-4328-8b70-88a568ccc162)

### 2. Login/ register page

<p align="center">
<img src="https://github.com/kacperpap/todo-web-app/assets/64956354/37d56441-fd0d-4fa4-8b5c-a0a8d9e3fba2"/>
</p>

### 3. Main page, the left and top bar enables to navigate over the app

![3](https://github.com/kacperpap/todo-web-app/assets/64956354/2de7bb71-9641-4750-aabe-f6d0435243e1)

### 4. Formulae to add todo to existing group, enables to add predefined categories to every todo

![4](https://github.com/kacperpap/todo-web-app/assets/64956354/9cad5e43-e6f9-4fe7-8cd0-c69360155b35)

### 5. Group todos are users groups of tasks, panel enables to navigate and/or delete groups 

![5](https://github.com/kacperpap/todo-web-app/assets/64956354/a2aba00c-3da2-4498-9d5f-2be9da711694)

### 6. Profile page, shows stats of done and undone tasks 

![6](https://github.com/kacperpap/todo-web-app/assets/64956354/010a0d65-1a6b-4e68-a76c-4ab0d5233316)

### 7. Individual task options box 

![7](https://github.com/kacperpap/todo-web-app/assets/64956354/bf967bca-a74b-4376-9cae-d685b3ab677b)

### 8. Todo group options box

![8](https://github.com/kacperpap/todo-web-app/assets/64956354/408ba52f-237b-4705-8944-e7236eb604f6)

### 9. Notifications, shows messages and informations about user's action

![9](https://github.com/kacperpap/todo-web-app/assets/64956354/f32f921c-216c-4c5b-a9fb-7f0c1295c7d5)



