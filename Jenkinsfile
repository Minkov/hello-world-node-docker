pipeline {
  environment {
    registry = "minkov/hello-world-app"
    registryCredential = 'docker'
  }
  agent any
  stages {
    stage('Building image')
      steps
        script
          docker.build registry + ":$BUILD_NUMBER"
    stage 'Checkout'
        checkout scm
    stage 'Build & UnitTest'
        sh "docker build -t hello-world:B${BUILD_NUMBER} -f Dockerfile ."
 ` }
}
