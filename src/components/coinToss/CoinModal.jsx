import React from 'react';

const CoinModal = () => {
    return (
        <React.Fragment>
                <div id="modal">
                    <div className="container">
                        <div className="row">
                            <div id="modal-inner" className="col-8 mx-auto py-2 col-md-6 col-lg-4
            text-center text-capitalize">
                                <img src="assets/toss-coin.gif" alt="Toss coin" />
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default CoinModal;