# Introduction 
Repository contains end-to-end tests for GSK Materials library with written in [Cypress.io](https://www.cypress.io/) and [cucumber](https://cucumber.io/) frameworks

# Getting Started
1. Installation process

```
npm ci
```

3. Software dependencies

please use latest stable version of Node.js:

```
nvm use stable
```

latest stable check on version v17.4.0


# Build and Test

## Supported environments

staging, live

## Supported devices viewports

mobile, tablet, desktop

### Development npm tasks

In order to run specific test you need to open cypress console with appropriate config file via npm:

```
cypress open --env configFile={environment},device={device},TAGS='@{environment} and @{device}'
```

for example to run cypress console for preprod run and desktop viewports: 

```
cypress open --env configFile=preprod,device=desktop,TAGS='@regression and @desktop'
```

### BrowserStack

In order to run tests with junit reporter run on browserstack:

```
export browserstackuser={your browserstack user}
export browserstackkey={your browserstack password}
npm run ci -- --env configFile={environment},device={device},TAGS='@{environment} and @{device}'
```

for example to run cypress tests for preprod run with junit reporter on browserstack:

```
npm run ci -- --env configFile=preprod,device=desktop,TAGS='@preprod and @desktop'
```

### Troubleshooting

#### Problems with proxy 

```
// execute to set up no proxy setting for cypress 

export NO_PROXY=*
```
