echo "Checking site availability (give it 30 seconds)"
Start-Sleep -Seconds 30
$status = (curl nickkiselev.me).StatusCode;
echo "Status code is $status"
