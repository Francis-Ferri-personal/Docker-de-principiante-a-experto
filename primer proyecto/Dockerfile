FROM centos:centos7

LABEL version = 1.0
LABEL desripcion = "Esta es una imagen de apache"
LABEL vendor = yo

RUN yum install httpd -y

COPY prueba var/www/html

RUN echo "$(whoami)" > var/www/html/user1.html

RUN useradd ricardo

USER ricardo

RUN echo "$(whoami)" > /tmp/user2.html

VOLUME /var/www/html

USER root

RUN cp /tmp/user2.html /var/www/html/user2.html

COPY run.sh /run.sh

CMD sh /run.sh
