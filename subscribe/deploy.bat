ssh -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\myworkspace.pem" ubuntu@ec2-15-165-17-21.ap-northeast-2.compute.amazonaws.com

ssh -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\myworkspace.pem" ubuntu@ec2-15-165-17-21.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/weekly-coffee/subscribe; git pull; npm install; npm run build; nohup npm start 1>/dev/null 2>&1 &"
ssh -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\myworkspace.pem" 