# Module Publication

This page explains how module publication works in Unmold.

When you publish a module using the CLI, Unmold packages your code, uploads it to the registry, and creates a versioned release that can be consumed by OpenTofu.

## Publication Flow

Publishing a module follows these steps:

1. **Package the module**
   The CLI archives your working directory into a `.zip` file.
   If a `.gitignore` file is present, ignored files are excluded from the package.

2. **Upload to the registry**
   The package is uploaded and registered as a new module version.

3. **Create version metadata**
   An immutable version is created and stored in the registry.

4. **Process documentation**
   If a `README` file exists, it is extracted and displayed as module documentation in the console.

## Versioning and Immutability

* Each published version is **immutable**
* Once created, a version cannot be modified
* This ensures reproducibility across environments and CI/CD pipelines

## Overwriting a Version

By default, publishing a version that already exists will fail.

To overwrite an existing version, use:

```id="g7kq9s"
unmold module publish <module-name> <version> --overwrite
```

Use this option carefully, as it replaces the existing version in the registry.

## Packaging Behavior

* The module root directory is used as the package source
* `.gitignore` is respected for excluding files
* Ensure only necessary files are included (e.g., avoid local artifacts or secrets)

## Related Topics

* [Publish a module](../getting-started/publishing-a-module)
* [Module usage](./usage)
* [CLI reference: module publish](../cli/module/publish)
