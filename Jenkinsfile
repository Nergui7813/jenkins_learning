pipeline {
    agent {label "main"}
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
		stage('for the new branches') {
			when {
				branch "*"
			}
			steps {
				node sw_species.js
				node playwright_test1.js
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
