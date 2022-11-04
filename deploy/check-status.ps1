echo "Checking site availability"
Start-Sleep -Seconds 2
$status = (curl nickkiselev.me).StatusCode;
echo "Status code is $status"
