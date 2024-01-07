pipeline {
    agent {
        docker {
            image 'node:21.5-alpine3.19' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
