pipeline {
    
    agent any
    tools {
         nodejs 'Node'
    }

    stages {
        stage('checkout') {
            steps {
                // Get some code from a GitHub repository
                git( url: 'https://github.com/DDUSANE/react-form-demo.git', credentialsId: 'id-rsa1', branch: "master" )
            }
        }
         stage('npm install') {
            steps {
               
                 sh "npm install"
            }  
        }
        stage('npm buid') {
            steps {
               
                 sh "npm run build"
            }  
        }
       
            stage('sonar-scan') {
            steps {
               
               withSonarQubeEnv('SonarQube') {
                         sh "npm run dscan"
                    } 
                 
            }
            }
             
      stage('npm start') {
            steps {
               
                 sh "npm start"
            }  
        }
    }
}
