import dam from '../assets/dam.jpg'
import ingressive from '../assets/ingressive.png'
import zuri from '../assets/zuri.png'

const Profile = () => {
    return (
        <div className="card p-4"> 
                <div className=" image d-flex flex-column justify-content-center align-items-center"> 
                    <button className="btn btn-secondary"> 
                        <img src={dam} className="profile" alt="Dammy"/>
                    </button> 
                    <span id="profile_img" className="name mt-3">Damilola Ejalonibu</span> 
                    <span id="twitter" className="idd">
                        <a target="_blank" href="https://twitter.com/DammyLonibu"><i className="fa fa-twitter"></i></a>
                        <span id="slack"><a target="_blank" href="https://zuritraining.slack.com"><i className="fa fa-slack"></i></a></span>
                    </span>                      
                    <div className=" d-flex mt-2"> 
                        <a target="_blank" href="https://training.zuri.team/" id="btn__zuri" className="btn1 btn-dark myLinks">Zuri Team</a> 
                    </div> 
                    <div className=" d-flex mt-2"> 
                        <a target="_blank" href="http://books.zuri.team" id="books" className="btn1 btn-dark myLinks">Zuri Books</a> 
                    </div> 
                    <div className=" d-flex mt-2"> 
                        <a target="_blank" href="https://books.zuri.team/python-for-beginners?ref_id=ejalonibudamilola96" id="book_python" className="btn1 btn-dark myLinks">Zuri Python Books</a> 
                    </div> 
                    <div className=" d-flex mt-2"> 
                        <a target="_blank" href="https://background.zuri.team" id="pitch" className="btn1 btn-dark myLinks">Background Check for Coders</a> 
                    </div> 
                    <div className=" d-flex mt-2"> 
                        <a target="_blank" href="https://books.zuri.team/design-rules" id="book_design" className="btn1 btn-dark myLinks">Free Design Books</a> 
                    </div> 
                </div> 
                <div className="row footer">
                    <div className="col-md-4">
                        <img src={zuri}/>
                    </div>
                    <div className="col-md-4">
                        <p className="footer-text">HNG Internship 9 Frontend Task</p>
                    </div>
                    <div className="col-md-4">
                        <img src={ingressive} className="ingressive"/>
                    </div>
                </div>  
            </div> 
    )
}

export default Profile