-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "workers" JSONB NOT NULL,
    "tasks" JSONB NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
