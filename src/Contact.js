import React from 'react';

const Contact = () =>{
    const submitContact = ()=>{
        alert("Hi  "+document.getElementById('name').value);        
    }
    return(
        <div>
            <h2>This is my Contact page</h2>
            <form name='myForm' action='' class='form-group' style={{paddingTop:'60px'}}>
                <div class="form-group">
                <label type='label' style={{paddingRight:'20px'} }>Name: </label>
                <input type='text' class="form-group" name='name' id='name' placeholder='Enter name'/>
                </div>
                <div class="form-group" style={{paddingTop:'20px'}}>
                <label type='label' style={{paddingRight:'20px'}}>Email: </label>
                <input type='text' class="form-group" name='email' id='email' placeholder='Enter email id'/>
                </div>
                <div class="form-group" style={{paddingTop:'20px'}}>
                <label type='label' style={{paddingRight:'20px'}}>Mobile: </label>
                <input type='text' class="form-group" name='mobile' id='mobile' placeholder='Enter mobile'/>
                </div>
                <div style={{padding:'20px'}}>
                    <button type='button' className='btn btn-primary' onClick={submitContact}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact