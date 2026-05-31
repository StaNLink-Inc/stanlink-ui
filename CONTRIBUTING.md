# Contributing to StaNLink UI

Thank you for contributing to the StaNLink Design System!

## Versioning and Publishing Workflow

This project uses [Changesets](https://github.com/changesets/changesets) to automate version bumps, changelog generation, and publishing to the NPM registry.

**Changesets doesn't guess the version bump—you tell it!**

Whenever you make a change that requires a new release, follow these steps before committing your work:

### 1. Make Your Changes
Make your code changes on your branch as you normally would.

### 2. Run Changeset
Before committing, run the following command in your terminal:
```bash
npx changeset
```

### 3. Answer the Prompts
The CLI will guide you through an interactive process:
- **Which packages need a version bump?** Select `@stanlink/ui`.
- **What kind of change is this?** Choose the appropriate semantic versioning bump:
  - `major`: Breaking changes that are not backwards compatible.
  - `minor`: New features or components that are backwards compatible.
  - `patch`: Bug fixes or minor adjustments that are backwards compatible.
- **Summary**: Provide a short, meaningful description of your change (similar to a commit message). This summary will be automatically added to the `CHANGELOG.md`.

### 4. Commit the Changeset
Running the command will generate a small markdown file in the `.changeset/` directory. **You must commit this file** along with your code changes:

```bash
git add .
git commit -m "feat: add new button variant"
git push
```

### 5. Automated CI/CD Pipeline
Once your branch is merged into `master`, the automated pipeline takes over:

1. **Version Packages PR**: The CI reads all pending `.changeset/*.md` files, calculates the highest required version bump, updates the `package.json`, generates the changelog, and opens a "Version Packages" Pull Request.
2. **Release**: When the "Version Packages" PR is merged, the workflow automatically tags the commit and creates a GitHub Release.
3. **Publishing**: The GitHub Release triggers the final workflow, which securely publishes the new version to NPM (`@stanlink/ui`) using NPM Provenance.
