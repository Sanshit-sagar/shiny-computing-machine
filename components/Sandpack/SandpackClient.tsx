import { SandpackClient } from "@codesandbox/sandpack-client"

const PACKAGE_JSON_CODE = JSON.stringify({
    title: "test",
    main: "index.js",
    dependencies: {
        uuid: "latest",
    },
}, null, 2);

const client = new SandpackClient("#preview", {
    files: {
        "/index.js": {
            code: `console.log(require('uuid'))`,
        },
        "/package.json": {
            code: PACKAGE_JSON_CODE,
        },
    },
});

client.updatePreview({
    files: {
        "/index.js": {
            code: `console.log('New Text!')`,
        },
    },
    entry: "/index.js",
    dependencies: {
        uuid: "latest",
    },
});