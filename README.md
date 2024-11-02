# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$env:USE_SSH = true
npm run deploy
```

Not using SSH:

```
$env:GIT_USER = <Your GitHub username>
npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Contributing to the Documentation

This documentation is open source and hosted on GitHub. If you find any errors, malfunctions, broken links or missing information, please report them [here](https://github.com/niknal357/sm-docs/issues). If you yourself want to contribute to this documentation, you can do so [here](https://github.com/niknal357/sm-docs). I will now explain how to do so.

#### How to contribute

1. Fork the repository
2. Clone your forked repository
3. Make your changes
4. Commit and push your changes
5. Create a pull request

#### General guidelines

- Try to keep the style, formatting, and naming consistent with the rest of the documentation.
- Create issues for any gaps in documentation or missing information that you do not have time to fix yourself.

#### Getting the changes merged

- Once you have created your pull request, ping me (niknal) on Discord, you can find me on the [Scrap Mechanic Modding Server](https://discord.gg/SVEFyus).
- I will review your changes and merge them if they are good, I will then deploy the changes to the website.
