skill node;
skill http-server;
cd ../raman-back;
nohup npm start &;
cd ../raman-front;
npm run build;
cd ..;
nohup http-server ./raman-front/build -p 80 &;