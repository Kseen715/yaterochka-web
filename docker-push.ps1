# Usually this is the version
$tag = "1.0.1"

# Name of the image
# in format "<dockerhub-account-name>/<imange-name>"
# or "ghcr.io/<github-account-name>/<imange-name>" 
# (if you want to push to GitHub Container Registry
# instead of Docker Hub)
$name = "kseen/yaterochka-web"

# Build and push as tagged & latest images
(docker build -t ${name} -t ${name}:${tag} . || Write-Error 'Build error.') && (docker push ${name}:${tag} || Write-Error 'Tag push error.') && (docker push ${name} || Write-Error 'Latest tag push error.') && (docker rmi ${name}:${tag} || Write-Error 'Deleting local tagged image error.') && (Write-Host 'Success!' -ForegroundColor Green)

# Delete dangling images
(docker image prune -f || Write-Host 'Dangling images deleted.')