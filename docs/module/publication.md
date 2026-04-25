This section describes the module publication workflow in Unmold.

When a module is published via the CLI, Unmold packages the source code, uploads it to the registry, and creates an immutable, versioned artifact consumable by OpenTofu.

---

## Publication Flow

Publishing a module consists of the following steps:

1. **Package the module**
   The CLI archives the module’s working directory into a `.zip` file.
   If a `.gitignore` file is present, ignored files are excluded from the archive.

2. **Upload to the registry**
   The packaged artifact is uploaded and registered as a new module version.

3. **Create version metadata**
   An immutable version entry is created and stored in the registry.

4. **Process documentation**
   If a `README` file is present, it is extracted and rendered as module documentation in the console.

---

## Versioning

Unmold follows **semantic versioning** (`x.y.z`) as the recommended versioning scheme for Terraform and OpenTofu modules. This aligns with the module specification and is broadly supported across the ecosystem.

In addition, Unmold supports arbitrary version identifiers. Allowed characters include lowercase letters, numbers, and URL-safe symbols. The identifier `versions` is reserved.

This flexibility enables non-semver versioning strategies for pre-release or ephemeral environments, such as:

* Git commit SHAs
* Pull request identifiers

Modules published with non-semver versions must be consumed via the **HTTP source** in both Terraform and OpenTofu.

---

## Overwriting a Version

By default, published versions are immutable. Attempting to publish an existing version will result in an error. This guarantees reproducibility across environments and CI/CD pipelines.

For workflows requiring mutable versions, the CLI supports overwriting an existing version:

```
unmold module publish <module-name> <version> --overwrite
```

This flag is also supported in CI integrations.

> **Warning:** Overwriting replaces the existing artifact in the registry and is irreversible.

---

## Packaging Behavior

* The module root directory is used as the package source
* `.gitignore` rules are respected during packaging
* Only required files should be included (avoid local artifacts, credentials, or secrets)

---

## Related Topics

* Publish a module
* Module usage
* CLI reference: `module publish`
