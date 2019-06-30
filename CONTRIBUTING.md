Contributing
============

Developing for this framework requires that you have the following applications / tools installed:

* Bash - Available for both Mac OS X and Windows
* [NodeJS](https://nodejs.org/en/download/current/) - Read the Operating System Specific Development Environment Setup Section below prior to 
downloading
* [NPM] - Read the Operating System Specific Development Environment Setup Section below prior to downloading, after adding new packages run 
"npm install" for verifying that npm doesn't have any issues.
* [Visual Studio Code](https://code.visualstudio.com/download) 
 * Following Extensions are Required Installs:
  * Beautify (publisher: HookyQR)
  * Code Spell Checker (publisher: Street Side Software)
  * Docker (publisher: Microsoft)
  * ESLint (publisher: Dirk Baeumer)
  * Git History (publisher: Don Jayamanne)
  * GitLens (publisher: Eric Amodio)
  * vscode-icons (publisher: VSCode Icons Team)
 * Following Extensions are Recommended Installs:
  * Rest Client (publisher: Huachao Mao)
  * XML Tools (publisher: Josh Johnson)
* Git with appropriate installation (if you plan to use source control system)


Webdriver-manager specific rules
-------------------------

 * JavaScript style should generally follow the [Google JS style guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
 * Wrap code at 100 chars.
 * Document public methods with jsdoc.
 * Be consistent with the code around you!

Commit Messages
---------------

Please write meaningful commit messages - they are used to generate the changelog, so the commit message should tell a user everything they need to know about a commit.

In summary, this style is

    <type>(<scope>): <subject>
    <BLANK LINE>
    <body>

Where `<type>` is one of [feat, fix, docs, refactor, test, chore, deps] and
`<scope>` is a quick descriptor of the location of the change, such as cli, clientSideScripts, element.

Testing your changes
--------------------

Test your changes on your machine by running `npm test` to run the test suite.
