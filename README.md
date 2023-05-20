# FFTCG Collector

## Project Overview
FFTCG card collecting web application utilizing Rails and React.
* Frontend: React, React Router v6, Material UI
* Backend: Ruby on Rails, Active Record, Active Storage, PostgreSQL

User Stories
* General user can view all expansion and cards associated with each expansion
* General user can view all cards
* General user can create and delete a account
* General user can update all account information
* General user can login and logout via sessions
* General user can add and delete cards from their collection
* General user can view their collection
* General user can view the percentage of each collection collected

Admin User Stories
* Admin user can delete users from the database
* Admin user can create and remove an expansion
* Admin user can create and remove a card
* Admin user can update a card and card variants

## Project Preview

### Home Page
![Home](https://imgur.com/iBKoUVz.png)

## Database Overview
Database is setup to use the following seed data:
* 6  Default Cart Variant Types

## Database Relations
Coming Soon

## Routes

### Cards - CRUD: Create, Read, Update, Delete
**INDEX** /cards \
**SHOW** /cards/:serial \
**CREATE** /cards (Admin Only) \
**UPDATE** /cards/:serial (Admin Only) \
**DESTROY** /cards/:id (Admin Only)
### Expansions - CRUD: Create, Read, Delete
**INDEX** /expansions \
**SHOW** /expansions/:name \
**CREATE** /expansions (Admin Only) \
**DESTROY** /expansions/:id (Admin Only)
### Users - CRUD: Create, Update, Delete
**CREATE** /users \
**UPDATE** /users/:id \
**DESTROY** /users/:id
### Users - Custom Routes
**GET** /all-users (Admin Only) \
**SHOW** /account \
**PATCH** /change-password \
**DELETE** /admin/users/:id (Admin Only)
### Collections - Custom Routes
**INDEX** /collections \
**GET** /collection-stats \
**POST** /update-collection
### Sessions - Custom Routes
**POST** /login \
**DELETE** /logout

## Attributions

Information presented on this web application about the Final Fantasy Trading Card Game, including FINAL FANTASY, SQUARE ENIX, the SQUARE ENIX logo, images, and text, are registered trademarks of Square Enix Holdings Co, Ltd. FFTCG Collector is not affiliated with Square Enix Holdings Co, Ltd.