echo "Checking site availability (give it 40 seconds)"
Start-Sleep -Seconds 40
$statusfront = (curl nickkiselev.me).StatusCode;
$statusback = (curl http://nickkiselev.me:1337).StatusCode;
echo "Front status code is $statusfront"
echo "Back status code is $statusback"
