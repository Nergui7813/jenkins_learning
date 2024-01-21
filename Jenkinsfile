pipeline {
    agent any
    tools { nodejs 'main' }
	
    stages {
	stage('Build') { 
            steps {
                sh 'npm install'
				sh 'npx playwright install'
				sh 'npx playwright install-deps'
            }
        }
	stage('Run test files') {
            steps {
                    sh 'node sw_species.js'
                    sh 'node playwright_test1.js'
            }
        }

    }
}
