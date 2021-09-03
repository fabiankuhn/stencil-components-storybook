# Wordcloud

## Deployment
- Log in local registry: `$ yarn login --registry=https://npm.pkg.github.com --scope=@fabiankuhn`
- Username: Github username
- Password: Generate Token: [https://github.com/settings/tokens](https://github.com/settings/tokens)
- Choose "Read Registry" and "Write Registry"
- Build with `$yarn build`
- Publish with `$ npm publish`


## Storybook
Initialize with `$ npx sb init` and select "Web Components"

### lit-html syntax
-  Text content: <p>${...}</p>
-  Attribute: <p id="${...}"></p>
-  Boolean attribute: ?disabled="${...}"
-  Property: .value="${...}"
-  Event handler: @event="${...}"

Read more [https://lit-element.polymer-project.org/](https://lit-element.polymer-project.org/guide/templates#bind-properties-to-templated-elements)
