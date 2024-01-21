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
            script {
                def timestamp = currentBuild.getTimeInMilis()
                def folderName = "test_results_${timestamp}"
                archiveArtifacts 'artifacts/', fingerpint: true, onlyIfSuccessful: false, allowEmptyArchive: true, 'excludes': '', 'defaultExcludes': false, caseSensitive: false, 'archiveArtifacts': foldername
            }
        }
    }
}
