    import React from 'react'
    import {Component} from 'react'
    import './index.css'

const fabricName=['BAG VOILE ','WISTERIA VOLIE','SHEETING','WINDOWPANE GAUZ','FP001','WAFFEL',
    '2X2 RIB','FRENCH TERRY','VISCOUS LYCRA','OTHER KNITS','LACES','SHIFILLI','SPECIAL FABRICS',
    'IMPORTED  FABRICS','CHINA LACE']

const process=['DYING','PRINTING','MOCK UP','LACES','SHIFFLY','WASHING']

const stages=['PURCHASE','SUBMISSION','FOB','BULK','FABRIC AUDIT','PRODUCTION','TOP','WEB','SIZE SET' ]

const trims=['LABEL COPPER','TAG','STICKER','POLY BAG','STITCHING','THREAD']

const accessories=['WASHCARE LABEL','PRICE TAG','SIZE LABEL','BUTTON','ZIP','HOOK']

    class Form extends Component{
        state={todayDate:'',
            startDt:'',
            endDt:'',
            productionCount:'',
            qty:'',
            fabricNames:fabricName,
            processNames:process,
            stagesNames:stages,
            accessoriesNames:accessories,
            trimsNames:trims,
            majorValue:'',
            stagesValue:'',
            fabricValue:'',
            processValue:'',
            chinaValue:'',
            trimsValue:'',
            accessoriesValue:'',
            piece:'',
            unit:'',
            china:'',
        }

        componentDidMount(){
            this.getTodayDate()
        }

        getTodayDate=()=>{
            const date=new Date().toISOString().split('T')[0];
            this.setState({todayDate:date,startDt:date,endDt:date})
        }

        updateStartDate=(e)=>{
            this.setState({startDt:e.target.value})
        }

        updateEndDate=(e)=>{
            this.setState({endDt:e.target.value})
        }

        render(){
            const {todayDate,startDt,endDt,productionCount,qty,fabricNames,processNames,fabricValue,processValue,
                chinaValue,stagesNames,trimsNames,trimsValue,accessoriesNames,accessoriesValue,stagesValue,majorValue,piece,unit,china}=this.state
            return(
                <div onSubmit="#">
                <h1 className="title">Form Page</h1>
                <div className='date-container'>
                <div className='divDate'>
                    <label htmlFor='startDate'>Start Date</label>
                    <input type='date' value={startDt} id="startDate" onChange={this.updateStartDate} />
                </div>
                <div className='divDate'>
                    <label htmlFor='endDate'>End Date</label>
                    <input type='date' value={endDt} id="endDate" onChange={this.updateEndDate}/>
                </div>
                </div>
                <br/>
                <div className='date-container'>
                <div className='divData'>
                    <h3>Production Per Day Per Machine: </h3>
                    <input type='number' value={productionCount} id="productionCount" onChange={(e)=>this.setState({productionCount:e.target.value})} style={{margin:'10px'}}/>
                </div>
                <div className='divData'>
                    <h3>Total Order Quantity: </h3>
                    <input type='number' value={qty} id="qty" onChange={(e)=>this.setState({qty:e.target.value})} style={{margin:'10px'}}/>
                </div>
                </div>
                <h1>Fabric Selection</h1>
                <div className='fabricCont'>
                <div>
                <label htmlFor='fabricName'>Fabric Name: </label>
                <select id="fabricName" onChange={(e)=>this.setState({fabricValue:e.target.value})}>
                    <option value="">---------Select----------</option>
                    {fabricNames.map((each)=>(
                        <option key={each} value={each}>{each}</option>
                    ))}
                </select>
                </div>
                <br/>
                <br/>
                <div>
                <label htmlFor='piece'>Per Piece Requirement: </label>
                <input type="text" id="piece" value={piece} onChange={(e)=>this.setState({piece:e.target.value})}/>  
                </div>
                <div className='fabricCont units'>
                <p>Choose Unit: </p>
                <div className='radios'>
                <input type="radio" name="yes_no" value="M" id="yes"  onClick={(e)=>this.setState({unit:e.target.value})}/>
                <label htmlFor="yes">M</label>
                <input type="radio" name="yes_no" value="Kg" id="no"  onClick={(e)=>this.setState({unit:e.target.value})}/>
                <label htmlFor="no">Kg</label>
                </div>
                </div>
                <div>
                <label htmlFor='processName'>Processes: </label>
                <select id="processName" onChange={(e)=>this.setState({processValue:e.target.value})}>
                    <option value="">---------Select----------</option>
                    {processNames.map((each)=>(
                        <option key={each} value={each}>{each}</option>
                    ))}
                </select>
                </div>
                </div>
                <br/>
                <div className='fabricCont'>
                <label htmlFor="c_q">Color & Quantity</label>
                <input type="text" className='c_q' placeholder='color'/>
                <input type="number" className='c_q' placeholder='quantity'/>
                <div>
                <label htmlFor='stages'>Stages to be skipped </label>
                <select id="stages" onChange={(e)=>this.setState({stagesValue:e.target.value})}>
                    <option value="">---------Select----------</option>
                    {stagesNames.map((each)=>(
                        <option key={each} value={each}>{each}</option>
                    ))}
                </select>
                
                </div>
                <div>
                <div className='fabricCont units'>
                <p>Is China Fabric Present ? </p>
                <div className='radios'>
                <input type="radio" name="yes_no" value="Yes" id="yes"  onClick={(e)=>this.setState({china:e.target.value})}/>
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="yes_no" value="No" id="no"  onClick={(e)=>this.setState({china:e.target.value})}/>
                <label htmlFor="no">No</label>
                </div>
                </div>
                </div>
                </div> 
                {china=="Yes"?<div className="chinaFabric">
                <p>Select China Fabric: </p>
                <select id="fabricName" onChange={(e)=>this.setState({chinaValue:e.target.value})}>
                    <option value="">---------Select----------</option>
                    {fabricNames.map((each)=>(
                        <option key={each} value={each}>{each}</option>
                    ))}
                </select>
                </div>:''} 
                <div>
                <br/>
                <label htmlFor='fabricName'>Choose Major Fabric: </label>
                <select id="fabricName" onChange={(e)=>this.setState({majorValue:e.target.value})}>
                    <option value="">None</option>
                    {fabricNames.map((each)=>(
                        <option key={each} value={each}>{each}</option>
                    ))}
                </select>
                </div>
                <div>
                <br/>
                <label htmlFor='fabricName'>Trims: </label>
                <select id="fabricName" onChange={(e)=>this.setState({trimsValue:e.target.value})}>
                    <option value="">None</option>
                    {trimsNames.map((each)=>(
                        <option key={each} value={each}>{each}</option>
                    ))}
                </select>
                </div>
                <div>
                <br/>
                <label htmlFor='fabricName'>Accessories: </label>
                <select id="fabricName" onChange={(e)=>this.setState({accessoriesValue:e.target.value})}>
                    <option value="">None</option>
                    {accessoriesNames.map((each)=>(
                        <option key={each} value={each}>{each}</option>
                    ))}
                </select>
                </div>
                <div className='btn'>
                <button type="submit" className='submit'>Submit</button>
                </div>
                </div>
            )
        }
    }

    export default Form