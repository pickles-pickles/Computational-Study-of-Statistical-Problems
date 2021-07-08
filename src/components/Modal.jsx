import React from 'react';

const InfoModal = ({setIsModalOpen}) => {
    return ( 
        <React.Fragment>
            <div className="card">
                <div className="card-head">
                    <button className="btn"><span /* className="fa fa-window-close" */
                    onClick={()=> {setIsModalOpen(false)}}
                    >Close</span></button>
                    
                </div>
                <div className="card-body">
                    This littlle paragraph has some info about the page. This App works using the Javascript random numbers generator.
                    User can conduct statistical experiments that would be too time-consuming to perform in real life. So, feel free to toss
                    a coin and confirm the 50-50 percentages or perform the <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem" target="_blank">Monty Hall </a> 
                    show and check your chances. Is it better to change your door or to stick with your initial choice? Does the number of doors affecting the result?
                      Find out!!
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default InfoModal;