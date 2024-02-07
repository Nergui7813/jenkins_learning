pipeline {
    agent any
    tools { nodejs 'main' }
	
    stages {
	stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
	stage('Run backend test') {
            steps {
                    script {
                        dir('backend') {
                            sh 'node sw_species.js'
                        }
                    }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
            junit 'build/reports/**/*.xml'
        }
    }
}
