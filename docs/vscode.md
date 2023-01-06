<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Vscode extensions.](#vscode-extensions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Vscode extensions.

- `Auto Import`
- `Auto Rename Tag`
- `EditorConfig for VS Code`
- `ES7 React/Redux/GraphQL/React-Native snippets`
- `Eslint`
- `GitLens`
- `npm Intellisense`
- `Path Autocomplete`
- `Path Intellisense`
- `Prettier`
- `SCSS Everywhere`
- `SCSS intellisense`

`settings.json`

```json
{
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  },
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.endOfLine": "auto",
  "prettier.arrowParens": "avoid",
  "prettier.singleQuote": true,
  "security.workspace.trust.untrustedFiles": "open",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "css.lint.unknownAtRules": "ignore",
  "html-css-class-completion.includeGlobPattern": "**/*.{css,scss,jsx,html}",
  "html-css-class-completion.excludeGlobPattern": "{node_modules,doc,docs,.bundle,vendor,build,dist}/**",
  "path-autocomplete.pathMappings": {
    "public": "${folder}/public",
    "assets": "${folder}/src/assets",
    "atoms": ["${folder}/src/atoms", "${folder}/atoms"],
    "components": ["${folder}/src/components", "${folder}/components"],
    "containers": ["${folder}/src/containers", "${folder}/containers"],
    "hooks": ["${folder}/src/hooks", "${folder}/hooks"],
    "i18n": ["${folder}/src/i18n", "${folder}/i18n"],
    "pages": ["${folder}/src/pages", "${folder}/pages"],
    "styles": ["${folder}/src/styles", "${folder}/styles"],
    "utils": ["${folder}/src/utils", "${folder}/utils"]
  }
}
```
