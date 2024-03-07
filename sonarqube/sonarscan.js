const scanner = require('sonarqube-scanner')


scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "squ_7dbba0b52bc389c22f205094dede4ef08d909d02",
        options: {
            'sonar.projectKey': 'evs-react-project1',
            'sonar.projectName': 'evs-react-project1',
            'sonar.sources':'.',
            'sonar.username':'admin',
            
        }
    },
    () => process.exit()
)


