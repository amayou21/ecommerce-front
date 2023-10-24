import React from 'react';
import PrfilePhoto from '../../images/PrfilePhoto.jpeg'
import Mongodb from '../../images/Mongodb.png'
import nodeJs from '../../images/nodeJs.png'
import reactJs from '../../images/reactJs.png'


import { Box, Typography, Grid } from '@mui/material'
// import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { pink, teal } from '@mui/material/colors';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CottageIcon from '@mui/icons-material/Cottage';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LightModeIcon from '@mui/icons-material/LightMode';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

import StorageIcon from '@mui/icons-material/Storage';
import JavascriptIcon from '@mui/icons-material/Javascript';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GitHubIcon from '@mui/icons-material/GitHub';

import OfflinePinOutlinedIcon from '@mui/icons-material/OfflinePinOutlined';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import ReplyIcon from '@mui/icons-material/Reply';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import FitbitOutlinedIcon from '@mui/icons-material/FitbitOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import NordicWalkingOutlinedIcon from '@mui/icons-material/NordicWalkingOutlined';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ComputerIcon from '@mui/icons-material/Computer';
const Info = () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "white", color: "black" }} >
      <Grid container sx={{ marginTop: "0px", bgcolor: "white", color: "black" }}>

        <Grid xl={3} md={3} sx={{ py: "35px" }} className="break-words bg-gradient-to-r from-neutral-300 to-stone-400">

          <div >

            <div className="flex flex-col items-center break-words">
              <Avatar alt="Remy Sharp" src={PrfilePhoto} sx={{ width: 200, height: 250 }} />
              <Typography variant="h5" color="inhiret" className=" py-5"><p className="">AMAGUAR Youssef</p></Typography>
              <Typography variant="h5" color="inhiret"><ManageAccountsOutlinedIcon fontSize="large" sx={{ color: teal[500] }} />21ans</Typography>
            </div>

            <CardContent>
              <Typography gutterBottom variant="p" component="div" className="flex items-center">
                <BusinessCenterIcon fontSize="small" sx={{ color: teal[500] }} />
                <p className="ml-2">Développeur Full Stack</p>
              </Typography>
              <Typography gutterBottom variant="p" component="div" className="flex items-center">
                <CottageIcon fontSize="small" sx={{ color: teal[500], margin: "" }} />
                <p className="ml-2">Casablanca Morroco</p>
              </Typography>
              <Typography gutterBottom variant="p" component="div" className="flex items-center">
                <MarkEmailReadIcon fontSize="small" sx={{ color: teal[500] }} />
                <p className="ml-2">amagaryoussef10@gmail.com</p>
              </Typography>
              <Typography gutterBottom variant="p" component="div" className="flex items-center">
                <PhoneInTalkIcon fontSize="small" sx={{ color: teal[500] }} />
                <p className="ml-2">+212 657792431</p>
              </Typography>
            </CardContent>

            <CardContent >

              <Typography gutterBottom variant="p" component="div" className="flex items-center">
                <AccountCircleIcon sx={{ fontSize: 40, color: teal[500] }} />
                <p className="ml-2">Profile</p>
              </Typography>
              <Typography variant="body2" color="black" className="p-2 outline outline-offset-2 
              outline-[#009688] rounded outline-2 ">
                Youssef Amaguar, développeur full-stack passionné
                par les technologies web modernes. Il possède une
                expertise solide dans la pile technologique MERN
                stack, en particulier dans les frameworks MongoDB et Express, ReactJs et NodeJs.
                et je suis collaborateur engagé
                et apprécie travailler en équipe pour relever des défis
                ambitieux. En dehors du travail, il aime se tenir au
                courant des dernières tendances technologiques et
                découvrir de nouvelles technologies
              </Typography>
            </CardContent>

            <CardContent>

              <Typography gutterBottom variant="p" component="div" className="flex items-center">
                <LightModeIcon sx={{ fontSize: 40, color: teal[500] }} />
                <p className="ml-2">Meilleures Compétences</p>
              </Typography>

              <Typography variant="body2" color="black" className="p-2 flex items-center">
                <StorageIcon fontSize="small" sx={{ color: "#4caf50" }} />
                <p className="ml-2">MongoDB</p>
              </Typography>
              <Typography variant="body2" color="black" className="p-2 flex items-center" >
                <JavascriptIcon fontSize="small" sx={{ color: "#ffff00" }} />
                <p className="ml-2">Express Js</p>
              </Typography>
              <Typography variant="body2" color="black" className="p-2 flex items-center" >
                <FlipCameraAndroidIcon fontSize="small" sx={{ color: "#00b0ff" }} />
                <p className="ml-2">React Js</p>
              </Typography>
              <Typography variant="body2" color="black" className="p-2 flex items-center">
                <ReplyAllIcon fontSize="small" sx={{ color: "#00e676" }} />
                <p className="ml-2">Node Js</p>
              </Typography>
            </CardContent>

            <CardContent >

              <Typography gutterBottom variant="p" component="div" className="flex items-center">
                <LanguageIcon sx={{ fontSize: 40, color: teal[500] }} />
                <p className="ml-2">Langues</p>
              </Typography>
              <div>
                <p>Arab</p>
                <div className="mb-2 w-3/4 bg-gray-300 rounded-lg">
                  <div className="bg-teal-500 rounded-lg h-3" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <p>English</p>
                <div className="mb-2 w-3/4 bg-gray-300 rounded-lg">
                  <div className="bg-teal-500 rounded-lg h-3" style={{ width: '52.5%' }}></div>
                </div>
              </div>
              <div>
                <p >Française</p>
                <div className="w-3/4 bg-gray-300 rounded-lg">
                  <div className="bg-teal-500 rounded-lg h-3" style={{ width: '45%' }}></div>
                </div>
              </div>

            </CardContent>

          </div>
        </Grid>

        <Grid xl={9} md={9} sx={{ padding: "50px" }} className="break-words bg-gradient-to-r from-neutral-300 to-stone-400">

          <CardContent >

            <Typography gutterBottom variant="p" component="div" className="flex items-center">
              <SchoolIcon sx={{ fontSize: 40, color: "#009688" }} />
              <p className="ml-2">Éducation</p>
              <p className="ml-2">OFPPT</p>
            </Typography>
            <Typography gutterBottom variant="p" component="div" className="flex items-center">
              <CalendarMonthIcon fontSize="small" sx={{ color: "#e65100" }} />
              <p className="ml-2">2021 - 2023</p>
            </Typography>
            <Typography variant="body2" color="black" className="p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 ">
              Je viens d'obtenir mon diplôme de Technicien Spécialisé en Développement Digital Full Stack, et je suis capable de
              travailler sur l'ensemble de la chaîne de développement d'une application web, de la partie front-end (interface
              utilisateur) à la partie back-end (serveur et base de données).
              Je suis également compétent dans plusieurs technologies.
            </Typography>

          </CardContent>

          <CardContent >

            <Typography gutterBottom variant="p" component="div" className="flex items-center">
              <PropaneTankIcon sx={{ fontSize: 40, color: "#009688" }} />
              <p className="ml-2">
                L'expérience
                professionnelle
              </p>
            </Typography>

            <div >
              {/* <p style={{color:"#c6ff00"}}>Dans le domaine d'informatique</p> */}



              <Typography gutterBottom variant="p" component="div" className="flex items-center ">
              </Typography>
              <Typography gutterBottom variant="p" component="div" className="flex items-center">
                <CalendarMonthIcon fontSize="small" sx={{ color: "#e65100" }} />
                <p className="ml-2"> 15-05-2023 au 15-06-2023 </p>
              </Typography>
              <Typography variant="body2" color="black" className="p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 ">
                <p>J'ai effectué un stage d'une durée d'un mois au sein de la société "web agency" en tant que développeur web full stack. Pendant ce stage, j'ai également créé un site web pour cette entreprise afin de présenter ses services.</p>
                <p> Dans ce projet, j'ai utilisé les technologies
                  <span style={{ color: "black" }} > HTML </span>,
                  <span style={{ color: "black" }}> CSS </span>,
                  <span style={{ color: "black" }}> JavaScript </span>,
                  <span style={{ color: "black" }}> ReactJS </span>
                  et <span style={{ color: "black" }}> React-Bootstrap</span>, pour développer le site web de l'entreprise.</p>

              </Typography>

              <Typography gutterBottom variant="p" component="div" className="flex items-center pt-2">
                <CalendarMonthIcon fontSize="small" sx={{ color: "#e65100" }} />
                <p className="ml-2"> Juillet 2023 - Current </p>
              </Typography>

              <Typography variant="body2" color="black" className="p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 ">

                <Typography gutterBottom variant="p" component="div" className="flex items-center ">


                  <p className="mt-2"><ReplyIcon sx={{ color: "#795548" }} />Back-End</p>
                </Typography>
                J'ai développé un site web e-commerce en utilisant Node.js, Express.js et MongoDB comme base de données.
                J'ai également créé une API RESTful avec Node.js, ce qui m'a permis d'acquérir une expertise approfondie
                dans le développement web avec NodeJS & ExpressJS .
                Grâce à mes compétences en développement web et en gestion de projets, J'ai réussi à créer un site
                ecommerce performant et fonctionnel. J'ai utilisé VsCode  pour écrire le code ainsi que Postman  pour valider
                et tester les requêtes et MongoDBCompass  pour la base de données

                <Typography gutterBottom variant="p" component="div" className="mt-2 flex items-center ">


                  <p className="mt-2"><ReplyIcon sx={{ color: "#795548" }} />Front-End</p>
                </Typography>
                <p>
                  En tant que développeur front-end, j'ai contribué à un site e-commerce en concevant des pages d'accueil attrayantes, une navigation intuitive par catégorie, des fiches produit engageantes et des vues détaillées des produits. J'ai également créé des interfaces d'authentification sécurisées pour les comptes utilisateur et des pages de filtres conviviales, en utilisant ReactJS ,tailwindcss et Material UI , ce qui a amélioré l'expérience globale de shopping

                </p>
              </Typography>








            </div>
{/* 
          </CardContent>

          <CardContent > */}

            <ComputerIcon sx={{ fontSize: 40, color: "#009688" }} />Compétences
            <div class=" outline outline-offset-2 outline-[#009688] rounded outline-2">

              <CardContent >
                <p>Les langages de programmation</p>
                <div className='grid grid-cols-7 gap-1 outline outline-offset-2 outline-orang-500 rounded outline-2 pl-1 mt-2'>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> HTML </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> CSS </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> JavaScript </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> PHP </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> SQL </span>
                  <span style={{ color: "black" }} className='flex justify-center col-span-2 bg-gradient-to-r from-neutral-300 to-stone-400'> MongoDB </span>

                </div>
              </CardContent>
              <CardContent>
                <p>Frameworks</p>
                <div className='grid grid-cols-7 gap-1 outline outline-offset-2 outline-pik-500 rounded outline-2 pl-1 mt-2'>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> NodeJS </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> ExpressJS </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> ReactJS </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> Laravel </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> Bootstrap </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> tailwindcss </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> Material UI </span>

                </div>
              </CardContent>
              <CardContent>
                <p>Outils de travail</p>
                <div className='grid grid-cols-7 gap-1 outline outline-offset-2 outline-pnk-500 rounded outline-2 pl-1 mt-2'>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> Git </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> GitHub</span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> Docker </span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> Postman</span>
                  <span style={{ color: "black" }} className='flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400'> VsCode </span>
                  <span style={{ color: "black" }} className='flex justify-center col-span-2 bg-gradient-to-r from-neutral-300 to-stone-400' > MongoDBCompass </span>


                </div>
              </CardContent>
            </div>
            <div className='grid grid-cols-4 gap-4 ml-2'>
            </div>

          </CardContent>

          <CardContent>

            <Typography gutterBottom variant="p" component="div" className="flex items-center">
              <MedicalInformationOutlinedIcon sx={{ fontSize: 40, color: "#009688" }} />
              <p className="mt-2 ml-2">Autre Formation</p>
            </Typography>
            <Typography gutterBottom variant="p" component="div" className="flex items-center">
              <CalendarMonthIcon fontSize="small" sx={{ color: "#e65100" }} />
              <p className="ml-2">Avril 2023</p>
            </Typography>


            <Typography variant="body2" color="black" className="p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 ">

              <p>J'ai obtenu une certification Microsoft pour Word 2016 et je possède également une solide maîtrise de  PowerPoint  et  Canvas . </p>
          </Typography>
        </CardContent>

        <CardContent>

          <Typography gutterBottom variant="p" component="div" className="flex items-center">
            <FitbitOutlinedIcon sx={{ fontSize: 40, color: "#009688" }} />
            <p className="ml-2">Loisirs</p>
          </Typography>


          <Typography variant="body2" color="black" className="flex justify-around p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 ">

            <Typography gutterBottom variant="p" component="div" className="flex items-center" > <PoolOutlinedIcon sx={{ fontSize: 40, color: "#01579b" }} /><p> Natation</p></Typography>
            <Typography gutterBottom variant="p" component="div" className="flex items-center" > <AutoStoriesOutlinedIcon sx={{ fontSize: 40, color: "#009688" }} /><p> Lire les livres</p></Typography>
            <Typography gutterBottom variant="p" component="div" className="flex items-center" > <SportsSoccerOutlinedIcon sx={{ fontSize: 40, color: "#009688" }} /><p> Football</p></Typography>
            <Typography gutterBottom variant="p" component="div" className="flex items-center" > <NordicWalkingOutlinedIcon sx={{ fontSize: 40, color: "#01579b" }} /><p> Marche nordique</p></Typography>
          </Typography>
        </CardContent>

      </Grid>
    </Grid>

    </Box >
  );
};

export default Info;