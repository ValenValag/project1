/*
  Warnings:

  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `creation` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'user',
ALTER COLUMN "creation" SET NOT NULL,
ALTER COLUMN "creation" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "creation" SET DATA TYPE TIMESTAMP(3);
