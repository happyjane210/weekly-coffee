@rem 프론트 엔드 우분투 접속
ssh -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\myworkspace.pem" ubuntu@ec2-15-165-17-21.ap-northeast-2.compute.amazonaws.com

@rem 프론트엔드 기존에 돌고있는 백그라운드 배포 죽이기
ssh -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\myworkspace.pem" ubuntu@ec2-15-165-17-21.ap-northeast-2.compute.amazonaws.com "pkill -f node"

@rem 프론트엔드 배포 다시 실행 git pull ~ npm start 까지 자동실행
ssh -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\myworkspace.pem" ubuntu@ec2-15-165-17-21.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/weekly-coffee/subscribe; git pull; npm install; npm run build; nohup npm start 1>/dev/null 2>&1 &"


@rem 백엔드 우분투 접속
ssh -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\subscribeserver.pem" ubuntu@ec2-3-37-61-78.ap-northeast-2.compute.amazonaws.com  

@rem 백엔드 home/ubuntu/subscribe 에 빌드파일 교체
scp -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\subscribeserver.pem" -r ./build/libs/subscribe-server*.jar ubuntu@ec2-3-37-61-78.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/web/subscribe

@rem 백엔드 기존에 돌고있는 백드라운드 죽이기
ssh -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\subscribeserver.pem"  ubuntu@ec2-3-37-61-78.ap-northeast-2.compute.amazonaws.com "pkill -9 -f java"

@rem 백엔드 다시 재배포
ssh -i "C:\Users\juh22\OneDrive\문서\Github\weekly-coffee\subscribeserver.pem"  ubuntu@ec2-3-37-61-78.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/web/subscribe; nohup java -Dspring.profiles.active=dev -jar subscribe-server*.jar 1>myworkspace.log 2>&1 &"
