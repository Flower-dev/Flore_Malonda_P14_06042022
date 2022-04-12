import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// custom 
import '../custom/components/modal.scss';
// -------------------------------------------

Modal.propTypes = {
    isShowing: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    title: PropTypes.string
};

export default function Modal({ isShowing, hide, title, info, img, alt, ...props  }) {
    return (
        isShowing
        ? ReactDOM.createPortal(
            <>
              <div className='modal-overlay'>
                <div className='modal-wrapper'>
                  <div className='modal'>
                    <div className='modal-header'>
                      <h4>{title}</h4>
                      <button
                        type='button'
                        className='modal-close-button'
                        onClick={hide}
                      >
                        <span>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                        <p className='modal-info'>{info}</p>
                        <img className='modal-img' src={img} alt={alt}/>
                    </div>
                  </div>
                </div>
              </div>
            </>,
            document.body
          )
        : null
    )
    
}