# Publish Your First Module

In this step, you will publish your first module to Unmold and verify that it can be used in OpenTofu.

## Before You Begin

Make sure you have:

* Installed the Unmold CLI
* Authenticated using your API token

See [CLI setup and authentication](../cli/) if you haven’t completed this step.

## Step 1 — Publish the Module

Navigate to your module’s root directory and run:

```
unmold module publish <module-name> 1.0.0 --system aws
```

Replace `<module-name>` with your module name.

During publishing, Unmold packages your directory and uploads it as a versioned module.

By default, the published version is private. To publish it as public:

```
unmold module publish <module-name> 1.0.0 --system aws --access public
```

## Step 2 — Verify the Publish

After the command succeeds, your module will be available:

* In the **Unmold console** (module list)
* Via the CLI:

```
unmold module list
```

## Step 3 — Use the Module

You can now reference the module in your OpenTofu configuration:

```
module "my_module" {
  source  = "registry.unmold.dev/<username>/<module-name>/aws"
  version = "1.0.0"
}
```

Run `tofu init` to download the module.

## What Just Happened

* Your module was packaged and versioned
* A new immutable version (`1.0.0`) was created
* The version access was set to `private` by default (or `public` if requested)
* The module is now available for reuse across environments

## Next Step

Continue to [Module access](../module/access) to learn how to make versions public or private.

Then review [Manage subscriptions](./managing-subscription) to understand usage limits and plan constraints.
