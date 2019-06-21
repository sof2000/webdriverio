Contributing
============

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
