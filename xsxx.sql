/*
SQLyog Professional v12.08 (64 bit)
MySQL - 10.1.19-MariaDB : Database - space
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`space` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `space`;

/*Table structure for table `xsxx` */

DROP TABLE IF EXISTS `xsxx`;

CREATE TABLE `xsxx` (
  `username` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `xuehao` int(10) NOT NULL AUTO_INCREMENT,
  `touxiang` varchar(1000) DEFAULT NULL,
  `jianjie` varchar(30) DEFAULT NULL,
  `guanzhu` int(5) DEFAULT NULL,
  `fensi` int(5) DEFAULT NULL,
  `city` varchar(10) DEFAULT NULL,
  `gender` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`xuehao`)
) ENGINE=InnoDB AUTO_INCREMENT=1021 DEFAULT CHARSET=utf8;

/*Data for the table `xsxx` */

insert  into `xsxx`(`username`,`password`,`xuehao`,`touxiang`,`jianjie`,`guanzhu`,`fensi`,`city`,`gender`) values ('汪慧玲','whl',1001,'http://m.qpic.cn/psb?/V12hQpjY0GZG8u/fqoAEOKpIs2kNJPztzi*8f8yaf3odImE4hXkhPCC4pU!/b/dDYBAAAAAAAA&bo=UABQAAAAAAADByI!&rf=viewer_4','心尖上的安庆',23,565,'安庆','女'),('徐家郑','xjz',1002,'http://m.qpic.cn/psb?/V12hQpjY0GZG8u/7iAOukwoznMapM7ABueXibet5R5TRq6unHM37w.axtg!/b/dL8AAAAAAAAA&bo=UABQAAAAAAADByI!&rf=viewer_4','心尖上的姚高',88,988,'宣城','男'),('储雅梅','cym',1003,'http://m.qpic.cn/psb?/V12hQpjY0GZG8u/Pg9Ja9Yk8OXVgz1cZxNZIrnSiHnZVZG6SsOmtCRu0B0!/b/dL8AAAAAAAAA&bo=UABQAAAAAAADByI!&rf=viewer_4','心尖上的罗溪',56,765,'宁国','女'),('李欣然','lxr',1004,'http://m.qpic.cn/psb?/V12hQpjY0GZG8u/mqZkNEThI0M5ZfLXhnFY1NzR8Dc064f4h52gWO*AAOI!/b/dDYBAAAAAAAA&bo=UABQAAAAAAADByI!&rf=viewer_4','心尖上的黄山',45,776,'黄山','男'),('发发发','fff',1005,NULL,NULL,NULL,NULL,NULL,NULL),('徐家郑','222',1006,NULL,NULL,NULL,NULL,NULL,NULL),('123','123',1007,NULL,NULL,NULL,NULL,NULL,NULL),('123','123',1008,NULL,NULL,NULL,NULL,NULL,NULL),('chuyamei','123',1009,NULL,NULL,NULL,NULL,NULL,NULL),('发发发','fff',1010,NULL,NULL,NULL,NULL,NULL,NULL),('222','111',1011,NULL,NULL,NULL,NULL,NULL,NULL),('','',1012,NULL,NULL,NULL,NULL,NULL,NULL),('方法','vv ',1013,NULL,NULL,NULL,NULL,NULL,NULL),('反反复复','ffffff',1014,NULL,NULL,NULL,NULL,NULL,NULL),('反反复复','fff',1015,NULL,NULL,NULL,NULL,NULL,NULL),('张二楞','zzz',1016,NULL,NULL,NULL,NULL,NULL,NULL),('xxx','xxx',1017,NULL,NULL,NULL,NULL,NULL,NULL),('ggg','ggg',1018,NULL,NULL,NULL,NULL,NULL,NULL),('ggg','ggg',1019,NULL,NULL,NULL,NULL,NULL,NULL),('xxxx','xxx',1020,NULL,NULL,NULL,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
