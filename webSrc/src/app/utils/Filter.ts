// defines a filter for employee data
export class Filter{
    
    genderM: boolean;
    genderF: boolean;
    limit: number;
    
    constructor(genderM, genderF, limit){
        this.genderM=genderM;
        this.genderF=genderF;
        this.limit=limit;
    }
}