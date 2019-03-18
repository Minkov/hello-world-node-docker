node('docker') {
 
    stage 'Checkout'
        checkout scm
    stage 'Build & UnitTest'
        sh "docker build -t hello-world:B${BUILD_NUMBER} -f Dockerfile ."
}
