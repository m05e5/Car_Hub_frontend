/* eslint-disable */
import { useSelector } from 'react-redux';
import  { useNavigate  } from 'react-router-dom'

const ReserveModal = () => {
  let navigate = useNavigate();
  const state = useSelector((state) => state.myCar);
  const formAction = (e) => {
    e.preventDefault()
    const fdate = document.getElementById('fdate').value;
    const fcountry = document.getElementById('fcountry').value;
    const data = {
      car_id: state.id,
      date: fdate,
      country: fcountry
    }
    console.log(data);
    fetch('https://carhubackend.herokuapp.com/reserved', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjQwMDA0NjUyLCJleHAiOjE2NDAwMDgyNTIsImp0aSI6ImY5OTk2MDBmLTk4MDEtNDE3Yy04NDhkLWU4YWZiZDg5MDRmZiJ9.jb4RR6_Oaanq6sS_fz9kwyFEnsD91CoNlJtw_G7lRks'  
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      navigate("/");
    })
    .catch((error) => {
      console.error('Error:', error);
      navigate("/");
    });
  }
  return (
    <div className="reserve_modal-background">
      <div className="reserve_modal">
        <div className="reserve_modal-header">
          <h2 className="reserve_modal-title"></h2>
          <div className="X_reserve">
            <p className='x_p'>X</p>
          </div>
        </div>
        <div className="reserve_modal-body">
          <h2>RESERVE AN ASTON MARTIN CAR</h2>
          <div className='modal_divider'/>
          <p className='reserve_modal_p'>
          In the case of some unexpected issues that can cause delay, you might 
          need to compromise some features. Remember that if you implement at least 
          80% of the required features and provide a good explanation for the fact that 
          some requirements are not met, your project will be accepted.
          </p>
          <form action = '/' onSubmit={formAction}>
            <select name="country" id="fcountry" required>
              <option value="US">US</option>
              <option value="Germany">Germany</option>
              <option value="Cananda">Canada</option>
              <option value="Japan">Japan</option>
            </select>
            <input type="date" id="fdate" name="fdate" required />
            <input type="submit" className='fsubmit' value="Submit" />
          </form> 
        </div>
      </div>
    </div>
  );
}

export default ReserveModal;