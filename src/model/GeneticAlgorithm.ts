import {Machine} from "./Machine";
import {Job} from "./Job";
import {Schedule} from "./Schedule";

export class GeneticAlgorithm {
    jobs: Job[]
    machines: Machine[]
    populationSize: number
    survivalRate: number

    constructor(jobs: Job[], machines: Machine[], populationSize: number, survivalRate: number) {
        this.jobs = jobs
        this.machines = machines
        this.populationSize = populationSize
        this.survivalRate = survivalRate
    }

    createInitialPopulation() {
        //TODO: implement
        return [];
    }

    findFittestIndividuals(population: Schedule[]): Schedule[] {
        //TODO: implement
        return [];
    }

    generateChildPopulation(fittestSurvivors: Schedule[]) {
        //TODO: implement
        return [];
    }

    introduceMutations(population: Schedule[]) {
        //TODO: implement
        return [];
    }
}
