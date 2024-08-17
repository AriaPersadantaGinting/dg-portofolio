/*
  Warnings:

  - You are about to alter the column `image` on the `skills` table. The data in that column could be lost. The data in that column will be cast from `VarChar(500)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE `skills` MODIFY `image` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `contact_me` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `subject` VARCHAR(150) NOT NULL,
    `message` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
