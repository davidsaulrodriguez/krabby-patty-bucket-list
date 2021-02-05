# Krabby Patty Bucket List
A very simple one page application that lets you add, update and delete Krabby Patties from your Krabby Patty Bucket List!

<span align="center">

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/krabby-patty-bucket-list)](https://github.com/davidsaulrodriguez/krabby-patty-bucket-list/issues)
[![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/krabby-patty-bucket-list)](https://github.com/davidsaulrodriguez/krabby-patty-bucket-list/network)
[![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/krabby-patty-bucket-list)](https://github.com/davidsaulrodriguez/krabby-patty-bucket-list/stargazers)
[![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/krabby-patty-bucket-list)](https://github.com/davidsaulrodriguez/krabby-patty-bucket-list)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/krabby-patty-bucket-list/latest/main)
![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/krabby-patty-bucket-list)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/krabby-patty-bucket-list)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_krabby-patty-bucket-list&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_krabby-patty-bucket-list)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_krabby-patty-bucket-list&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_krabby-patty-bucket-list)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_krabby-patty-bucket-list&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_krabby-patty-bucket-list)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_krabby-patty-bucket-list&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_krabby-patty-bucket-list)

</span>

## Table of Contents
 - [Description](#description)
 - [Screenshots](#screenshots)
 - [Dependencies](#dependdencies)
 - [Installation](#installation)
 - [Configuration](#configuration)
 - [Usage](#usage)
 - [Supported Versions](#supported-versions)
 - [Contributing](#contributing)
 - [Bugs and Issues](#bugs-and-issues)
 - [License](#license)

## Description

**Krabby Patty Bucket List** is a simple web app for adding and keeping track of your favorite Krabby Patties using a MySQL database.

You can add them to your list and once you've tried or _devoured_ the patty, it will move over to your devourded list. You can then choose to keep them on the devoured list or delete them from your devourded list.

## Screenshots

**Coming Soon**

## Dependencies

**Project Dependencies**
 - "bootstrap": ^4.6.0
 - "del": ^6.0.0
 - "dotenv": ^8.2.0
 - "express": ^4.17.1
 - "express-handlebars": ^5.2.0
 - "gulp": ^4.0.2
 - "gulp-autoprefixer": ^7.0.1
 - "gulp-live-server": 0.0.31
 - "gulp-minify": ^3.1.0
 - "gulp-rename": ^2.0.0
 - "gulp-sass": ^4.1.0
 - "gulp-sourcemaps": ^3.0.0
 - "jquery": ^3.5.1
 - "mysql": ^2.18.1
 - "mysql-import": ^5.0.20
 - "popper.js": ^1.16.1

 **Development Dependencies**

 - "nodemon": ^2.0.7

## Installation

**Installation Requirements**

You will need [NodeJS][nodejs] installed for use with this project.

You will also need the latest version of [MySQL][mysql] or [MariaDB][mariadb] installed locally on your machine.

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/krabby-patty-bucket-list.git
cd krabby-patty-bucket-list/
```

**Install**

Now install the required dependencies with npm.

```shell
npm install
```

## Configuration

To configure this application for use, you should create a `.env` file with your database information. For convience, a sample enviroment variable file can be found in the root directory with the name of: `.env.example`.

## Usage

Before using this application you should create the **Krabby Patty Bucket List** database. You can do this by running:

```shell
npm run createDB
```

After creating the database with `npm run createDB` you can start the **Krabby Patty Bucket List** by running:

```shell
npm run start
```

**Optional**: If you would like to prepopulate the **Krabby Patty Bucket List** database with sample data to test this management system, you should run:

```shell
npm run prepopulate
```

## Supported Versions

Below is a list of the currently supported versions of this software.

> Note: This project is ephemeral and will not actually be supported at all. This is simply a homework assignment for my Coding Boot Camp class. Hence the week long support date.

| Release | Status            | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life |
| :-----: | :----------------: | :-------------: | :------------------: | :--------------------: | :-: |
| develop  | Unstable | - | - | - | - |
| v1  | :heavy_check_mark: | 2021-02-09 | - | - | 2022-02-16 |

You can view the Status Key Map and software support model [here][support].

## Contributing

Contributions are more than welcome! If you improve on this project, please feel free to share it by submitting a Pull Request.

Before contributing, be sure to check out the [CONTRIBUTING][contrib] and [Branching Model][branching] docs.

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

 This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/krabby-patty-bucket-list/archive/main.zip
[mysql]: https://www.mysql.com/
[mariadb]: https://mariadb.org/
[nodejs]: https://nodejs.com
[support]: ./SUPPORTED_VERSIONS.md
[contrib]: ./CONTRIBUTING.md
[branching]: ./docs/Branching_Model.md
[issues]: https://github.com/davidsaulrodriguez/krabby-patty-bucket-list/issues
[license]: ./LICENSE