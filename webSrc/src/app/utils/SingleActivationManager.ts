export class SingleActivationManager{
    
    private _switchNames: string[];
    private _onValue: any;
    private _offValue: any
    private _activeSwitchName: string;

    constructor(switchNames: string[], onValue: string, offValue: string){
        this._switchNames = switchNames;
        switchNames
        this._onValue = onValue || true;
        this._offValue = offValue || false;

        this._switchNames.forEach(name=>{
            Object.defineProperty(
                this,
                name,
                {
                    get: function(){
                            return this._getState(name);
                        },
                    set: function(state: string){
                        if(state===this._onValue){
                            this._activeSwitchName = name;
                        }else{
                            this._activeSwitchName = null;
                        }
                    }
                })
        })
    }

    private _getState(switchName: string){
        return (switchName===this._activeSwitchName) ? this._onValue : this._offValue;
    }

    public deactivateAll(){
        this._activeSwitchName = null;
    }

    public activate(switchName: string){
        if(this._isSwitchName(switchName)){
            this[switchName] = this._onValue;
        }else{
            throw new Error(`Invalid overlayName "${switchName}", valid names are ${this._switchNames.toString()}`)
        }
    }

    private _isSwitchName(switchName: string): boolean{
        return this._switchNames.reduce((any, name)=>(any || name===switchName), false);
    }
    
}