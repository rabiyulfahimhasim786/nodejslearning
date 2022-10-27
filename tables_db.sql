USE edureka;

LOCK TABLES `employee` WRITE;
INSERT INTO `employee` VALUES (1,'Rabiyul','EMP01',265400),(2,'Tharick','EMP02',265401),(3,'Mano','EMP03',265402),(4,'hrf','EMP04',265403);
UNLOCK TABLES;
