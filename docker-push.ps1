$tag = "1.0"
$name = "kseen/yaterochka-web"

(docker build -t ${name} -t ${name}:${tag} . || Write-Error 'Build error.' -ForegroundColor Red) && (docker push ${name}:${tag} || Write-Error 'Tag push error.' -ForegroundColor Red) && (docker push ${name} || Write-Error 'Latest tag push error.' -ForegroundColor Red) && (Write-Host 'Success!' -ForegroundColor Green)