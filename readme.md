# disnet's TypeScript Template

Setting up a new TypeScript/JavaScript project is too hard. Here's my opinion of what a reasonable TypeScript template project looks like for writing a library (if you need a framework template you'll need to [look](https://github.com/facebook/create-react-app) [somewhere](https://github.com/sveltejs/template) else).

Run:

```sh
npx degit disnet/ts-template my-new-project
```

and then change:

- `name`, `description`, and `author`, in `package.json`
- `private` in `package.json` when ready to publish (prevents accidentally publishing early)
- `[name]` and `[year]` in `LICENSE.txt` (and potentially the entire thing if you want something other than MIT)

# Choices made

- [TypeScript](https://www.typescriptlang.org) with `strict` checking enabled
- [Babel](https://babeljs.io) to do the actual compiling
- [Eslint](https://eslint.org) to do the linting with mostly the `eslint:recommended` rules
- [Ava](https://github.com/avajs/ava) to do testing
- A [Prettier](https://prettier.io) config file if your editor is looking for one but not as an actual dependency

## Directory and file structure

- `src/` is where all your source files go
- `test/` is where all your test files go
- `dist/` is where all the built files go

It is assumed that the main entrypoint to your library is at `src/index.ts` so `package.json` points to the built file `dist/index.js` is the `main` script.

## npm scripts

The only npm script you need to actually use is `npm test`.

Note that importantly `npm t` does **not** run type checking or linting. Often, while trying to debug something you need to write code that violates "good" style 😬 or is even not type safe 😱.

This is fine.

If you're using any reasonable editor your sins have already been noted and underlined. Style and types are enforced when publishing since by then you've hopefully atoned.

## ES6 Modules

Sources are compiled to CommonJS modules because trying to publish a library that uses ES modules that can be either `require`d or `import`ed safely is just too [hard and complicated](https://nodejs.org/api/packages.html#packages_dual_package_hazard). So, cjs forever 😞.
