const scanner = require('sonarqube-scanner')


scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqa_a49d4cb095d040fcf138ff32db3c64df9ef03d89",
        options: {
            'sonar.projectKey': 'evs-react-project1',
            'sonar.projectName': 'evs-react-project1',
            'sonar.sources':'.',
            'sonar.username':'admin',
            
        }
    },
    () => process.exit()
)


