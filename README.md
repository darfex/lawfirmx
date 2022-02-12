# BP Checker
A Laravel plus vue application to profile clients

## Tools

* Laravel
* Vue
* Bootstrap

## Setup and Installation

The project requires the following dependencies to run

* PHP 7+
* Composer
* Node 14+
* yarn

Run the following to get started
```sh
git clone https://github.com/darfex/lawfirmx.git

cd lawfirmx

composer install

yarn or npm i

yarn run watch
```

Create .env file

`cp .env.example .env`

Fill in your database credentials in the .env file
```
DB_DATABASE
DB_USERNAME
DB_PASSWORD
```

Fill in maittrap credentials in the .env file
```
MAIL_MAILER
MAIL_HOST
MAIL_PORT
MAIL_USERNAME
MAIL_PASSWORD
MAIL_ENCRYPTION
```

Run the database migration

`php artisan migrate`


Start your server

`php artisan serve`

Start the queue worker

`php artisan queue:work`