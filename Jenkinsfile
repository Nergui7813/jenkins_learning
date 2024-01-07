pipeline {
    agent any
    tools { nodejs 'main' }
	
    stages {
	stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Hello') {
            steps {
                echo "hello from Jenkinsfile"
            }
        }
		// stage('for the test branch') {
		// 	when {
		// 		branch "test*"
		// 		}
		// 	steps {
		// 		sh '''
		// 			cat README.md
		// 		'''
		// 	}
		// }
	stage('Run test files') {
            steps {
                    sh 'node sw_species.js'
                    sh 'node playwright_test1.js'
            }
        }
		// stage('for the PR') {
		// 	when {
		// 		branch 'PR-*'
		// 	}
		// 	steps {
		// 		echo 'this only runs for the PRs'
		// 	}
		// }

    }
}
