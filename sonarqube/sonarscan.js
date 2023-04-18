const scanner = require('sonarqube-scanner')


scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_cb47875779452e50b5c2edbd33d92797c56d9f3f",
        options: {
            'sonar.projectKey': 'evs-react-project1',
            'sonar.projectName': 'evs-react-project1',
            'sonar.sources':'.',
            'sonar.username':'admin',
            
        }
    },
    () => process.exit()
)


