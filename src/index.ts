import { Schedule } from "./model/Schedule";
import {GeneticAlgorithm} from "./model/GeneticAlgorithm";
import {Job} from "./model/Job";
import {Machine} from "./model/Machine";
// 1 - initilization

const populationSize = 100
const maxIteration = 1000
const survivalRate = 0.4

//TODO: load all jobs with their activities and all machines to process them
const jobs: Job[] = []
const machines: Machine[] = []

const ga = new GeneticAlgorithm(jobs, machines, populationSize, survivalRate)

// 2 - generate initial population

let population: Schedule[] = ga.createInitialPopulation()
let iteration = 0
while(iteration < maxIteration){
    // 3 - select based on fitness
    const fittestSurvivors: Schedule[] = ga.findFittestIndividuals(population)
    // 4 - reproduce and mutate
    // skip step 4 on last iteration
    if(iteration + 1 === maxIteration)
        break
    population = ga.generateChildPopulation(fittestSurvivors)
    population = ga.introduceMutations(population)

    iteration++
}

// 5 - output solution
// TODO: visualize the winning solution
