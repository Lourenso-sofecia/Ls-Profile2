import { Settings, CropRotate,  ViewInAr, PieChart, Code, BarChart, CloudOutlined, 
    FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube, GitHub} from "@mui/icons-material";
import  buyEcommerce from "./assets/buyEcommerce.png";
import  homeEcommerce1 from "./assets/homeEcommerce1.png";
import  homeEcommerce3 from "./assets/homeEcommerce3.png";
import back1 from "./assets/back1.png";
import  ls from "../data/assets/Lourenço.jpg";
import  leonel from "../data/assets/Leonel.jpeg";
import  clinton from "../data/assets/Clinton.jpeg";

    export const navlink = [
        {
            url: "/",
            text: "HOME",
        },
        {
            url: "/about",
            text: "ABOUT",
        },
        {
            url: "/services",
            text: "SERVICES",
        },
        {
            url: "/portfolio",
            text: "PORTFOLIO",
        },
        {
            url: "/testimonials",
            text: "TESTIMONIALS",
        },
        {
            url: "/citacoes",
            text: "QUOTES",
        },
        {
            url: "/contact",
            text: "CONTACT",
        },
        
    ]
    export const home = [
        {
            text: "Hello I´M",
            name: "Lourenço Sofécia",
            //post2:["Mão na massa", " Autonomia, " ,"gfdj"],
            full: "FullStack",
            front: "React.js, Styled Component...",
            back: "Node.js, MySQL, MongoDB, API RestFul",
            
            //post2: "Flexibilidade e capacidade de se adaptar a mudanças",
            
            design: "Front end",
            desc: "I'm a freelance web developer, I'm a fullstack, but at the moment my focus is to further improve my frontend skills"       
        },
    ]
    export const about = [
        {
            desc: "I'm Lourenço Sofécia, FullStack Developer",
            desc1: "But I'm currently FOCUSED on improving my FRONTEND skills. I am Focused on results, Autonomous, I have Flexibility and ability to adapt to changes, Ability to innovate, Ability to work remotely",
            cover: "./assets/Lourenço.jpg",
        },
    ]
    export const services = [
        {
            id: 1,
            icon: <Settings />,
            title: "Create Design",
            desc: "In my opinion, I creative design, is very essential for front-end development. So i'm focused on creating the most innovative design",
        },
        

        {
            id: 2,
            icon: <CropRotate />,
            title: "Clean Code",
            desc: "Very useful tactic, i have learned a lot and it has improved more and more the efficiency of my codes",
        },
        {
            id: 3,
            icon: <ViewInAr />,
            title: "Responsive Design",
            desc: "For the Programmer knowledge of responsive code is essential because code that responds to any type of screen is important",
        },
        {
            id: 4,
            icon: <PieChart />,
            title: "Material UI",
            desc: "To Speed up code writing use Materal UI, as it is the best way to make web applications faster",
        },
        {
            id: 5,
            icon: <Code />,
            title: "Material UI Icons",
            desc: "To Speed up code writing use Materal UI,  an excellent move in the use of already made",
        },
        {
            id: 6,
            icon: <BarChart />,
            title: "Awesome Support",
            desc: "I am Programmer who appreciates a lot of team spirit and who loves to share ideas with others even though i am a Freelancer at the",
        },

    ]
    export const project = [
        {
            id: 1,
            icon: <CloudOutlined />,
            num: "4",
            title: "HAPPY CLIENTS",
            desc: "HAPPY CLIENTS",
        },
        {
            id: 2,
            icon: <FavoriteBorder />,
            num: "7",
            title: "PROJECTS COMPLEATED",
            desc: "PROJECTS COMPLEATED",
        },
        {
            id: 3,
            icon: <Public />,
            num: "15",
            title: "FILES DOWNLOADED",
            desc: "FILES DOWNLOADED",
        },
        {
            id: 4,
            icon: <PersonOutlined />,
            num: "10",
            title: "LIENS OF CODE",
            desc: "LIENS OF CODE",
        }
    ]
    export const portfolio = [ 

        {
            id: 1,
            cover: homeEcommerce1,
            name: "Ecommerce",
            category: "Front-end",
            title: "Slider",
            url: "https://github.com/sofecia",
        },
        {
            id: 2,
            cover: homeEcommerce3,
            name: "Ecommerce",
            category: "Front-end",
            title: "Newsletter",
            url: "https://github.com/sofecia",
        },
        {
            id: 3,
            cover: buyEcommerce,
            name: "Ecommerce",
            category: "Front-end",
            title: "To Buy",
            url: "https://github.com/sofecia",
        },
        {
            id: 4,
            cover: back1,
            name: "Table-Veiculo",
            category: "Back-End",
            title: "CRUD ",
            url: "https://github.com/sofecia",
        },
    ]
    
    export const testimonials = [
        {
            text: "You won't be able to find any passion if you settle for a life that is inferior to the one you are capable of living. ",
            name: "Lourenço Sofécia",
            post: "Full-Stack Developer",
            img: ls,
        },
        {
            text: "If you get tired, learn to rest, not give up",
            name: "Clinton Sofécia",
            post: "Enfermeiro",
            img: clinton,
        },
        {
            text: "Choose a job you love, and you'll never work a day in your life.",
            name: "Leonel César",
            post: "Front End Developer",
            img: leonel,
        },
        {
            text: "Choose a career that allows you to make a living, not just make a living.",
            name: "Lourenço Sofécia",
            post: "Front-End Developer",
            img: ls,
        },
     ]

    export const citacoes = [
        {
            cover: "img1",
            title: "Citações",
            author: "Lourenço Sofécia -",
            data:"Jun 26, 2022",
            desc:"Celebre sempre cada conquista por mais pequena que seja, nunca soubemos quando virá a tempestade de decepções",
        },
        {
            cover: "img2",
            title: "Citações",
            author: "M.L -",
            data:"Dez 23, 2021",
            desc:"A verdade é aquilo que se pode provar...",
        },
        {
            cover: "img3",
            title: "Citações",
            author: "Lourenço Sofécia -",
            data:"Dez 29, 2021",
            desc:"O Amor é o sentimento mais bonito de sentir, pois nos torna mais humanos... Pra quem não acreditava em cara metade, nossa quem diria. ",
        },
    ];
    export const contact = [
        {
            icon: <AddLocationAltOutlined/>,
            text1:"Angola-Luanda",
            text2:"-------------------",
        },
        {
            icon: <PhoneIphone/>,
            text1:"+244 949 12 52 52",
            text2:"+244 935 14 80 60",
        },
        {
            icon: <EmailOutlined/>,
            text1:"lourenso.sofecia@gmail.com",
            text2:"lsdevgamer@gmail.com",
        },


     ];
     export const social = [
        {
            icon: <Facebook/>,
            url:"#",
        },
        {
            icon: <Twitter/>,
            url:"#",
        },
        {
            icon: <Instagram/>,
            url:"#",
        },
        {
            icon: <YouTube/>,
            url:"#",
        },
        {
            icon: <GitHub/>,
            url:"https://github.com/sofecia",
        },
     ];