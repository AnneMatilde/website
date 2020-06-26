# annematilde.no

_insert elevator pitch here_

## Quickstart

Step one, install all packages.

```shell
$> yarn
```

Step two, start your development server.

```shell
$> yarn dev
```

## Use `sx` prop on normal HTML elements

In order to use `sx` prop, as described in [theme-ui](https://theme-ui.com), you must add these two lines to the top of your file. This means, to use [theme.js](src/theme.js) on HTML elements, you'll have to add this.

```javascript
/** @jsx jsx */
import { jsx } from "theme-ui";
```

## Want prettier files?

Run this!

```shell
$> yarn lint
```
