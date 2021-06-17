FROM centos:7

RUN yum -y install httpd \
		php \
		php-common \
		php-opcache \
		php-mcrypt \
		php-cli \
		php-gd \
		php-curl \
		php-mysqlnd && \
echo "<?php phpinfo(); ?>" > 	/var/www/html/index.php

EXPOSE 80
CMD apachectl -DFOREGROUND

