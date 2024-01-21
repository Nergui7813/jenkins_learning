pipeline {
    agent any
    tools { nodejs 'main' }
	
    stages {
	stage('Build') { 
            steps {
				// sh 'npx playwright install'  
		sh 'npx playwright install-deps'
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

    stage('Run frontend test') {
            steps {
                    script {
                        dir('frontend') {
                            sh 'npx playwright test simple_test.spec.js'
                        }
                    }
            }
        }
    }

    // post {
    //     always {
    //         script {
    //             def timestamp = currentBuild.getTimeInMilis()
    //             def folderName = "test_results_${timestamp}"
    //             archiveArtifacts 'artifacts/', fingerpint: true, onlyIfSuccessful: false, allowEmptyArchive: true, 'excludes': '', 'defaultExcludes': false, caseSensitive: false, 'archiveArtifacts': foldername
    //         }
    //     }
    // }
}
