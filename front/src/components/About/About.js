import React, { useState } from 'react';
import SimpleCard from '../Card/Card';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './About.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import axios from 'axios';

const useStyles = makeStyles({
    root:{
        display: 'flex',
        backgroundColor: '#eaeded',
        height:'200vh'
    },
    card1:{
        backgroundColor: 'white',
        width: '100%',
        height: '70vh',
        boxSizing: 'border-box',
        margin: '10% 8%',
        borderRadius:'15%'
    },
   card2:{
    backgroundColor: 'white',
    width: '100vw',
    height: '70vh',
    boxSizing: 'border-box',
    margin: '10% 8%',
    borderRadius:'15%'
   }
  });
  

function About() {
    const classes = useStyles();
    const [file,setFile] = useState('');
    let fi;

    const submit = (e) => {
        e.preventDefault();
        axios({
            url: 'https://yashvirani.herokuapp.com/upload',
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
              console.log(response);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'yash-virani.pdf');
            document.body.appendChild(link);
            link.click();
          });
        // axios.get("http://localhost:8000/upload").then(res => {
        //     console.log(res);
        // })
        // const data = new FormData();
        // data.append("file",file);
        // axios.post("http://localhost:8000/upload",data,{
        //     headers:{
        //         'Content-Type':'application/pdf'
        //     }
        // })
        //             .then(res => {
        //                 console.log(res);
                        
                        
        //             }).catch(err => {
        //                 console.log(err);
        //             });
        // // axios.get("http://localhost:8000/download/cc783c59817545c84be71c8e03f3f480.pdf");
        // axios({
        //     url: 'http://localhost:8000/download/6015342184bf0f63442cd158',
        //     method: 'GET',
        //     responseType: 'blob', // important
        //   }).then((response) => {
        //     const url = window.URL.createObjectURL(new Blob([response.data]));
        //     const link = document.createElement('a');
        //     link.href = url;
        //     link.setAttribute('download', 'file.pdf');
        //     document.body.appendChild(link);
        //     link.click();
        //   });
        

    }
    
    return (
        <div className="about">
            <div class="container">
                <div class="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 about">
                        <h3 class="text-center">ABOUT ME</h3>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <svg className="aboutSvg" id="e7d24159-a105-4c62-98a5-787fb4a09ca9" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1061.97998" height="562.10004" viewBox="0 0 1061.97998 562.10004"><title>personal_info</title><polygon points="1061.98 100.16 1061.98 218.47 1059.98 215.49 916.49 2 915.14 0 994.66 0 996 2 1059.98 97.18 1061.98 100.16" fill="#6c63ff"/><path d="M629.15,168.95A558.42252,558.42252,0,0,0,233.07,333.01q-13.36506,13.365-25.7,27.47a556.1246,556.1246,0,0,0-46.51,61.05q-6.09,9.255-11.8,18.75a560.14134,560.14134,0,0,0-36.03,70.78q-1.695,3.99-3.31006,8.01-8.985,22.155-15.99,44.89a554.27448,554.27448,0,0,0-22.9,119.48q-1.815,22.665-1.82,45.65v1H1130.99V168.95Zm499.84,559.14H71.01q.03-20.4,1.52-40.43A554.15464,554.15464,0,0,1,94.99,567.08q6.99-23.01,15.88-45.15a555.155,555.155,0,0,1,39.25-79.02q5.685-9.525,11.79-18.8A558.6761,558.6761,0,0,1,208.33,362.83c102.4-117.5,253.09-191.88,420.82-191.88h499.84Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><path d="M564.60263,649.81336c13.487,40.58989,8.75034,78.70124,8.75034,78.70124s-26.60336-27.69787-40.09034-68.28776-8.75035-78.70124-8.75035-78.70124S551.11564,609.22347,564.60263,649.81336Z" transform="translate(-69.01001 -168.94998)" fill="#6c63ff"/><path d="M582.10332,649.81336c-13.487,40.58989-8.75035,78.70124-8.75035,78.70124s26.60336-27.69787,40.09035-68.28776,8.75034-78.70124,8.75034-78.70124S595.5903,609.22347,582.10332,649.81336Z" transform="translate(-69.01001 -168.94998)" fill="#6c63ff"/><path d="M587.53537,650.25229c.904,42.76237-14.87181,77.77714-14.87181,77.77714S555.422,693.71268,554.518,650.9503s14.87181-77.77714,14.87181-77.77714S586.63134,607.48991,587.53537,650.25229Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><ellipse cx="503.64464" cy="559.56188" rx="38.14129" ry="2.09312" fill="#3f3d56"/><circle cx="140.00985" cy="538.57151" r="21.64124" fill="#f2f2f2"/><path d="M212.99,672.51a29.30044,29.30044,0,0,0-29.26,29.27c0,.16,0,.32.01.48a29.3294,29.3294,0,0,0,16.44,25.83,28.32982,28.32982,0,0,0,5.37,2,29.3482,29.3482,0,0,0,14.89,0,28.32982,28.32982,0,0,0,5.37-2,29.26809,29.26809,0,0,0-12.82-55.58Zm7.16,55.58a26.84072,26.84072,0,0,1-7.16.96c-.48,0-.96-.01-1.43-.04h-.01a26.28314,26.28314,0,0,1-5.71-.92,27.35859,27.35859,0,0,1-17.85-15.45V712.63a27.26025,27.26025,0,1,1,32.16,15.46Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><rect x="227.98999" y="391.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="122.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="185.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="246.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="307.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="370.52368" width="162" height="28.76636" fill="#f2f2f2"/><rect x="732.98999" y="433.52368" width="162" height="28.76636" fill="#f2f2f2"/><path d="M296,550.24v40H512v-40Zm214,38H298v-36H510Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><circle cx="586.98999" cy="156.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="218.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="280.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="342.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="404.29004" r="10" fill="#3f3d56"/><circle cx="586.98999" cy="466.29004" r="10" fill="#3f3d56"/><rect x="676.98999" y="155.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="217.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="279.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="341.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="403.29004" width="274" height="2" fill="#3f3d56"/><rect x="676.98999" y="465.29004" width="274" height="2" fill="#3f3d56"/><path d="M1069.36035,692.1658l-26.28613-21.56543,21.56543-26.28613,26.28613,21.56543ZM1045.88867,670.323l23.19434,19.02832,19.02832-23.19434L1064.917,647.12869Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><rect x="650" y="208.24002" width="32" height="32" transform="translate(224.31797 -540.49109) rotate(39.36505)" fill="#6c63ff"/><path d="M537,387.24a132.32634,132.32634,0,0,1-25.6,78.44c-1.9,2.6-3.89,5.14-5.9801,7.59A133.41511,133.41511,0,0,1,485.72,492.17c-.72.56-1.45,1.12-2.18994,1.67q-4.04993,3.03-8.33008,5.75c-.86987.55-1.74,1.09-2.61987,1.61q-2.985,1.815-6.08008,3.46c-1.01.54-2.03,1.07-3.05,1.58a133.0906,133.0906,0,0,1-133.1499-8.29c-1.04-.68-2.06006-1.38-3.07007-2.1-1.8999-1.34-3.77-2.74-5.59-4.18-1.68-1.32-3.31994-2.69-4.93-4.09a133.16764,133.16764,0,0,1-22.35-25.04q-1.86-2.715-3.6-5.52A133.0056,133.0056,0,1,1,537,387.24Z" transform="translate(-69.01001 -168.94998)" fill="#3f3d56"/><circle cx="329.98124" cy="175.49358" r="36.23421" fill="#a0616a"/><path d="M374.08024,361.80578s12.07806,27.17566-4.52928,37.744,27.17565,54.35131,27.17565,54.35131l48.31228-51.33179s-25.6659-16.60735-21.13662-43.783Z" transform="translate(-69.01001 -168.94998)" fill="#a0616a"/><path d="M485.72,492.17c-.72.56-1.45,1.12-2.18994,1.67q-4.04993,3.03-8.33008,5.75c-.86987.55-1.74,1.09-2.61987,1.61l-.37012-2.01,3.48-1.81Z" transform="translate(-69.01001 -168.94998)" fill="#a0616a"/><path d="M472.58,501.2c.88-.52,1.75-1.06,2.62-1.61l.03-.4.46-1.81,19.17-75.18-58.11-26.74-33.98,20.7-30.44-18.77s-17.88.65-22.41,5.18c-3.55,3.55-20.96,11.72-28.36,15.1-2.06.94-3.34,1.51-3.34,1.51s1.14,34.26,3.42,72.49c1.82,1.44,3.69,2.84,5.59,4.18,1.01.72,2.03,1.42,3.07,2.1a133.0909,133.0909,0,0,0,133.15,8.29Z" transform="translate(-69.01001 -168.94998)" fill="#6c63ff"/><path d="M330.30005,417.67v80.28c-1.04-.68-2.06006-1.38-3.07007-2.1-1.8999-1.34-3.77-2.74-5.59-4.18-1.68-1.32-3.31994-2.69-4.93-4.09a133.16764,133.16764,0,0,1-22.35-25.04q-1.86-2.715-3.6-5.52,1.47-4.83,3.3-10.67C301.61,422.2,318.22,417.67,318.22,417.67Z" transform="translate(-69.01001 -168.94998)" fill="#6c63ff"/><path d="M472.58,501.2c.88-.52,1.75-1.06,2.62-1.61q4.275-2.715,8.33-5.75c.74-.55,1.47-1.11,2.19-1.67a133.41933,133.41933,0,0,0,19.7-18.9c2.09-2.45,4.08-4.99,5.98-7.59-6.15-19.22-16.54-43.48-16.54-43.48l-21.14-1.51s-8.58,68.68-10.27,85.55Z" transform="translate(-69.01001 -168.94998)" fill="#6c63ff"/><path d="M376.77516,302.50431a68.59116,68.59116,0,0,1-5.66782,4.33667,53.8824,53.8824,0,0,0-6.83273,6.78722l-2.33633,2.61573c-1.9882,2.226-4.09789,4.76652-4.014,7.74994.03114,1.107.37133,2.18118.50459,3.28059.52864,4.36124-2.137,9.1548.05728,12.96072.63439,1.10033,1.61561,1.96065,2.315,3.02088a7.06221,7.06221,0,0,1,1.11614,4.59872c2.358.09666,4.29237-2.01649,5.03191-4.25764s.63953-4.66228.99971-6.99466,1.37182-4.80207,3.49113-5.84044c4.52191-2.21554,9.71442,3.5448,14.541,2.10933,3.37-1.00228,5.14727-5.17993,8.59271-5.88046,2.466-.50139,4.84.96382,7.1322,2.00233s5.382,1.51925,7.00284-.40577c1.07309-1.2745,1.18762-3.31688,2.61091-4.183,1.70578-1.038,3.842.40723,5.13345,1.9301s2.718,3.385,4.714,3.32962c2.6479-.07353,4.6761-3.6,7.18943-2.76337,2.8368.94429,1.53211,5.4838,3.25332,7.9285,1.45517,2.06683,4.50251,1.94511,7.007,1.60364a2.50964,2.50964,0,0,0,2.61271-3.35108l-1.04612-13.87233a6.69786,6.69786,0,0,0-.61352-2.76857c-.72832-1.31945-2.23653-1.98767-3.26215-3.092-2.15642-2.32188-2.05279-6.39238-4.73431-8.08079-1.39236-.87669-3.21364-.85037-4.59615-1.74253-1.773-1.14414-2.34413-3.43554-3.58609-5.14144-1.7755-2.43875-4.87962-3.56945-7.88023-3.8797s-6.02918.06393-9.04451-.03441c-6.13016-.2-12.26013-1.92524-18.42018-.9153C382.67183,294.436,380.41543,298.99644,376.77516,302.50431Z" transform="translate(-69.01001 -168.94998)" fill="#2f2e41"/><circle cx="1022.01666" cy="122.51002" r="4.18624" fill="#3f3d56"/><circle cx="993.01666" cy="71.51002" r="4.18624" fill="#3f3d56"/><circle cx="981.01666" cy="16.51002" r="4.18624" fill="#3f3d56"/></svg>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 card34">
                    <div class="card">
                            <div class="card-body">
                                <svg className="avatarSvg" id="e59edb86-a3bc-4694-8aac-31e565ca5cfc" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="676" height="676" viewBox="0 0 676 676"><title>male_avatar</title><path d="M938,450a336.852,336.852,0,0,1-27.22,133.1L909.66,585.68A338.559,338.559,0,0,1,541.35,782.93q-3.045-.54-6.08-1.12a334.98111,334.98111,0,0,1-61.14-18.03q-4.815-1.935-9.56-4.01c-2.16-.94-4.32-1.91-6.46-2.91A338.41424,338.41424,0,0,1,262,450c0-186.67,151.33-338,338-338S938,263.33,938,450Z" transform="translate(-262 -112)" fill="#6c63ff"/><path d="M541.35,782.93q-3.045-.54-6.08-1.12c-1.32-38.31-5.85-116.94-21.30005-199.29C505.52,537.45,493.79,491.25,477.52,449.95a412.60387,412.60387,0,0,0-19.07-41.84c-16.44-31.05-36.38-57.19-60.56-74.9l3.56-4.86q30.165,22.11,54.22,62.08,7.215,11.97,13.86005,25.54,7.125,14.52,13.59,30.83,4.125,10.38,7.97,21.48,16.74,48.195,28.46,109.98,2.59506,13.65,4.94,27.97C536.6,680.2,540.25,748.59,541.35,782.93Z" transform="translate(-262 -112)" opacity="0.2"/><path d="M464.57,759.77c-2.16-.94-4.32-1.91-6.46-2.91-2.09-22.7-5.93-50.86-12.95-77.59A254.55666,254.55666,0,0,0,433.35,644.07c-8.01-18.75-18.38-34.69-31.79-44.52l3.56-4.85c14.04,10.28,24.87,26.53,33.24,45.54,9.43,21.42,15.72,46.35,19.91,70.17C461.38,728.1,463.34,745.19,464.57,759.77Z" transform="translate(-262 -112)" opacity="0.2"/><circle cx="102.26174" cy="190.98167" r="30.08857" opacity="0.2"/><circle cx="111.9514" cy="449.99083" r="30.08857" opacity="0.2"/><path d="M483.71449,353.52139c-6.38046,35.99732,7.70456,68.59225,7.70456,68.59225s24.42979-25.76825,30.81025-61.76557-7.70457-68.59225-7.70457-68.59225S490.09494,317.52407,483.71449,353.52139Z" transform="translate(-262 -112)" opacity="0.2"/><path d="M383.71766,438.97122c34.33494,12.555,68.83676,4.498,68.83676,4.498s-21.16612-28.41279-55.50106-40.96784-68.83675-4.498-68.83675-4.498S349.38272,426.41617,383.71766,438.97122Z" transform="translate(-262 -112)" opacity="0.2"/><path d="M377.89534,668.333c24.066,8.80008,48.28314,3.0594,48.28314,3.0594S411.37687,651.384,387.31086,642.5839s-48.28314-3.0594-48.28314-3.0594S353.82933,659.53292,377.89534,668.333Z" transform="translate(-262 -112)" opacity="0.2"/><circle cx="337.30608" cy="281.0788" r="131.77014" fill="#d0cde1"/><path d="M547.83337,493.96531s16.47127,78.23852,16.47127,86.47415,78.23852,45.296,78.23852,45.296L712.546,613.382,737.253,539.26129s-41.17817-61.76725-41.17817-86.47415Z" transform="translate(-262 -112)" fill="#d0cde1"/><path d="M910.78,583.1,909.66,585.68A338.559,338.559,0,0,1,541.35,782.93q-3.045-.54-6.08-1.12a334.98111,334.98111,0,0,1-61.14-18.03q-4.815-1.935-9.56-4.01c-2.16-.94-4.32-1.91-6.46-2.91a337.59273,337.59273,0,0,1-55.25-32.28l-15.62-45.31,8.78-6.69995,18.06-13.79,19.27-14.71,5.01-3.83,75.61-57.72,5.58-4.26,39.3-30,.01-.01s42.5,69.25,104.27,48.66,60.42-79.63,60.42-79.63Z" transform="translate(-262 -112)" fill="#2f2e41"/><path d="M485.03538,286.916s41.83653-90.64581,122.02321-69.72755,125.50958,52.29566,128.996,83.67306-1.74319,78.44348-1.74319,78.44348-8.716-64.498-64.498-50.55247-142.94147,3.48638-142.94147,3.48638L512.9264,457.74849s-15.6887-22.66145-33.12058-8.71594S429.25335,314.807,485.03538,286.916Z" transform="translate(-262 -112)" fill="#2f2e41"/><path d="M474.13,763.78q-4.815-1.935-9.56-4.01c-2.16-.94-4.32-1.91-6.46-2.91a338.835,338.835,0,0,1-87.59-58.7c9.19-12.52,16.72-18.89,16.72-18.89h61.77l9.26,31.14Z" transform="translate(-262 -112)" fill="#2f2e41"/><path d="M856.67,576.32l52.99,9.36A337.94434,337.94434,0,0,1,852.9,674.25Z" transform="translate(-262 -112)" fill="#2f2e41"/></svg>
                                <h5 class="card-title">Yash Virani</h5>
                                <hr className="hr1"></hr>
                                <p class="card-text">
                                    <p className="p1">Web Developer</p>
                                    <p className="p2">Software Development</p>
                                    <p className="p2">Freelancer</p>
                                </p>
                                <hr className="hr2" ></hr>
                                    <div className="social">
                                        <div className="facebook">
                                            <FacebookIcon />
                                        </div>
                                        <div className="instagram">
                                            <InstagramIcon />
                                        </div>
                                        <div className="linkedIn">
                                            <LinkedInIcon />
                                        </div>
                                        <div className="twitter">
                                            <TwitterIcon />
                                        </div>
                                    </div>
                                <hr></hr>
                                {/* <form method="post" action="http://localhost:8000/upload" encType="multipart/form-data">
                                    <input type="file" name="file" accept=".pdf"  onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFile(file);
                                    }}/>
                                    <button type="submit" class="btn btn-primary buttonCV" download> DownLoad CV</button>
                                </form> */}
                                <button type="submit" class="btn btn-primary buttonCV" onClick={submit}> DownLoad CV</button>
                            </div>
                            </div>
                    </div>
                
                    <div class="col-sm-4 card2">
                             <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title web">I am a Web Developer based in India</h5>
                                    <hr className="hr5"></hr>
                                    <p class="card-text skills2">
                                       I can design and develop Stylish, Modern Websites and Web Services ensuring best User-Interface with best User-Experience. 
                                    </p>
                                    <hr className="hr5"></hr>
                                    <div className="details">
                                        <div className="details_left">
                                            <p>Age | 19 Years</p>
                                            <p>Nationality | Indian</p>
                                            <p>Freelance | Available</p>
                                            <p>Birthday | 04 June 2001</p>
                                        </div>
                                        <div className="details_right">
                                            <p>Phone | 7891758458</p>
                                            <p>E-mail | viraniyash2001@gmail.com</p>
                                            <p>Residence | Gujarat</p>
                                            <p>Education | Undergraduate</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default About;
