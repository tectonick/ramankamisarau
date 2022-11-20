echo 'Press enter to restart';
ssh raman@46.101.212.75 "nohup npm run --prefix ./ramankamisarau/ prodrestart 1>/dev/null 2>/dev/null &";