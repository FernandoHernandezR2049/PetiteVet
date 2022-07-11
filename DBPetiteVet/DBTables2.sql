-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema PetiteVet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PetiteVet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PetiteVet` DEFAULT CHARACTER SET utf8 ;
USE `PetiteVet` ;

-- -----------------------------------------------------
-- Table `PetiteVet`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetiteVet`.`Product` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40) NULL,
  `price` DECIMAL NULL,
  `description` VARCHAR(700) NULL,
  `sku` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `image` VARCHAR(50) NULL,
  PRIMARY KEY (`idProduct`),
  UNIQUE INDEX `sku_UNIQUE` (`sku` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PetiteVet`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetiteVet`.`category` (
  `idcategory` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NULL,
  PRIMARY KEY (`idcategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PetiteVet`.`Product_has_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetiteVet`.`Product_has_category` (
  `Product_idProduct` INT NOT NULL,
  `category_idcategory` INT NOT NULL,
  PRIMARY KEY (`Product_idProduct`, `category_idcategory`),
  INDEX `fk_Product_has_category_category1_idx` (`category_idcategory` ASC) VISIBLE,
  INDEX `fk_Product_has_category_Product_idx` (`Product_idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_Product_has_category_Product`
    FOREIGN KEY (`Product_idProduct`)
    REFERENCES `PetiteVet`.`Product` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_has_category_category1`
    FOREIGN KEY (`category_idcategory`)
    REFERENCES `PetiteVet`.`category` (`idcategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PetiteVet`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetiteVet`.`role` (
  `idrole` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idrole`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PetiteVet`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetiteVet`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `phone` VARCHAR(15) NULL,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(255) NULL,
  `role_idrole` INT NOT NULL,
  PRIMARY KEY (`iduser`, `role_idrole`),
  INDEX `fk_user_role1_idx` (`role_idrole` ASC) VISIBLE,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_idrole`)
    REFERENCES `PetiteVet`.`role` (`idrole`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PetiteVet`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetiteVet`.`order` (
  `idorder` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NULL,
  `user_iduser` INT NOT NULL,
  `user_role_idrole` INT NOT NULL,
  PRIMARY KEY (`idorder`, `user_iduser`, `user_role_idrole`),
  INDEX `fk_order_user1_idx` (`user_iduser` ASC, `user_role_idrole` ASC) VISIBLE,
  CONSTRAINT `fk_order_user1`
    FOREIGN KEY (`user_iduser` , `user_role_idrole`)
    REFERENCES `PetiteVet`.`user` (`iduser` , `role_idrole`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PetiteVet`.`timestamps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetiteVet`.`timestamps` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL);


-- -----------------------------------------------------
-- Table `PetiteVet`.`timestamps_1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetiteVet`.`timestamps_1` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL);


-- -----------------------------------------------------
-- Table `PetiteVet`.`Product_has_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetiteVet`.`Product_has_order` (
  `Product_idProduct` INT NOT NULL,
  `order_idorder` INT NOT NULL,
  `order_user_iduser` INT NOT NULL,
  `order_user_role_idrole` INT NOT NULL,
  PRIMARY KEY (`Product_idProduct`, `order_idorder`, `order_user_iduser`, `order_user_role_idrole`),
  INDEX `fk_Product_has_order_order1_idx` (`order_idorder` ASC, `order_user_iduser` ASC, `order_user_role_idrole` ASC) VISIBLE,
  INDEX `fk_Product_has_order_Product1_idx` (`Product_idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_Product_has_order_Product1`
    FOREIGN KEY (`Product_idProduct`)
    REFERENCES `PetiteVet`.`Product` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_has_order_order1`
    FOREIGN KEY (`order_idorder` , `order_user_iduser` , `order_user_role_idrole`)
    REFERENCES `PetiteVet`.`order` (`idorder` , `user_iduser` , `user_role_idrole`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



