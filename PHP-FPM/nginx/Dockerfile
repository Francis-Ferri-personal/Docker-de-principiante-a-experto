FROM centos:7

COPY ./conf/nginx.repo /etc/yum.repos.d/nginx.repo

RUN                                                                          	\
  yum -y install nginx 			                                     && \
  yum -y install \
    https://repo.ius.io/ius-release-el7.rpm \
    https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm   && \
  yum -y install                                                             	\
    php73-fpm                                                               	\
    php73-cli                                                               	\
    php73-mysqlnd                                                           	\
    php73-soap                                                              	\
    php73-xml                                                               	\
    php73-zip                                                               	\
    php73-json                                                              	\
    php73-mcrypt                                                            	\
    php73-mbstring                                                          	\
    php73-zip                                                               	\
    php73-gd                                                                	\
     --enablerepo=ius && yum clean all

EXPOSE 80 443

VOLUME /var/www/html /var/log/nginx /var/log/php-fpm /var/lib/php-fpm

COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./bin/start.sh /start.sh

COPY index.php /var/www/html/index.php

RUN chmod +x /start.sh

CMD /start.sh

