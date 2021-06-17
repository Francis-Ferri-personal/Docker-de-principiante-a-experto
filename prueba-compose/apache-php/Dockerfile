FROM centos:7

RUN yum install -y httpd \
	php \
	php-common \
	php-opcache \
	php-mcrypt \
	php-cli \
	php-gd \
	php-curl \
	php-mysqlnd

RUN echo "<?php phpinfo(); ?>" >  /var/www/html/index.php

CMD apachectl -DFOREGROUND
