pipeline {
    agent any
    tools { nodejs 'main' }
	
    stages {
	stage('Build') { 
            steps {
		sh 'npx playwright install'  
		sh 'npx playwright install-deps'
                sh 'npm install'
            }
        }
	stage('Run fronent with node') {
            steps {
                sh 'node frontend/playwright_test1.js'
            }
        }

    stage('Run frontend with npx') {
            steps {
                sh 'npx playwright test frontend/simple_test.spec.js'
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
