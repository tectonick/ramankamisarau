echo "Checking site availability (give it 80 seconds)"
Start-Sleep -Seconds 80
$statusfront = (curl http://46.101.212.75).StatusCode;
$statusback = (curl http://46.101.212.75:1337).StatusCode;
echo "Front status code is $statusfront"
echo "Back status code is $statusback"
