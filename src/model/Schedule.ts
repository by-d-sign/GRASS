import {Machine} from "./Machine";
import {
    Configuration,
    EmissionsDataDTO
} from "../CarbonAwareSDKClient";
import {Job} from "./Job";


export class Schedule {
    private _machines: Machine[]
    private _jobs: Job[]
    private _schedule: number[][] = []
    private _location: string
    private _apiConfig: Configuration
    private _start: Date
    public fitnessScore: number = -1

    EmissionsData: EmissionsDataDTO[] = []

    constructor(machines: Machine[], jobs: Job[], location: string, CarbonAwareApiConfig: Configuration, start: Date = new Date()) {
        this._machines = machines
        this._jobs = jobs
        this._location = location
        this._apiConfig = CarbonAwareApiConfig
        this._start = start
    }

    public schedule(){
        //TODO: create schedule
    }

    getCompletionTime(){
        return Math.max(...this._schedule.map((element) => element.length))
    }

    async requestEmissionsData(): Promise<EmissionsDataDTO[]> {
        let finish: Date = this._start
        finish.setMinutes(finish.getMinutes() + 5 * this.getCompletionTime())
        // TODO: make request to Carbon Aware API /emissions/forecasts/current endpoint with location, start and finish, then
        return []
    }

    get co2Intensity(): number {
        const co2Intensity: number = 0
        for(let m = 0; m < this._machines.length; m++){
            let t = 0
            while(t < this._schedule[m].length){
                // TODO: calculate CO2 intensity of the schedule
            }
        }
        return co2Intensity
    }
}
