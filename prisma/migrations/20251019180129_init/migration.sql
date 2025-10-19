/*
  Warnings:

  - The `workers` column on the `projects` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tasks` column on the `projects` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "workers",
ADD COLUMN     "workers" TEXT[],
DROP COLUMN "tasks",
ADD COLUMN     "tasks" JSONB[];
