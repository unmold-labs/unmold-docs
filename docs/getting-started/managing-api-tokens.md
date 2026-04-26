# Managing API Tokens

API tokens are used to authenticate with Unmold from the CLI and CI/CD systems.

## Create a Token

1. Sign in to the Unmold console
2. Go to **Settings → API Tokens**
3. Click **Create New Token**
4. Enter:
   * **Name** (required)
   * **Description** (optional)
   * **Expiration Date** (required, defaults to 90 days from creation)
5. Click **Create**

A token will be generated and displayed **only once**. Copy and store it securely.

## Token Status and Expiration

In **Settings -> API Tokens**, each token now shows:

* **Created Date**
* **Last Used** (shows `Never` until the token is used)
* **Expiration**

If a token is already expired, it is marked with a red **Expired** label.

## Store Tokens Securely

Treat API tokens like passwords:

* Store them in a **password manager** or **secrets manager**
* Do not commit tokens to source control
* Use environment variables for local development
* Use your CI platform’s **secret storage** for pipelines

## Delete a Token

To revoke access:

1. Navigate to **Settings → API Tokens**
2. Locate the token
3. Click **Delete**

Deletion takes effect immediately and cannot be undone.

## Using Tokens

API tokens are used to authenticate:

* **CLI workflows** (local development)
* **CI/CD pipelines** (automated publishing)

You will configure the token in the next step when publishing your first module.

## Next Step

Continue to [Publish your first module](./publishing-a-module) to use your token in practice.
