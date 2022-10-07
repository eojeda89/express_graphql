const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function getAllProjects() {
    const allProjects = await prisma.projects.findMany();
    return allProjects;
}

async function getAllJobs() {
    const allJobs = await prisma.jobs.findMany();
    return allJobs;
}

async function getAllBundles() {
    const BundlesJobs = await prisma.bundles.findMany();
    return BundlesJobs;
}

module.exports = {
    getAllJobs,
    getAllProjects,
    getAllBundles
}