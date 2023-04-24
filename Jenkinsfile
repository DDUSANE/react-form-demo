pipeline {
    agent any

    tools {
        
       tool name: 'Node', type: 'nodejs'
    }

    stages {
        stage('checkout') {
            steps {
                // Get some code from a GitHub repository
                git( url: 'https://github.com/DDUSANE/react-form-demo.git', credentialsId: 'id-rsa1', branch: "master" )
            }
        }
            stage('sonar-scan') {
            steps {
               
               withSonarQubeEnv('SonarQube') {
                         sh "npm dscan"
                    } 
                 
            }
            }
             stage('npm buid') {
            steps {
               
                 sh "npm run build"
            }  
        }
      stage('npm start') {
            steps {
               
                 sh "npm start"
            }  
        }
    }
}
