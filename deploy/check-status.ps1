echo "Checking site availability (give it 20 seconds)"
Start-Sleep -Seconds 20
$statusfront = (curl nickkiselev.me).StatusCode;
$statusback = (curl http://nickkiselev.me:1337).StatusCode;
echo "Front status code is $statusfront"
echo "Back status code is $statusback"
