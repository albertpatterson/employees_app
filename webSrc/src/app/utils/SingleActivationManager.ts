/**
 * manager of switchable (on/off) states allowing only a single state to be active (on) at a time
 * 
 * @export
 * @class SingleActivationManager
 */
export class SingleActivationManager{
    
    /**
     * the names of the switchable states
     * 
     * @private
     * @type {string[]}
     * @memberof SingleActivationManager
     */
    private _switchNames: string[];
    
    /**
     * the name of the "on" state
     * 
     * @private
     * @type {*}
     * @memberof SingleActivationManager
     */
    private _onValue: any;
    
    /**
     * the name of the "off" state
     * 
     * @private
     * @type {*}
     * @memberof SingleActivationManager
     */
    private _offValue: any
    
    /**
     * the name of the "on" switch
     * 
     * @private
     * @type {string}
     * @memberof SingleActivationManager
     */
    private _activeSwitchName: string;

    /**
     * Creates an instance of SingleActivationManager.
     * @param {string[]} switchNames 
     * @param {string} onValue 
     * @param {string} offValue 
     * @memberof SingleActivationManager
     */
    constructor(switchNames: string[], onValue: string, offValue: string){
        this._switchNames = switchNames;
        this._onValue = onValue || true;
        this._offValue = offValue || false;

        // defines setters and getters for the switches such that activating on switch deactivates the others
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

    /**
     * get the state of a switch
     * 
     * @private
     * @param {string} switchName the name of the switch to check
     * @returns {string} the state of the switch
     * @memberof SingleActivationManager
     */
    private _getState(switchName: string): string{
        return (switchName===this._activeSwitchName) ? this._onValue : this._offValue;
    }

    /**
     * deactivate all switches
     * 
     * @memberof SingleActivationManager
     */
    public deactivateAll(): void{
        this._activeSwitchName = null;
    }

    /**
     * activate a switch
     * 
     * @param {string} switchName the name of the switch
     * @memberof SingleActivationManager
     */
    public activate(switchName: string): void{
        if(this._isSwitchName(switchName)){
            this[switchName] = this._onValue;
        }else{
            throw new Error(`Invalid overlayName "${switchName}", valid names are ${this._switchNames.toString()}`)
        }
    }

    /**
     * indicates if a string is a valid swich name
     * 
     * @private
     * @param {string} switchName the name to check
     * @returns {boolean} indicates if the string is a valid name
     * @memberof SingleActivationManager
     */
    private _isSwitchName(switchName: string): boolean{
        return this._switchNames.reduce((any, name)=>(any || name===switchName), false);
    }
    
}