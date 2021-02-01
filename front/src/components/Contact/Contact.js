import React,{ useState } from 'react';
import './Contact.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '90%',
        color:'red'
      },
    },
  }));

function Contact() {
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const [result,setResult] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('https://yashvirani.herokuapp.com/send',{
            name:name,
            email:email,
            subject:subject,
            message:message
        }).then(response => {
            setResult(response.data);
            setName('');
            setSubject('');
            setEmail('');
            setMessage('');
        }).catch(() => {
            setResult({
                success:false,message:"Something went Wrong , try again!"
            });
        });

    }
    return (
        <div className="contact">
            
            <div class="container">
                <div className="heading23">
                    LET'S CONNECT
                  
                </div>
                <div class="row">
                    
                    <div class="col-sm-12 col-md-6 col-lg-6">
                            <svg className="svg55" id="e4efdc2f-150c-4196-a68d-a8467dcc9971" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1012.29306" height="636.61261" viewBox="0 0 1012.29306 636.61261"><title>fill_forms</title><path d="M472.64653,398.128s83,4,88,33-97,3-97,3Z" transform="translate(-93.85347 -131.6937)" fill="#a0616a"/><path d="M341.64653,306.128s14,4,25,28,33,46,33,46l89,17-15,45-85-11-53-30Z" transform="translate(-93.85347 -131.6937)" fill="#575a89"/><path d="M341.64653,306.128s14,4,25,28,33,46,33,46l89,17-15,45-85-11-53-30Z" transform="translate(-93.85347 -131.6937)" opacity="0.1"/><rect x="824.29306" y="92.93432" width="105" height="2" fill="#3f3d56"/><rect x="409.29306" y="92.93432" width="333" height="2" fill="#3f3d56"/><rect x="30.29306" y="333.93432" width="789" height="301" fill="#3f3d56"/><polygon points="115.793 128.434 124.793 185.434 186.793 188.434 179.793 104.434 115.793 128.434" fill="#a0616a"/><path d="M144.14653,640.628l-3,126h94l14-50,11,50h98s2-144-9-145S144.14653,640.628,144.14653,640.628Z" transform="translate(-93.85347 -131.6937)" fill="#2f2e41"/><circle cx="135.79306" cy="89.43432" r="54" fill="#a0616a"/><path d="M138.64653,646.128l28-138-37-183,85.21434-31.97582,41.78566-5.02418,21.00654-3.92147,14.99346,3.92147s60,15,63,26-12,101-12,101l-14,74,31,133s-129,44-220,24Z" transform="translate(-93.85347 -131.6937)" fill="#575a89"/><polygon points="82.293 243.934 82.293 280.934 200.285 281.095 88.293 268.934 82.293 243.934" opacity="0.1"/><polygon points="72.159 346.12 220.293 324.934 72.159 366.89 72.159 346.12" opacity="0.1"/><polygon points="307.293 248.934 291.412 306.159 318.293 250.822 307.293 248.934" opacity="0.1"/><path d="M274.08747,166.97162l9.93007-3.97545s-20.76282-22.85871-49.65048-20.8709l8.12483-8.94481s-19.86015-7.95077-37.9148,12.92013c-9.491,10.97136-20.47216,23.86767-27.31776,38.39517H166.62491l4.4384,9.77288-15.53444,9.77288,15.94458-1.75541a54.612,54.612,0,0,0-.43268,16.21013,20.97371,20.97371,0,0,0,7.68035,13.72061h0s12.3151-25.49107,12.3151-29.46652v9.93858s9.93007-8.94467,9.93007-14.90777l5.41635,6.957,2.70817-10.93248,33.40108,10.93248-5.41635-8.94468,20.76283,2.98155-8.12483-10.93248s23.471,12.92013,24.37393,23.85261c.90262,10.93232,7.77269,21.29141,7.77269,21.29141S300.26671,181.8794,274.08747,166.97162Z" transform="translate(-93.85347 -131.6937)" fill="#2f2e41"/><rect x="233.29306" y="234.93432" width="384" height="401" fill="#d0cde1"/><rect x="273.29306" y="322.93432" width="284" height="40" fill="#6c63ff"/><rect x="322.11632" y="428.93432" width="185.99441" height="20" fill="#6c63ff"/><rect x="322.47538" y="463.93432" width="185.99441" height="20" fill="#6c63ff"/><rect x="322.83445" y="498.93432" width="92.9972" height="20" fill="#6c63ff"/><rect x="519.29306" y="599.93432" width="43" height="20" fill="#6c63ff"/><path d="M299.64653,417.128s87-13,100,6-92,29-92,29Z" transform="translate(-93.85347 -131.6937)" fill="#a0616a"/><path d="M139.64653,324.128h-6.26587a10.21521,10.21521,0,0,0-6.9558,2.707c-5.94794,5.52277-18.52459,19.7749-23.77833,45.293-7,34-19,100,8,105s204-19,204-19l-13-46-128,1s2-22-2-36S139.64653,324.128,139.64653,324.128Z" transform="translate(-93.85347 -131.6937)" fill="#575a89"/><circle cx="409.29306" cy="93.93432" r="41" fill="#d0cde1"/><circle cx="596.29306" cy="93.93432" r="41" fill="#3f3d56"/><path d="M877.14653,267.628a42,42,0,1,1,42-42A42.0475,42.0475,0,0,1,877.14653,267.628Zm0-82a40,40,0,1,0,40,40A40.04551,40.04551,0,0,0,877.14653,185.628Z" transform="translate(-93.85347 -131.6937)" fill="#3f3d56"/><path d="M1064.14653,267.628a42,42,0,1,1,42-42A42.0475,42.0475,0,0,1,1064.14653,267.628Zm0-82a40,40,0,1,0,40,40A40.04551,40.04551,0,0,0,1064.14653,185.628Z" transform="translate(-93.85347 -131.6937)" fill="#3f3d56"/><polygon points="403.641 111.377 385.873 87.688 392.273 82.887 404.506 99.197 460.745 42.959 466.401 48.615 403.641 111.377" fill="#3f3d56"/><rect x="16.49572" y="633.8306" width="816.59467" height="2.78201" fill="#3f3d56"/></svg>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-6 card09">
                            <div class="card">
                            {result && (
                                <p className={`${result.success ? 'alert alert-success' : 'alert alert-error'}`}>
                                {result.message}
                                </p>
                            )}
                                <div class="card-body">
                                    <form className={classes.root} autoComplete="off" onSubmit={submitForm} method="post">
                                    <TextField  value={name} onChange={(e) => setName(e.target.value) } name ="name" color="primary" label="Your Name" />
                                    <TextField  value={email} onChange={(e) => setEmail(e.target.value) } name="email" type="email" color="primary" label="Your Email" />
                                    <TextField  value={subject} onChange={(e) => setSubject(e.target.value) } name="subject" type="text" color="primary" label="Subject" />
                                    <TextField
                                        value={message} onChange={(e) => setMessage(e.target.value) }
                                        placeholder="Your Message"
                                        name="message"
                                        multiline
                                        variant="outlined"
                                        rows={3}
                                        rowsMax={4}
                                        />
                                    <button type="submit" class="btn btn-primary btn800">Contact Me</button>
                                    </form>
                                </div>
                            </div>
                           
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;
