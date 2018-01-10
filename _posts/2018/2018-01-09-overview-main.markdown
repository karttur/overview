---
layout: post
title: Karttur overview
modified: '2018-01-09 T18:17:25.000Z'
categories: overview
excerpt: "Overview of Karttur´s site for blogs, articles and manuals"
tags:
  - Blog setup
  - IDE setup
  - DB setup
  - GIS installations
  - macOS
image:
  feature: troprunoffmap.png
  credit: Tropical runoff (Thomas Gumbricht, Karttur AB)
date: '2018-01-09 11:27'
comments: true
share: true
---
**Contents**
\- [Scaffolding](#scaffolding)
\- [Repositories](#repositories)
  \- [overview](#overview)
  \- [setup-blog](#setup-blog)
  \- [setup-github](#setup-github)
  \- [setup-theme-blog](#setup-theme-blog)
  \- [setup-ide](#setup-ide)
  \- [GIS](#gis)

This blog is an attempt to create an overview of the contents in the Karttur site. The site is organized in repositories, with each repository containing a blog, and some containing program codes. You can use the top menu to get to the different repositories, or the links in the descriptions of the content of each repository below.

## Scaffolding

```bash
karttur/
├── overview/
|    └── blog/
|        └──                          # empty
|    └── overview/
|        └── overview-main            # this page
├── setup-blog/
|    └── Set up blog tools            # tutorial on Jekyll and Atom
├── setup-github/
|    └── Set up GitHub                # tutorial on markdown and GitHub
├── setup-theme-blog/
|    └── blog/
|        └── hide-show-div            # Hide/show code with javascript
|    └── setup-blog/
|        ├── Set up Jekyll theme blog # Select, edit and publish Jekyll Theme
|        └── Theme Setup              # The So Simple Theme instructions
├── setup-ide/
|    └── blog/
|        └──                          # empty
|    └── ide-setup/     
|        ├── Install Anaconda         # Install Anaconda Python package on macOS
|        ├── Setup Eclipse \for PyDev  # Install Eclipse and set up with Anaconda
|        ├── Install PostgreSQL       # Install PostgreSQL and PostGIG on macOS
|        ├── Connect PostgreSQL       # psycopg2 connect PostgreSQL and Python  
|        └── PostgreSQL xml setup     # Setup db schema & tables using xml
├── GIS/                 
|    └── blog/
|        └──                          # empty
|    └── install-GIS/
|        └── GDAL, QGIS and GRASS     # Install GDAL, QGIS and GRASS on macOS
```
## Repositories

### overview

The overview repository only contains this page you are now reading.

### setup-blog

The repository Setup-blog contains a single [web-page](../../../setup-blog/) containing a manual on how that very page was created by using Jekyll and the default Theme minima. The page also introduces using the text editor Atom for editing markdown files. The GitHub repository contains the full code under the branch 'gh-pages'. It might be useful to follow the manual to set up your very first Jekyll blog.

Url links:
* [web-page](../../../setup-blog/)
* [GitHub](https://github.com/karttur/setup-blog/tree/gh-pages) (gh-pages only)

### setup-github

Also the repository Setup-github contains a single [web-page](../../../setup-github/), created using Jekyll, but without any template. The also includes a manual on how to publish a web site with blogs on GitHub.com using GitHub desktop.app. The GitHub repository contains the full code under the branch 'gh-pages'. It might be useful for learning a bit about markdown and publishing Jekyll generated web-pages on GitHub.

Url links:
* [web-page](../../../setup-github/)
* [GitHub](https://github.com/karttur/setup-github/tree/gh-pages) (gh-pages only)

### setup-theme-blog

After having tried out creating web-pages using Jekyll, learnt a bit about markdown and editing the markdown coding system in Atom, I selected a Jekyll Theme (So Simple). The repository setup-theme-blog contains my step-by-step manual on how I did it, and the original Theme Setup instruction by Michael Rose. The blog contains additional tweaking I have done to the So Simple Theme to make it fit my needs.

Url links:
* [web-page](../../../setup-theme-blog/)
* [GitHub](#) (gh-pages only)

### setup-ide

The core of the Karttur site is about map making and spatial data processing, especially using satellite images. The repository setup-ide (ide stands for Integrated Development Environment) covers the installations and setups needed to create the framework needed for the kind of map making that Karttur does. The [setup-ide](../../../setup-ide/) repository include instructions for installations and setup of:
Url links:

Url links:
* [web-page](../../../setup-ide/)
* [GitHub](#)

* [GIS](../../../setup-ide/ide-setup/install-GIS/) (Install GDAL, QGIS and GRASS)
* [Anaconda](../../../setup-ide/ide-setup/install-anaconda/) (Install Python Interpreter)
* [Eclipse](../../../setup-ide/ide-setup/install-eclipse/) (Install IDE for Python)
* [PostgreSQL](../../../setup-ide/ide-setup/install-postgres/) (Install PostgreSQL)
* [psycopg2](../../../setup-ide/ide-setup/connect-with-psycopg2/) (connect Python and Postgres)
* [db architecture](../../../setup-ide/ide-setup/setup-db/) (db schemas and tables from xml)
