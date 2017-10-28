export class OverlayVisibilityManager{
    
    private _overlayNames: string[];
    private _visibleOverlay: string;

    constructor(overlayNames: string[], visibleOverlay?: string){
        this._overlayNames = overlayNames;
        visibleOverlay ? this._visibleOverlay=visibleOverlay : this._visibleOverlay = null;

        this._overlayNames.forEach(name=>{
            Object.defineProperty(
                this,
                name,
                {
                    get: function(){
                            return this._visibility(name);
                        },
                    set: function(visibility: string){
                        if(visibility==="visible"){
                            this._visibleOverlay = name;
                        }else{
                            this._visibleOverlay = null;
                        }
                    }
                })
        })
    }

    private _visibility(overlayName: string){
        return (overlayName===this._visibleOverlay) ? "visible" : "hidden";
    }

    public hideAll(){
        this._visibleOverlay = null;
    }

    public show(overlayName: string){
        if(this._isOverlayName(overlayName)){
            this[overlayName] = "visible";
        }else{
            throw new Error(`Invalid overlayName "${overlayName}", valid names are ${this._overlayNames.toString()}`)
        }
    }

    private _isOverlayName(overlayName: string): boolean{
        return this._overlayNames.reduce((any, name)=>(any || name===overlayName), false);
    }
    
}