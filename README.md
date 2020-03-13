# doc-vuepress-template
This repository is a template for creating documentation repositories. It contains starter files and configuration files. 

The files for this template are set up for a documentation-only repository. This means that the repository contains only the files necessary for documentation. This is different from a repository that contains code and documentation, where the doc is a subdirectory of the main repo (called a _subinstall_). To set up a subinstall, use the [doc-vuepress-subinstall](https://github.com/RedVentures/doc-vuepress-subinstall) template.



## Repo contents
* The .vuepress directory contains the guts VuePress requires to set up your static site. The main things to know are that you must:
  * Configure the project settings such as navigation, sidebar, and other settings in config.js. Refer to the [Configuration Reference](https://docs.rvapps.io/products/v1/nebula/config/config-ref.html) for more information.
  * Add your images to the public/upload directory. 
* The index.md file sets the landing page of the doc site. Refer to the [YAML Syntax reference](https://nebula.rvdocs.io/guides/overview.html#yaml-syntax) for more information. 
* package.json is configured to install the required version of VuePress and the latest version of Nebula (the theme). 
* Markdown files for content. Each file shows an example of each kind of documentation. For example, user-guide.md shows basic structure for the type of page you might find in a user guide and api-spec.md shows what an API spec should contain. You can change the names and contents of these files to suit your needs. Note that you don't have to keep your files in subdirectories. This repo uses that convention to keep things neat and tidy.

## Using this template
1. In Github, select **New** to create a repo. _Github opens the Create a new repository page._
2. Select **RedVentures/doc-vuepress-template** from the Repository template list.
3. Enter other necessary information and then select **Create repository**. _Github creates your repo with the contents of this one. It's magic._
4. Update your files as per usual.

## Deploying your documentation
Send a message to the #doc-support Slack channel for help getting your doc deployed.

## Running the doc locally
1. From the root, run `yarn install` and then `yarn start`.
2. In a browser, go to `http://localhost:<port>`.

## Additional documentation
* [Doc Operations and Standards Guide](https://doc.rvdocs.io)
* [VuePress](https://vuepress.vuejs.org/guide/)
* [Nebula](https://nebula.rvdocs.io)
* [doc-vuepress-subinstall](https://github.com/RedVentures/doc-vuepress-subinstall)
  

## Contact
Send a message to the #doc-support Slack channel for help setting up your doc.
