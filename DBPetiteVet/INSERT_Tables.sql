-- -----------------------------------------------------
-- Table `category`
-- -----------------------------------------------------
INSERT INTO `category` (`category`) VALUES ('ropa');
INSERT INTO `category` (`category`) VALUES ('aseo');
INSERT INTO `category` (`category`) VALUES ('juguete');
INSERT INTO `category` (`category`) VALUES ('collares');
INSERT INTO `category` (`category`) VALUES ('hogar');



-- -----------------------------------------------------
-- Table `PetiteVet.role`
-- ----------------------------------------------------- 
INSERT INTO `PetiteVet`.`role` (`idrole`, `name`) VALUES (NULL,'client');
INSERT INTO `PetiteVet`.`role` (`idrole`, `name`) VALUES (NULL,'admin');
INSERT INTO `PetiteVet`.`role` (`idrole`, `name`) VALUES (NULL,'cat');
INSERT INTO `PetiteVet`.`role` (`idrole`, `name`) VALUES (NULL,'dog');
INSERT INTO `PetiteVet`.`role` (`idrole`, `name`) VALUES (NULL,'python');

-- -----------------------------------------------------
-- Table `PetiteVet`.`Product`
-- -----------------------------------------------------
INSERT INTO `PetiteVet`.`Product` (`idProduct`, `name`, `price`, `description`, `sku`, `quantity`, `image`) VALUES (NULL, 'Cepillo Canino', '79', 'Mango ergonómico. Puntas metálicas. Desenreda y quita pelo muerto. Los colores de la imagen pueden variar.', 'VCERFV8','1', NULL);
INSERT INTO `PetiteVet`.`Product` (`idProduct`, `name`, `price`, `description`, `sku`, `quantity`, `image`) VALUES (NULL, 'Plato para alimento', '199', 'Sus dimensiones de 14 x 18 x 4.5 poseen la capacidad suficiente para alimentar a tu mejor amigo y satisfacer su apetito moderado. Los colores de la imagen pueden variar.', 'VFDBD57', '1', NULL);
INSERT INTO `PetiteVet`.`Product` (`idProduct`, `name`, `price`, `description`, `sku`, `quantity`, `image`) VALUES (NULL, 'Cama', '250', 'Cama tamaño grande fabricada en tela polar con almohadón que se puede sacar para lavar. Medidas de la cama: 110 cm (largo) x 75 cm (ancho) x 25 cm (altura). Los colores de la imagen pueden variar.', 'BSFDBDF', '1', NULL);
INSERT INTO `PetiteVet`.`Product` (`idProduct`, `name`, `price`, `description`, `sku`, `quantity`, `image`) VALUES (NULL, 'Correa', 59, 'Material de la correa: Acero. Peso máximo soportado: 5 kg. Largo: 1.2m', 'VRFB721','1', NULL);
INSERT INTO `PetiteVet`.`Product` (`idProduct`, `name`, `price`, `description`, `sku`, `quantity`, `image`) VALUES (NULL, 'Collar para perro', '79', 'Medidas 3/8 X 8-1/2 (raza pequeña). \n Color rosa. \n Los colores de la imagen pueden variar.', 'SVFGSA3','1', NULL);

-- -----------------------------------------------------
-- Table `PetiteVet`.`user`
-- -----------------------------------------------------
INSERT INTO `petitevet`.`user` (`iduser`, `name`, `phone`, `email`, `password`, `role_idrole`) VALUES ('1', 'Homero', '9514780203', 'homero23@gmail.com', '1154154', '1');
INSERT INTO `petitevet`.`user` (`iduser`, `name`, `phone`, `email`, `password`, `role_idrole`) VALUES ('2', 'Bart', '7485789652', 'bart19@gmail.com', '5cndhfv', '2');
INSERT INTO `petitevet`.`user` (`iduser`, `name`, `phone`, `email`, `password`, `role_idrole`) VALUES ('3', 'Lisa', '7451236985', 'lisa28@gmail.com', 'dfbfd745', '3');
INSERT INTO `petitevet`.`user` (`iduser`, `name`, `phone`, `email`, `password`, `role_idrole`) VALUES ('4', 'Maggie', '4425368495', 'maggie78@gmail.com', 'khvbdyhf', '4');
INSERT INTO `petitevet`.`user` (`iduser`, `name`, `phone`, `email`, `password`, `role_idrole`) VALUES ('5', 'March', '9535147896', 'march43@gmail.com', 'bfvdfbvdf', '5');

-- -----------------------------------------------------
-- Table `PetiteVet`.`order`
-- -----------------------------------------------------

INSERT INTO `petitevet`.`order` (`idorder`, `date`, `user_iduser`, `user_role_idrole`) VALUES ('1', '2022-05-01', '1', '1');
INSERT INTO `petitevet`.`order` (`idorder`, `date`, `user_iduser`, `user_role_idrole`) VALUES ('2', '2022-05-25', '2', '2');
INSERT INTO `petitevet`.`order` (`idorder`, `date`, `user_iduser`, `user_role_idrole`) VALUES ('3', '2022-06-18', '3', '3');
INSERT INTO `petitevet`.`order` (`idorder`, `date`, `user_iduser`, `user_role_idrole`) VALUES ('4', '2022-07-01', '4', '4');
INSERT INTO `petitevet`.`order` (`idorder`, `date`, `user_iduser`, `user_role_idrole`) VALUES ('5', '2022-07-03', '5', '5');

-- -----------------------------------------------------
-- UPDATE Table `PetiteVet`.`produc`
-- -----------------------------------------------------
UPDATE `petitevet`.`product` SET `image` = '1.cepillo_canino.png' WHERE (`idProduct` = '1');
UPDATE `petitevet`.`product` SET `image` = '2.plato_de_comida.jpg' WHERE (`idProduct` = '2');
UPDATE `petitevet`.`product` SET `image` = '3.cama.jpg' WHERE (`idProduct` = '3');
UPDATE `petitevet`.`product` SET `image` = '4.correa_perro.jpg' WHERE (`idProduct` = '4');
UPDATE `petitevet`.`product` SET `image` = '5.collar_perro.jpg' WHERE (`idProduct` = '5');

