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
            archiveArtifacts artifacts: '/var/jenkins_home/logs/**/*.jar', fingerprint: true
            junit '/var/jenkins_home/logs/reports/**/*.xml'
        }
    }
}
