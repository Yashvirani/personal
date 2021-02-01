import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Appbar.css';
import {
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    CssBaseline
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  drawerTxt:{
    textAlign:'center',
    fontWeight:'800',
    textDecoration:'none'
  },
  drawerSvg:{
      objectFit:'contain',
      height:'40%',
      width:'60%',
      marginLeft:'20%',
      marginTop:'10%',
      marginBottom:'10%'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  drawer: {
    width: 300
  },
  link:{
    textDecoration:'none'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // console.log(window.location.pathname);
  const skills = () => {
    history.push('/skills');
    window.location.reload();
  }
  
  const home = () => {
    history.push('/');
  }

  const contact = () => {
    history.push('/contact');
  }

  const projects = () => {
    history.push('/projects');
  }

  const about = () => {
    history.push('/about');
  }
  
  return (
    <div className={classes.root}>
        <Drawer open={open} onClose={() => setOpen(false)}>
        <List disablePadding className={classes.drawer}>
           <ListItem button >
                <svg className={classes.drawerSvg} id="ed709b15-984e-4c6b-b13e-799af1de279c" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="829.65135" height="548.85377" viewBox="0 0 829.65135 548.85377"><polygon points="609.397 522.909 591.573 522.909 591.573 349.531 632.082 348.721 609.397 522.909" fill="#ffb8b8"/><polygon points="695.276 522.909 713.1 522.909 713.1 349.531 672.591 348.721 695.276 522.909" fill="#ffb8b8"/><path d="M786.20753,722.59773l-37.92441-.34756a12.32726,12.32726,0,0,1-15.28541-11.96706v0a12.32725,12.32725,0,0,1,6.98373-11.10891l8.65094-4.16122,28.11492-19.21538,20.25445,5.67124,3.87928,17.45677A19.93089,19.93089,0,0,1,786.20753,722.59773Z" transform="translate(-185.17433 -175.57311)" fill="#2f2e41"/><path d="M888.28991,722.38279l-37.92441-.34756a12.32726,12.32726,0,0,1-15.28541-11.96706v0a12.32728,12.32728,0,0,1,6.98373-11.10892l8.65094-4.16121,28.11493-19.21539,20.25444,5.67125,3.87928,17.45677A19.9309,19.9309,0,0,1,888.28991,722.38279Z" transform="translate(-185.17433 -175.57311)" fill="#2f2e41"/><path d="M903.1164,553.521l-55.84164-4.98586-7.35222-65.4996-16.46518,63.373-56.4508-5.04025c2.08122-38.80639,6.55935-71.177,17.01373-87.49918l118.28593-21.06462Z" transform="translate(-185.17433 -175.57311)" fill="#2f2e41"/><circle cx="661.50714" cy="44.43856" r="30.17247" fill="#ffb8b8"/><path d="M870.70929,282.92165l-52.66154-6.48142c6.69979-14.26707,9.71936-27.58928,4.86106-38.88853h40.50888C857.155,248.72733,862.75547,265.29021,870.70929,282.92165Z" transform="translate(-185.17433 -175.57311)" fill="#ffb8b8"/><path d="M902.30622,434.42486C865.25088,461.59539,824.81,470.8654,780.77958,461.16073c26.71529-60.99181,22.90017-121.10524,0-180.66961l42.12923-17.82391c11.81285,11.52291,25.36038,11.77355,40.50888,1.62035l41.31906,8.912C897.17892,332.62125,894.64514,387.81381,902.30622,434.42486Z" transform="translate(-185.17433 -175.57311)" fill="#3f3d56"/><path d="M824.42185,193.67369l-5.095-2.03974S829.98,179.90553,844.8018,180.92541l-4.16871-4.58946s10.19-4.07942,19.45353,6.62912c4.8697,5.62926,10.50394,12.24615,14.01633,19.7h5.45636l-2.27731,5.01433,7.97049,5.01432-8.18095-.90071a27.74665,27.74665,0,0,1-.77378,12.98655l.21927,3.96332s-9.48288-14.67194-9.48288-16.71167v5.09933s-5.095-4.58937-5.095-7.649l-2.77909,3.56953-1.38951-5.60928-17.1376,5.60928,2.779-4.58937-10.65308,1.52983,4.16871-5.60929s-12.04264,6.62913-12.5059,12.23842-6.48443,12.74829-6.48443,12.74829l-2.779-5.09933S810.98975,201.32266,824.42185,193.67369Z" transform="translate(-185.17433 -175.57311)" fill="#2f2e41"/><path d="M909.695,498.57311h-183a7.00818,7.00818,0,0,1-7-7v-28a7.00818,7.00818,0,0,1,7-7h183a7.00849,7.00849,0,0,1,7,7v28A7.00848,7.00848,0,0,1,909.695,498.57311Z" transform="translate(-185.17433 -175.57311)" fill="#6c63ff"/><path id="e6024a0c-b89c-4e07-9a96-496d93fbcaea" data-name="Path 40" d="M754.05455,471.62709a5.94683,5.94683,0,0,0,0,11.892H882.14028a5.94683,5.94683,0,0,0,.19525-11.892q-.09762-.00165-.19525,0Z" transform="translate(-185.17433 -175.57311)" fill="#fff"/><path d="M799.41366,449.81824l9.30188,16.58162a14.72369,14.72369,0,0,1-9.12458,21.45048h0a14.7237,14.7237,0,0,1-18.43755-14.53l.43638-22.69193c-6.98857-40.33626-12.66139-78.52713-11.34248-105.32309h32.4071L796.173,376.09208Z" transform="translate(-185.17433 -175.57311)" fill="#ffb8b8"/><path d="M906.35711,453.86913l-6.81339,11.35565a13.12027,13.12027,0,0,1-21.86138.96664v0a13.12027,13.12027,0,0,1,2.98483-18.39338l11.91693-8.51209,17.01373-70.48545-10.53231-29.1664L928.2319,334.773C941.9262,366.42278,928.13221,408.61539,906.35711,453.86913Z" transform="translate(-185.17433 -175.57311)" fill="#ffb8b8"/><path d="M809.946,351.78675l-42.93941-2.43054,2.95-46.0097a29.01218,29.01218,0,0,1,21.58069-28.70543l5.44591-1.44156Z" transform="translate(-185.17433 -175.57311)" fill="#3f3d56"/><path d="M931.47261,337.20355l-39.6987,9.72213V270.769l1.63817-.10568a27.25692,27.25692,0,0,1,28.40675,21.48925Z" transform="translate(-185.17433 -175.57311)" fill="#3f3d56"/><rect x="223.55555" y="546.85377" width="606.0958" height="2" fill="#e6e6e6"/><path d="M211.81176,663.40936a215.89074,215.89074,0,0,0,10.08483,59.67913c.14051.44835.28775.89.43495,1.3384h37.63577c-.04015-.40155-.08034-.8499-.12049-1.3384-2.5095-28.84918-16.97757-204.43348.32124-234.46046C258.65566,491.06393,208.89407,571.74251,211.81176,663.40936Z" transform="translate(-185.17433 -175.57311)" fill="#e6e6e6"/><path d="M214.63576,723.08849c.31455.44835.64245.8967.977,1.3384H243.8463c-.21415-.38145-.46175-.8298-.7495-1.3384-4.66434-8.41853-18.46987-33.58708-31.285-59.67913-13.77212-28.03944-26.40659-57.14288-25.34255-67.67606C186.14131,598.109,176.61193,670.5296,214.63576,723.08849Z" transform="translate(-185.17433 -175.57311)" fill="#e6e6e6"/><path d="M567.0571,399.892h-307a7.00818,7.00818,0,0,1-7-7v-171a7.00818,7.00818,0,0,1,7-7h307a7.00849,7.00849,0,0,1,7,7v171A7.00848,7.00848,0,0,1,567.0571,399.892Z" transform="translate(-185.17433 -175.57311)" fill="#6c63ff"/><path d="M570.85508,724.42689H255.85459a5.00589,5.00589,0,0,1-5-5V219.4513a5.00588,5.00588,0,0,1,5-5H570.85508a5.00589,5.00589,0,0,1,5,5V719.42689A5.00589,5.00589,0,0,1,570.85508,724.42689ZM255.85459,216.4513a3.00328,3.00328,0,0,0-3,3V719.42689a3.00328,3.00328,0,0,0,3,3H570.85508a3.00328,3.00328,0,0,0,3-3V219.4513a3.00328,3.00328,0,0,0-3-3Z" transform="translate(-185.17433 -175.57311)" fill="#e6e6e6"/><circle cx="107.88278" cy="306.31893" r="11" fill="#e6e6e6"/><path d="M525.0571,502.892h-183a7.00818,7.00818,0,0,1-7-7v-28a7.00818,7.00818,0,0,1,7-7h183a7.00849,7.00849,0,0,1,7,7v28A7.00848,7.00848,0,0,1,525.0571,502.892Z" transform="translate(-185.17433 -175.57311)" fill="#e6e6e6"/><path d="M532.0571,503.892h-197a1,1,0,0,1,0-2h197a1,1,0,0,1,0,2Z" transform="translate(-185.17433 -175.57311)" fill="#3f3d56"/><circle cx="107.88278" cy="372.31893" r="11" fill="#e6e6e6"/><path d="M525.0571,568.892h-183a7.00818,7.00818,0,0,1-7-7v-28a7.00818,7.00818,0,0,1,7-7h183a7.00849,7.00849,0,0,1,7,7v28A7.00848,7.00848,0,0,1,525.0571,568.892Z" transform="translate(-185.17433 -175.57311)" fill="#e6e6e6"/><path d="M532.0571,569.892h-197a1,1,0,0,1,0-2h197a1,1,0,0,1,0,2Z" transform="translate(-185.17433 -175.57311)" fill="#3f3d56"/><circle cx="107.88278" cy="438.31893" r="11" fill="#e6e6e6"/><path d="M418.0571,634.892h-76a7.00818,7.00818,0,0,1-7-7v-28a7.00818,7.00818,0,0,1,7-7h76a7.00849,7.00849,0,0,1,7,7v28A7.00848,7.00848,0,0,1,418.0571,634.892Z" transform="translate(-185.17433 -175.57311)" fill="#e6e6e6"/><path d="M425.0571,635.892h-90a1,1,0,0,1,0-2h90a1,1,0,0,1,0,2Z" transform="translate(-185.17433 -175.57311)" fill="#3f3d56"/><path d="M525.0571,634.892h-76a7.00818,7.00818,0,0,1-7-7v-28a7.00818,7.00818,0,0,1,7-7h76a7.00849,7.00849,0,0,1,7,7v28A7.00848,7.00848,0,0,1,525.0571,634.892Z" transform="translate(-185.17433 -175.57311)" fill="#e6e6e6"/><path d="M532.0571,635.892h-90a1,1,0,0,1,0-2h90a1,1,0,0,1,0,2Z" transform="translate(-185.17433 -175.57311)" fill="#3f3d56"/><path id="aa22f97a-b0c4-48a0-9697-8e710bb4cd75" data-name="Path 40" d="M293.41662,268.446a5.94683,5.94683,0,0,0,0,11.89205H533.50234a5.94683,5.94683,0,1,0,.19525-11.89205q-.09762-.00165-.19525,0Z" transform="translate(-185.17433 -175.57311)" fill="#fff"/><path id="a17c1cae-a14a-457b-86dc-2629628de1d6" data-name="Path 40" d="M293.41662,301.446a5.94683,5.94683,0,0,0,0,11.89205H533.50234a5.94683,5.94683,0,0,0,.19525-11.89205q-.09762-.00165-.19525,0Z" transform="translate(-185.17433 -175.57311)" fill="#fff"/><path id="b5ca973b-c484-402e-90b9-a33cbeee2455" data-name="Path 40" d="M293.41662,334.446a5.94683,5.94683,0,0,0,0,11.89205H533.50234a5.94683,5.94683,0,0,0,.19525-11.89205q-.09762-.00165-.19525,0Z" transform="translate(-185.17433 -175.57311)" fill="#fff"/><path d="M522.85434,684.18928l-2.51654-2.5166a.5845.5845,0,0,0-.41351-.17126H518.6998a.58471.58471,0,0,0-.41333.99829l1.39307,1.39233H508.5571a1,1,0,0,0,0,2h11.12244l-1.25092,1.25024a.66793.66793,0,0,0,.47217,1.14039h.989a.6676.6676,0,0,0,.47235-.19568l2.49218-2.49219A.99384.99384,0,0,0,522.85434,684.18928Z" transform="translate(-185.17433 -175.57311)" fill="#6c63ff"/><path d="M516.05735,700.89245a16,16,0,1,1,16-16A16.01833,16.01833,0,0,1,516.05735,700.89245Zm0-30a14,14,0,1,0,14,14A14.01572,14.01572,0,0,0,516.05735,670.89245Z" transform="translate(-185.17433 -175.57311)" fill="#3f3d56"/></svg>
           </ListItem>
          <ListItem button  onClick={home}>
            <ListItemText style={classes.drawerText}  primary="Home" className={classes.drawerTxt}/>
          </ListItem>
          <ListItem button onClick={skills}>
            <ListItemText primary="Skills"  className={classes.drawerTxt}/>
            
          </ListItem>
          <ListItem button onClick={projects}>
            <ListItemText primary="Projects" className={classes.drawerTxt} />
          </ListItem>
          <ListItem button onClick={about}>
            <ListItemText primary="About" className={classes.drawerTxt}/>
          </ListItem>
          <ListItem button onClick={contact}>
            <ListItemText primary="Contact" className={classes.drawerTxt}/>
          </ListItem>
        </List>
      </Drawer>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
