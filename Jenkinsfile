pipeline {
    // agent {label "main"}
agent { docker {
            image 'node:20.10.0-alpine3.19' 
            args '-p 3000:3000' 
        }
      }
	
    stages {
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
	stage('Node.js Scripts') {
            steps {
                // Install Node.js dependencies (if any)
                script {
                    // Use npm install or yarn install based on your project
                    sh 'npm install'
                }

                // Run Node.js scripts
                script {
                    // Run your Node.js scripts
                    sh 'node sw_species.js'
                    sh 'node playwright_test1.js'
                    // Add more scripts as needed
                }
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
