# # Asteria Group LLC 2019 www.asteriag.com
# webdriverio
Framework for Automaton testing webdriverio and node.js(javascript)

# webdriverio-nodejs-javascript-jasmine

# Environment Setup

# Run TC from command line
1. Needs to navigate in root folder of project and run command:
./node_modules/.bin/wdio ./config/wdio.conf.local.js --spec ./tests/${folder}/${test-script.js}

# Run Test Suite from command line
1. Needs to navigate in root folder of project and run command:
./node_modules/.bin/wdio ./config/wdio.conf.local.js --suite ${suite-name}

# Run TC from spec-runner-local.sh file

1. User can run test script using shell script file 'spec-runner-local.sh'. User will be asked set of questions that allows dynamically configure wdio.config.local.js file.
   Needs to navigate in root folder of project and run command:
   ./spec-runner-local.sh
