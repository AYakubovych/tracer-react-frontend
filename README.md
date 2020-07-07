# tracer-react-frontend

Frontend app of Tracer project.

Deployed on: ayakubovych.ddns.net

First load lasts about 20-30 seconds due to the remoteness of the dns server for ddns.net


docker: docker image build -t ayakubovych/tracer-react-frontend:0.3
docker run -it --rm -p 3000:3000 -name front -d ayakubovych/tracer-react-frontend:0.3

