-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           10.6.5-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Listage de la structure de la table lds_prod_v2_31012024. reglements
CREATE TABLE IF NOT EXISTS `reglements` (
  `numreglement` bigint(20) NOT NULL AUTO_INCREMENT,
  `numfacture` bigint(20) NOT NULL,
  `datereglement` date NOT NULL,
  `montantttcencaisse` bigint(20) NOT NULL,
  `montanthtencaisse` bigint(20) NOT NULL,
  `montanttvaencaisse` bigint(20) NOT NULL,
  `codefacture` bigint(20) NOT NULL,
  `periode` int(11) DEFAULT 1,
  `annee` int(11) DEFAULT 2024,
  PRIMARY KEY (`numreglement`),
  KEY `FK_reglements_factures` (`codefacture`),
  CONSTRAINT `FK_reglements_factures` FOREIGN KEY (`codefacture`) REFERENCES `factures` (`codefacture`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
