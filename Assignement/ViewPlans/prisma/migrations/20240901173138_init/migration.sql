-- CreateTable
CREATE TABLE `PlanDetails` (
    `planId` INTEGER NOT NULL AUTO_INCREMENT,
    `planName` VARCHAR(191) NOT NULL,
    `planPrice` DOUBLE NOT NULL,
    `validity` INTEGER NOT NULL,
    `benefits` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`planId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
