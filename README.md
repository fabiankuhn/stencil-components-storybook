# Wordcloud

Demo: [https://fabiankuhn.github.io/stencil-components-storybook/](https://fabiankuhn.github.io/stencil-components-storybook/)

## Deployment
- Make sure `"repository": "..."` is set in `package.json`
- Log in local registry: `$ npm login --registry=https://npm.pkg.github.com --scope=@fabiankuhn`
- Username: Github username
- Password: Generate Token: [https://github.com/settings/tokens](https://github.com/settings/tokens)
- Choose "Read Registry" and "Write Registry"
- Build with `$ yarn build`
- Update version: `yarn version --new-version patch`
- Publish with `$ npm publish --@fabiankuhn:registry=https://npm.pkg.github.com/ --access public`


## Storybook
Initialize with `$ npx sb init` and select "Web Components"

### lit-html syntax
-  Text content: `<p>${...}</p>`
-  Attribute: `<p id="${...}"></p>`
-  Boolean attribute: `?disabled="${...}"`
-  Property: `.value="${...}"`
-  Event handler: `@event="${...}"`

Read more [https://lit-element.polymer-project.org/](https://lit-element.polymer-project.org/guide/templates#bind-properties-to-templated-elements)
